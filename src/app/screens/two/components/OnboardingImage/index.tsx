import React from 'react';

import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { Container } from './styles';

export const OnboardingImage: React.FC<IconProps<string>> = ({ ...rest }) => {
  return <Container {...rest} />;
};
