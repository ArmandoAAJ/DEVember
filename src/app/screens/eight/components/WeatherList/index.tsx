import React from 'react';

import { Blur, Container, Temperature, Town } from './styles';
import { useQuery } from 'react-query';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { format } from 'date-fns';

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;

interface WeatherListProps {
  latitude: number;
  longitude: number;
}

const getWeather = async ({ latitude, longitude }: WeatherListProps) => {
  const results = await fetch(
    `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
  );

  if (results.ok) return results.json();

  return [];
};

export const WeatherList: React.FC<WeatherListProps> = ({
  latitude,
  longitude,
}) => {
  const { bottom } = useSafeAreaInsets();
  const { isFetching, data } = useQuery('weather', () =>
    getWeather({
      latitude,
      longitude,
    })
  );

  if (isFetching || !data)
    return (
      <ActivityIndicator
        size="large"
        color="#fff"
        style={{
          marginTop: '10%',
        }}
      />
    );

  const { city, list } = data;

  const [first] = list;
  const { main } = first;

  return (
    <Container>
      <Town>
        {city?.name} - {city?.country}
      </Town>
      <Temperature>{Math.round(main?.temp)}°</Temperature>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          const newDate = new Date(item.dt * 1000);
          const formattedDate = format(newDate, 'dd MMM yyyy');
          const formattedHour = format(newDate, 'HH:mm');
          return (
            <Blur>
              <Temperature
                style={{
                  fontSize: 50,
                }}
              >
                {Math.round(item.main.temp)}°
              </Temperature>
              <Town
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                }}
              >
                {'\n'}
                {formattedDate}
                {'\n'}
                {formattedHour}
              </Town>
            </Blur>
          );
        }}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: 8,
            }}
          />
        )}
        contentContainerStyle={{
          paddingBottom: bottom,
          height: '60%',
          paddingHorizontal: 8,
          alignSelf: 'flex-end',
        }}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
