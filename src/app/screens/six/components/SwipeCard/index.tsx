import React from 'react';

import { Content, Gradient, Image, Title } from './styles';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { CONSTANTS } from '../../constants';
import { StyleSheet } from 'react-native';
import {
  Extrapolate,
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { MOCK_SWIPE_CARDS, ASPECT_RATIO, SCREEN_WIDTH_MIDLE } = CONSTANTS;

interface SwipeCardProps {
  item: (typeof MOCK_SWIPE_CARDS)[0];
  currentIndex: number;
  numberOfCards: number;
  activeIndex: SharedValue<number>;
  onResponse: (res: boolean) => void;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  item,
  currentIndex,
  numberOfCards,
  activeIndex,
  onResponse,
}) => {
  const translateX = useSharedValue(0);
  const { src, country } = item;

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [currentIndex - 1, currentIndex, currentIndex + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [currentIndex - 1, currentIndex, currentIndex + 1],
          [0.98, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [currentIndex - 1, currentIndex, currentIndex + 1],
          [-25, 0, 0]
        ),
      },
      {
        translateX: translateX.value,
      },
      {
        rotateZ: `${interpolate(
          translateX.value,
          [-SCREEN_WIDTH_MIDLE, 0, SCREEN_WIDTH_MIDLE],
          [-15, 0, 15],
          Extrapolate.CLAMP
        )}deg`,
      },
    ],
  }));

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX;

      activeIndex.value = interpolate(
        Math.abs(event.translationX),
        [0, 500],
        [currentIndex, currentIndex + 0.8],
        Extrapolate.CLAMP
      );
    })
    .onEnd((event) => {
      translateX.value = withSpring(0);
      if (Math.abs(event.velocityX) > 400) {
        translateX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        });
        activeIndex.value = withSpring(currentIndex + 1);
        runOnJS(onResponse)(event.velocityX > 0);
      } else {
        translateX.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Content
        style={[
          animatedStyle,
          {
            aspectRatio: 1.2 / ASPECT_RATIO,
            zIndex: numberOfCards - currentIndex,
          },
        ]}
      >
        <Image
          style={[StyleSheet.absoluteFillObject]}
          source={{
            uri: src,
          }}
        />
        <Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject]}
        >
          <Title>{country}</Title>
        </Gradient>
      </Content>
    </GestureDetector>
  );
};
