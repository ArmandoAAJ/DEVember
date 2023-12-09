import React from 'react';

import { Container, SubTitle, Title } from './styles';

interface OnboardingImageProps {
  title: string;
  subTitle: string;
}

export const OnboardingInfo: React.FC<OnboardingImageProps> = ({
  title,
  subTitle,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
