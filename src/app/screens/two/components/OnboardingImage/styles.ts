import styled from 'styled-components/native';

import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const AnimatedContainer = styled(Animated.View).attrs({
  entering: FadeIn,
  exiting: FadeOut,
})``;

export const Container = styled(FontAwesome5).attrs({
  size: 150,
  color: '#CEF202',
})`
  align-self: center;
`;
