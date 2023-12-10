import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    gap: 10,
    marginTop: 10,
    paddingBottom: 50,
  },
})`
  background-color: #ffffff;
` as unknown as typeof FlatList;
