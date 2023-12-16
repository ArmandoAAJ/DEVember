import React from 'react';

import { AnimatedMic, Button, ButtonMic, Container, Content } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FontAwesome5 } from '@expo/vector-icons';

import {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface AVRecordingProps {
  onDelete: () => void;
  onSend: () => void;
  metering: number;
}

export const AVRecording: React.FC<AVRecordingProps> = ({
  onDelete,
  onSend,
  metering,
}) => {
  const { bottom } = useSafeAreaInsets();

  const metteringStyle = useAnimatedStyle(() => {
    const size = withTiming(
      interpolate(metering.value, [-160, -60, 0], [0, 0, 180]),
      {
        duration: 100,
      }
    );

    return {
      width: size,
      height: size,
    };
  });

  return (
    <Container style={{ paddingBottom: bottom }}>
      <Content>
        <Button left onPress={onDelete}>
          <FontAwesome5 name="trash" size={24} color="red" />
        </Button>
        <AnimatedMic style={[metteringStyle]}>
          <ButtonMic>
            <FontAwesome5 name="microphone-alt" size={24} color="white" />
          </ButtonMic>
        </AnimatedMic>
        <Button onPress={onSend}>
          <FontAwesome5 name="play" size={24} color="green" />
        </Button>
      </Content>
    </Container>
  );
};
