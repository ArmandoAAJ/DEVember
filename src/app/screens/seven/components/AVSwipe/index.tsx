import React from 'react';

import { Container, Content, Circle, Text, Icon } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  FadeOut,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { CONSTANTS } from './constants';
const { COLORS, COLORS_REVERSE, POINTS, END_POSITION } = CONSTANTS;

interface AVSwipeProps {
  onPress: () => void;
}

export const AVSwipe: React.FC<AVSwipeProps> = ({ onPress }) => {
  const position = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX > 0 && e.translationX < END_POSITION) {
        position.value = e.translationX;
      }
    })
    .onEnd((e) => {
      if (e.translationX < END_POSITION / 3) {
        position.value = withTiming(0, {
          duration: 500,
        });
      } else {
        position.value = withTiming(END_POSITION, {
          duration: 500,
        });
        if (e.velocityX > 0) {
          runOnJS(onPress)();
        }
      }
    });

  const animatedCircle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    backgroundColor: interpolateColor(position.value, POINTS, COLORS),
  }));

  const animatedContent = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(position.value, POINTS, COLORS_REVERSE),
  }));

  const animatedText = useAnimatedStyle(() => ({
    color: interpolateColor(position.value, POINTS, COLORS),
  }));

  const animatedIcon = useAnimatedStyle(() => ({
    color: interpolateColor(position.value, POINTS, COLORS_REVERSE),
    transform: [
      {
        rotateZ: `${interpolate(
          position.value,
          POINTS,
          [0, -90, -180, -360]
        )}deg`,
      },
    ],
  }));

  return (
    <Container style={{ paddingBottom: bottom }}>
      <Content style={[animatedContent]} exiting={FadeOut}>
        <Text style={[animatedText]}>Slide to start recording</Text>
        <GestureDetector gesture={gesture}>
          <Circle style={[animatedCircle]}>
            <Icon style={[animatedIcon]} />
          </Circle>
        </GestureDetector>
      </Content>
    </Container>
  );
};
