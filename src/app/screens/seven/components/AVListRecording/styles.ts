import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.FlatList`
  flex: 1;
  width: 100%;
` as unknown as typeof FlatList;

export const Text = styled.Text`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;

export const Separator = styled.View`
  height: 10px;
`;
