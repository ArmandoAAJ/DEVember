import React from 'react';

import { Container, Text } from './styles';
import { ListRenderItemInfo } from 'react-native';

import { CONSTANTS } from '../../constants';
import { Link } from 'expo-router';

const { DAYS, EnumDays } = CONSTANTS;

export const CardsDay: React.FC<ListRenderItemInfo<(typeof DAYS)[0]>> = ({
  item,
}) => {
  const href = `/screens/${EnumDays[item - 1]}`;
  return (
    <Link href={href} asChild disabled={item === 1}>
      <Container>
        <Text>{item}</Text>
      </Container>
    </Link>
  );
};
