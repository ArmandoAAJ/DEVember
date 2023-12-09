import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 20px;
`;

export const Title = styled(Animated.Text).attrs({
  entering: SlideInRight,
  exiting: SlideOutLeft,
})`
  font-size: 50px;
  font-family: 'Inter_900Black';
  color: #fdfdfd;
  letter-spacing: 1.3px;
`;

export const SubTitle = styled(Animated.Text).attrs({
  entering: SlideInRight.delay(50),
  exiting: SlideOutLeft.delay(50),
})`
  font-size: 20px;
  color: gray;
  font-family: 'Inter_400Regular';
  line-height: 30px;
`;
