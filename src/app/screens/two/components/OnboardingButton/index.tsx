import React from 'react';

import { Button, ButtonText, Container } from './styles';

interface OnboardingButtonProps {
  handleSkip: () => void;
  handleContinue: () => void;
}

export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  handleContinue,
  handleSkip,
}) => {
  return (
    <Container>
      <Button isPrev onPress={handleSkip}>
        <ButtonText>Skip</ButtonText>
      </Button>
      <Button onPress={handleContinue}>
        <ButtonText>Continue</ButtonText>
      </Button>
    </Container>
  );
};
