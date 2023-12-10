import React, { useRef } from 'react';

import { Container, LottieView } from './styles';
import { Stack } from 'expo-router';

import { CONSTANTS } from './constants';
import { COMPONENTS } from './components';
import AnimatedLottieView, {
  AnimatedLottieViewProps,
} from 'lottie-react-native';
const animatedLottieView = require('@assets/lottie/netflix.json');

const { STACK_OPTIONS } = CONSTANTS;
const { Controlls } = COMPONENTS;

interface ScreenFourProps extends AnimatedLottieViewProps {
  controls?: boolean;
  stackActive?: boolean;
  onFinish?: () => void;
}

const ScreenFour: React.FC<ScreenFourProps> = ({
  controls = true,
  stackActive = true,
  onFinish,
  ...rest
}) => {
  const ref = useRef<AnimatedLottieView>(null);

  return (
    <>
      <Container>
        {stackActive && <Stack.Screen options={{ ...STACK_OPTIONS }} />}
        <LottieView
          {...rest}
          source={animatedLottieView}
          ref={ref}
          autoPlay
          onAnimationFinish={onFinish}
        />
      </Container>
      {controls && (
        <Controlls
          onPressPlay={() => ref?.current?.play()}
          onPressPause={() => ref?.current?.pause()}
        />
      )}
    </>
  );
};

export default ScreenFour;
