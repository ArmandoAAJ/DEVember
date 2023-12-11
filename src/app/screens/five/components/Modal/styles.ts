import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';
import { css } from 'styled-components';
import { Dimensions } from 'react-native';

interface ContainerProps {
  isBottomList?: boolean;
}

const { height } = Dimensions.get('window');

export const Container = styled(Animated.View)<ContainerProps>`
  width: 95%;
  height: ${height * 0.18}px;
  background-color: #fff;
  align-self: center;
  border-radius: 10px;
  flex-direction: row;

  ${({ isBottomList }) =>
    !isBottomList &&
    css`
      position: absolute;
      bottom: ${height * 0.1}px;
    `}
`;

export const Left = styled.View`
  width: 35%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Right = styled(Animated.View)`
  width: 65%;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Title = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 16px;
  color: #302e38;
  letter-spacing: 1.5px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: gray;
  margin-top: 5px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 14px;
  color: #302e38;
`;
