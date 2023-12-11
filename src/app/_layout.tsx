import React, { useEffect, useState } from 'react';

import { Stack } from 'expo-router';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SCREENS } from '@screens/index';
import Animated, { BounceInRight } from 'react-native-reanimated';

const animatedLottieView = require('@assets/lottie/netflix.json');

const { ScreenFour } = SCREENS;

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;

  if (showAnimatedSplash) {
    return (
      <ScreenFour
        source={animatedLottieView}
        controls={false}
        loop={false}
        stackActive={false}
        onFinish={(isCancelled) => {
          if (isCancelled) return;
          setSplashAnimationFinished(true);
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={BounceInRight}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitle: 'DEVember',
            headerTitleStyle: {
              fontFamily: 'AmaticSC_700Bold',
              fontSize: 22,
            },
          }}
        />
      </Animated.View>
    </GestureHandlerRootView>
  );
}
