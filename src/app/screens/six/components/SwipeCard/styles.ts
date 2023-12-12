import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { CONSTANTS } from '../../constants';
import Animated from 'react-native-reanimated';

const { CARD_WIDTH } = CONSTANTS;

export const Content = styled(Animated.View)`
  width: ${CARD_WIDTH}px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
`;

export const Image = styled.Image.attrs({})`
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  font-family: 'Inter_900Black';
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const Gradient = styled(LinearGradient).attrs({
  style: {
    bottom: '50%',
  },
})``;
