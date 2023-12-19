import { Dimensions } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import { css } from 'styled-components';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const WIDTH = width * 0.2;

export const Container = styled.View`
  background-color: white;
  width: 100%;
  height: 30%;
`;

export const Content = styled(Animated.View).attrs({
  entering: FadeInDown,
  exiting: FadeOut,
})`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
`;

interface IButton {
  left?: boolean;
}

export const Button = styled.TouchableOpacity<IButton>`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 30px;
  height: 60px;
  justify-content: center;
  width: 60px;
  position: absolute;
  bottom: 30px;

  ${({ left }) =>
    left &&
    css`
      left: 30px;
    `}
  ${({ left }) =>
    !left &&
    css`
      right: 30px;
    `}
`;

export const ButtonMic = styled.View`
  align-items: center;
  background-color: red;
  border-radius: 30px;
  height: 60px;
  justify-content: center;
  width: 60px;
`;

export const AnimatedMic = styled(Animated.View)`
  background-color: rgba(100, 0, 0, 0.3);
  border-radius: 100%;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;
