import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Image } from './styles';

import { SERVICES } from '@/services';

const { getLocation } = SERVICES;

import { CONSTANTS } from './constants';

import { COMPONENTS } from './components';

const { WeatherList } = COMPONENTS;

const ScreenEight: React.FC = () => {
  const [coords, setCoords] = React.useState<null | {
    latitude: number;
    longitude: number;
  }>(null);

  useEffect(() => {
    const getCoords = async () => {
      const userCoords = await getLocation();
      if (!userCoords) return;

      const { latitude, longitude } = userCoords;

      setCoords({
        latitude,
        longitude,
      });
    };

    getCoords();
  }, []);

  if (!coords)
    return (
      <Container>
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          source={{
            uri: CONSTANTS.URI,
          }}
        />
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{
            marginTop: '10%',
          }}
        />
      </Container>
    );

  const { latitude, longitude } = coords;

  return (
    <Container>
      <Image
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        source={{
          uri: CONSTANTS.URI,
        }}
      >
        <WeatherList latitude={latitude} longitude={longitude} />
      </Image>
    </Container>
  );
};

export default ScreenEight;
