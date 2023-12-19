import React, { useEffect, useState } from 'react';

import { COMPONENTS } from './components';
import { Recording } from 'expo-av/build/Audio';
import { Audio } from 'expo-av';
import { Container, Text } from './styles';
import { openSettings } from 'expo-linking';
import { useSharedValue } from 'react-native-reanimated';
import { Memo } from './components/AVListRecording';

const { AVWrapper, AVListRecording } = COMPONENTS;

const ScreenSeven: React.FC = () => {
  const [recording, setRecording] = useState<Recording>();
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [audioMetering, setAudioMetering] = useState<number[]>([]);

  const metering = useSharedValue(-100);

  const getPermission = async () => {
    const { granted } = await Audio.requestPermissionsAsync();

    if (granted) {
      setIsPermissionGranted(true);
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const onRecord = async () => {
    try {
      setAudioMetering([]);

      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        undefined,
        100
      );
      setRecording(recording);

      recording.setOnRecordingStatusUpdate((status) => {
        if (status.metering) {
          metering.value = status.metering;
          setAudioMetering((curVal) => [...curVal, status.metering || -100]);
        }
      });
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const onStop = async () => {
    if (!recording) {
      return;
    }

    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
  };

  const onSend = async () => {
    if (!recording) return;
    await onStop();
    const uri = recording.getURI();
    metering.value = -100;
    if (uri) {
      setMemos((existingMemos) => [
        { uri, metering: audioMetering },
        ...existingMemos,
      ]);
    }
  };

  if (!isPermissionGranted) {
    return (
      <Container
        onPress={() => {
          openSettings();
        }}
      >
        <Text>Open settings</Text>
      </Container>
    );
  }

  return (
    <>
      <AVListRecording memos={memos} />
      <AVWrapper
        onSend={onSend}
        onRecord={onRecord}
        onStop={onStop}
        metering={metering}
      />
    </>
  );
};

export default ScreenSeven;
