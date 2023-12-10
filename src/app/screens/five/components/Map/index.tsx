import React from 'react';

import { Container } from './styles';

export const Map: React.FC = () => {
  return (
    <Container
      initialRegion={{
        latitude: 37.32721043,
        longitude: -122.02685069,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
