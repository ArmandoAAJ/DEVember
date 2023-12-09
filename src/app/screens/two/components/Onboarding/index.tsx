import React, { useState } from 'react';

import { Container, Content } from './styles';

import { CONSTANTS } from '../../constants';
import { OnboardingImage } from '../OnboardingImage';
import { OnboardingInfo } from '../OnboardingInfo';
import { OnboardingButton } from '../OnboardingButton';
import { router } from 'expo-router';
import { OnboardingStep } from '../OnboardingStep';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const { ONBOARDING_STEPS } = CONSTANTS;

export const Onboarding: React.FC = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const { description, icon, title } = ONBOARDING_STEPS[screenIndex];

  const isLastScreen = screenIndex === ONBOARDING_STEPS.length - 1;

  const onContinue = () => {
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <GestureDetector gesture={swipes}>
      <Container key={screenIndex}>
        <Content>
          <OnboardingStep
            currentStep={screenIndex}
            totalSteps={ONBOARDING_STEPS.length}
          />
          <OnboardingImage name={icon} />
        </Content>
        <Content>
          <OnboardingInfo subTitle={description} title={title} />
          <OnboardingButton handleContinue={onContinue} handleSkip={onBack} />
        </Content>
      </Container>
    </GestureDetector>
  );
};
