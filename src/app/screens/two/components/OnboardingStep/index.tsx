import React from 'react';

import { Container, Step } from './styles';
import { ZoomIn } from 'react-native-reanimated';
interface OnboardingStepProps {
  currentStep: number;
  totalSteps: number;
}

export const OnboardingStep: React.FC<OnboardingStepProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <Container>
      {[...Array(totalSteps)].map((_, index) => {
        const isActive = index === currentStep;
        return <Step key={index} active={isActive} />;
      })}
    </Container>
  );
};
