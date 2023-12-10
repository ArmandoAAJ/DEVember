import React from 'react';
import { Button, Container, Icon, IconM } from './styles';
import { router } from 'expo-router';

interface ControllsProps {
  onPressPlay: () => void;
  onPressPause: () => void;
}

export const Controlls: React.FC<ControllsProps> = ({
  onPressPlay,
  onPressPause,
}) => {
  const [isRunning, setIsRunning] = React.useState(true);
  return (
    <Container>
      <Button
        active={isRunning}
        onPress={() => {
          if (isRunning) return;
          setIsRunning(!isRunning);
          onPressPlay();
        }}
      >
        <Icon name="play" />
      </Button>
      <Button
        active={!isRunning}
        onPress={() => {
          if (!isRunning) return;
          setIsRunning(!isRunning);
          onPressPause();
        }}
      >
        <Icon name="pause" />
      </Button>
      <Button active={false} onPress={() => router.back()}>
        <IconM name="window-close" />
      </Button>
    </Container>
  );
};
