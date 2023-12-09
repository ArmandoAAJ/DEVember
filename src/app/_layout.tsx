import { useEffect } from 'react';
import { SCREENS } from './screens';

import * as SplashScreen from 'expo-splash-screen';
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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerTitle: 'DEVember',
          headerTitleStyle: {
            fontFamily: 'AmaticSC_700Bold',
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </GestureHandlerRootView>
  );
}
