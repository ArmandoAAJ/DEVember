import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const Button = styled.Pressable`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 5px;
`;

interface IIconProps {
  isVisibleEdit: boolean;
}

export const Icon = styled(Feather)<IIconProps>`
  color: ${({ isVisibleEdit }) => (isVisibleEdit ? 'green' : 'red')};
`;
