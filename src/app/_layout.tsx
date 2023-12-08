import { useEffect } from 'react';
import { SCREENS } from './(screens)';

import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import {
  useFonts,
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';

const { ScreenOne } = SCREENS;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
