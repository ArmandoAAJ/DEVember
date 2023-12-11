import { generateRandonLocation } from './location/getLocation';

import { CONSTANTS } from './location/constants';

const { MOCK } = CONSTANTS;

export type Location = (typeof MOCK)[0];

export const SERVICES = {
  generateRandonLocation,
};
