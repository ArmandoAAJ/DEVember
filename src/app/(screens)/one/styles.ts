import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    gap: 10,
  },
})`` as unknown as typeof FlatList;
