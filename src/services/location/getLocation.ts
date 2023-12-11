import * as Location from 'expo-location';

import { CONSTANTS } from './constants';
const { MOCK } = CONSTANTS;

let LOCATIONS_DAY_5 = [] as typeof MOCK;

export async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    return;
  }

  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.BestForNavigation,
  });

  if (!coords?.latitude || !coords?.longitude) return;

  return {
    latitude: coords.latitude,
    longitude: coords.longitude,
  };
}

const generateRandomPosition = ({
  lat,
  long,
  max,
}: {
  lat: number;
  long: number;
  max: number;
}) => {
  const randomLat = ((Math.random() * 2 - 1) * max) / 1000;
  const randomLon = ((Math.random() * 2 - 1) * max) / 1000;

  const latitude = Number((lat + randomLat).toFixed(7));
  const longitude = Number((long + randomLon).toFixed(7));

  return { latitude, longitude };
};

export const generateRandonLocation = async () => {
  if (LOCATIONS_DAY_5?.length > 0) return LOCATIONS_DAY_5;

  const coords = await getLocation();

  if (!coords) {
    LOCATIONS_DAY_5 = MOCK;

    return LOCATIONS_DAY_5;
  }

  const { latitude, longitude } = coords;

  const userRegions = MOCK.map((item, index) => {
    if (index === 0)
      return {
        ...item,
        latitude,
        longitude,
      };
    const randomLatitude = generateRandomPosition({
      lat: latitude,
      long: longitude,
      max: 5,
    });
    return {
      ...item,
      ...randomLatitude,
    };
  });

  return userRegions;
};
