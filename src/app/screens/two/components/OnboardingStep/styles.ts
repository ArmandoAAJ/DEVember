import { StyleProp } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

interface StepProps extends Animated.AnimateProps<any> {
  active?: boolean;
}

export const Step = styled(Animated.View).attrs(({ active }: StepProps) => ({
  entering: active ? ZoomIn : undefined,
}))<StepProps>`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ active }) => (active ? '#CEF202' : 'grey')};
`;
