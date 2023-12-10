import styled from 'styled-components/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const SafeContent = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  align-self: center;
  background-color: #302e38;
  border-radius: 10px;
  bottom: 30px;
  flex-direction: row;
  height: 75px;
  justify-content: space-evenly;
  position: absolute;
  width: 90%;
`;

interface ButtonProps {
  active: boolean;
}

export const Button = styled.Pressable<ButtonProps>`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${({ active }) => (active ? '#ff9000' : '#302e38')};
`;

export const Icon = styled(FontAwesome5).attrs({
  size: 30,
  color: '#fdfdfd',
})``;

export const IconM = styled(MaterialCommunityIcons).attrs({
  size: 30,
  color: '#fdfdfd',
})``;
