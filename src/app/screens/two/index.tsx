import React from 'react';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { CONSTANTS } from './constants';

const { OPTIONS_STACK } = CONSTANTS;

import { COMPONENTS } from './components';

const { Onboarding } = COMPONENTS;

const ScreenTwo: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack.Screen options={OPTIONS_STACK} />
      <Onboarding />
    </>
  );
};

export default ScreenTwo;
