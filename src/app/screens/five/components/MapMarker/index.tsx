import React from 'react';

import { Container, Marker } from './styles';

import { MapMarkerProps } from 'react-native-maps';

import { Location } from '@/services';

interface IMapMarkerProps {
  item: Location;
  onPress: () => void;
}

export const MapMarker: React.FC<IMapMarkerProps> = ({ item, onPress }) => {
  const { latitude, longitude, price, title, numberOfStars } = item;

  const priceFormatted = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const numberOfStarsFormatted = `Avaliação:  ${numberOfStars}`;

  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude,
        longitude,
      }}
      title={title}
      description={numberOfStarsFormatted}
      style={{
        borderRadius: 10,
      }}
    >
      <Container>{priceFormatted}</Container>
    </Marker>
  );
};
