import styled from 'styled-components/native';
import { CONSTANST } from './constants';
import Animated from 'react-native-reanimated';
import { css } from 'styled-components';

const { CONTAINER_WIDTH, CONTENT_WIDTH, PADDING } = CONSTANST;

export const Container = styled.View`
  background-color: #ffff;
  border-radius: 8px;
  flex-direction: row;
  height: 75px;
  width: ${CONTAINER_WIDTH}px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  width: ${CONTENT_WIDTH}px;
  height: 60px;
  align-self: center;
`;

export const Left = styled.Pressable`
  width: 10%;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const Right = styled.View`
  flex-direction: row;
  gap: 3px;
  height: 100%;
  padding: 0 10px;
  flex: 1;
  align-items: center;
`;

export const Line = styled(Animated.View)`
  background-color: gainsboro;
  border-radius: 20px;
  flex: 1;
  width: 1px;
`;

interface IText {
  isLeft?: boolean;
}
export const Text = styled.Text<IText>`
  color: royalblue;
  font-size: 10px;
  font-family: 'Inter_400Regular';
  position: absolute;
  bottom: -5px;

  ${({ isLeft }) =>
    isLeft &&
    css`
      left: 10px;
    `}
  ${({ isLeft }) =>
    !isLeft &&
    css`
      right: 10px;
    `}
`;
