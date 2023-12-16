import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { CONSTANTS } from './constants';
import { FontAwesome5 } from '@expo/vector-icons';

const { SWIPE_SIZE, PADDING, CIRCLE_SIZE } = CONSTANTS;

export const Container = styled(Animated.View)`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  background-color: #f2f2f2;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Animated.View)`
  width: ${SWIPE_SIZE}px;
  height: 60px;
  background-color: bisque;
  border-radius: 100px;
  justify-content: center;
  padding: 0 ${PADDING}px;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled(Animated.View)`
  width: ${CIRCLE_SIZE}px;
  height: 50px;
  background-color: #f1f1f1;
  border-radius: 100px;
  position: absolute;
  left: ${PADDING}px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Animated.Text)`
  color: #fff;
  font-size: 14px;
  font-family: 'Inter_400Regular';
`;

const FontAwesome5Animated = Animated.createAnimatedComponent(
  FontAwesome5
) as any;

export const Icon = styled(FontAwesome5Animated).attrs({
  name: 'microphone-alt',
  size: 24,
})``;
