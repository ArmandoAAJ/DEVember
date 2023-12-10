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

  if (coords?.latitude || coords?.longitude) return;

  return {
    latitude: coords.latitude,
    longitude: coords.longitude,
  };
}

function generateRandonPosition({
  latitudeOriginal,
  longitudeOriginal,
  deslocamentoMaximo,
}: {
  latitudeOriginal: number;
  longitudeOriginal: number;
  deslocamentoMaximo: number;
}) {
  // Gerar deslocamentos aleatórios
  const deslocLat = Math.random() * 2 * deslocamentoMaximo - deslocamentoMaximo;
  const deslocLon = Math.random() * 2 * deslocamentoMaximo - deslocamentoMaximo;

  // Calcular novas coordenadas
  const novaLatitude = latitudeOriginal + deslocLat;
  const novaLongitude = longitudeOriginal + deslocLon;

  return { novaLatitude, novaLongitude };
}

export const generateRandonLocation = async () => {
  if (LOCATIONS_DAY_5?.length > 0) return LOCATIONS_DAY_5;

  const coords = await getLocation();

  if (!coords) {
    LOCATIONS_DAY_5 = MOCK;

    return LOCATIONS_DAY_5;
  }

  const { latitude, longitude } = coords;

  const userRegions = MOCK.map((item) => {
    const randomLatitude = generateRandonPosition({
      latitudeOriginal: latitude,
      longitudeOriginal: longitude,
      deslocamentoMaximo: 0.02,
    });
    return {
      ...item,
      ...randomLatitude,
    };
  });

  return userRegions;
};
