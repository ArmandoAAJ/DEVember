import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { scale } = Dimensions.get('window');

export const Container = styled.Pressable`
  width: 48%;
  height: 150px;
  border-radius: 10px;
  background-color: red;
  border: 1px solid #9b4521;
  background-color: #f9ede3;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${scale * 20}px;
  font-family: 'AmaticSC_700Bold';
`;
