import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SWIPE_SIZE = width * 0.9;
const PADDING = 10;
const CIRCLE_SIZE = 50;
const END_POSITION = SWIPE_SIZE - PADDING * 2 - CIRCLE_SIZE;

const POINTS = [0, END_POSITION / 3, END_POSITION / 2, END_POSITION];
const COLORS = ['#38a180', '#38a180', '#DAEAD9', '#FFFFFF'];
const COLORS_REVERSE = ['#FFFFFF', '#DAEAD9', '#38a180', '#38a180'];

export const CONSTANTS = {
  POINTS,
  COLORS,
  COLORS_REVERSE,
  SWIPE_SIZE,
  PADDING,
  CIRCLE_SIZE,
  END_POSITION,
};
