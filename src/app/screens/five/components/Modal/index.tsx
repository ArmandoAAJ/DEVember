import React from 'react';

import {
  Container,
  Left,
  Image,
  Title,
  Right,
  SubTitle,
  Content,
  Info,
} from './styles';

import { Location } from '@/services';
import { View } from 'react-native';
import { ZoomIn } from 'react-native-reanimated';

interface ModalProps {
  item: Location;
  isBottomList?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ item, isBottomList = false }) => {
  if (!item?.id) return null;

  const { price, numberOfStars, rating } = item;

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container
      entering={!isBottomList ? ZoomIn.delay(200) : undefined}
      isBottomList={isBottomList}
      key={item?.id}
    >
      <Left>
        <Image
          source={{
            uri: item?.image,
          }}
        />
      </Left>
      <Right entering={!isBottomList ? ZoomIn.delay(200) : undefined}>
        <View>
          <Title>{item?.title}</Title>
          <SubTitle>{item?.description}</SubTitle>
        </View>
        <Content>
          <Info>
            {formattedPrice}
            <SubTitle>/dia</SubTitle>
          </Info>
          <Info>
            ★ {rating}
            <SubTitle> ({numberOfStars})</SubTitle>
          </Info>
        </Content>
      </Right>
    </Container>
  );
};
