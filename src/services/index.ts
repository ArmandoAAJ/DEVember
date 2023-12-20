import { generateRandonLocation, getLocation } from './location/getLocation';
import { QUERY_CLIENT } from './react-query';

import { CONSTANTS } from './location/constants';

const { MOCK } = CONSTANTS;

export type Location = (typeof MOCK)[0];

export const SERVICES = {
  generateRandonLocation,
  QUERY_CLIENT,
  getLocation,
};
