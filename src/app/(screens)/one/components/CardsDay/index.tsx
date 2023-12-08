import React from 'react';

import { Container, Text } from './styles';
import { ListRenderItemInfo } from 'react-native';

import { CONSTANTS } from '../../constants';

const { DAYS } = CONSTANTS;

export const CardsDay: React.FC<ListRenderItemInfo<(typeof DAYS)[0]>> = ({
  item,
}) => {
  return (
    <Container>
      <Text>{item}</Text>
    </Container>
  );
};
