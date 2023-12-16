import React, { useCallback, useEffect, useState } from 'react';

import { Container, Content, Left, Line, Right, Text } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { AVPlaybackStatus, Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { Memo } from '../AVListRecording';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface Props {
  item: Memo;
}

export const AVPlayer: React.FC<Props> = ({ item }) => {
  if (!item?.metering) return null;
  const { metering, uri } = item;

  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }

  const onPlaybackStatusUpdate = useCallback(
    async (newStatus: AVPlaybackStatus) => {
      setStatus(newStatus);

      if (!newStatus.isLoaded || !sound) {
        return;
      }

      if (newStatus.didJustFinish) {
        await sound?.setPositionAsync(0);
      }
    },
    [sound]
  );

  useEffect(() => {
    loadSound();
  }, [uri]);

  async function playSound() {
    if (!sound) {
      return;
    }
    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.replayAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatMillis = (millis: number) => {
    const minutes = Math.floor(millis / (1000 * 60));
    const seconds = Math.floor((millis % (1000 * 60)) / 1000);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;

  const progress = position / duration!;

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: `${progress * 100}%`,
  }));

  let numLines = 50;
  let lines = [];

  for (let i = 0; i < numLines; i++) {
    const meteringIndex = Math.floor((i * metering.length) / numLines);
    const nextMeteringIndex = Math.ceil(((i + 1) * metering.length) / numLines);
    const values = metering.slice(meteringIndex, nextMeteringIndex);
    const average = values.reduce((sum, a) => sum + a, 0) / values.length;
    lines.push(average);
  }

  return (
    <Container>
      <Content>
        <Left
          onPress={() => {
            playSound();
          }}
        >
          <FontAwesome5
            onPress={playSound}
            name={isPlaying ? 'pause' : 'play'}
            size={20}
            color={'gray'}
          />
        </Left>
        <Right>
          {lines.map((line, index) => {
            if (index === lines.length - 1) return;
            return (
              <Line
                style={[
                  {
                    height: interpolate(
                      line,
                      [-65, 0],
                      [5, 50],
                      Extrapolate.CLAMP
                    ),
                    backgroundColor:
                      progress > index / lines.length
                        ? 'royalblue'
                        : 'gainsboro',
                  },
                ]}
                key={index}
              />
            );
          })}
          <Text isLeft>{formatMillis(position || 0)}</Text>
          <Text>{formatMillis(duration || 0)}</Text>
        </Right>
      </Content>
    </Container>
  );
};
