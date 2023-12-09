import React from 'react';

import { Container, Step } from './styles';

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
        console.log(index, currentStep);
        return <Step key={index} active={index === currentStep} />;
      })}
    </Container>
  );
};
