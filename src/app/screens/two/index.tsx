import React from 'react';
import { SafeAreaView } from 'react-native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Onboarding } from './components/Onboarding';

import { CONSTANTS } from './constants';

const { OPTIONS_STACK } = CONSTANTS;

const ScreenTwo: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <Stack.Screen options={OPTIONS_STACK} />
      <Onboarding />
    </SafeAreaView>
  );
};

export default ScreenTwo;
