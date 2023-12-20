import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width / 2.5;

export const Container = styled.View`
  align-items: center;
  margin-top: 50%;
  flex: 1;
`;

export const Town = styled.Text`
  font-size: 18px;
  font-family: 'Inter_600SemiBold';
  color: lightgray;
`;

export const Temperature = styled.Text`
  font-size: 90px;
  font-family: 'Inter_900Black';
  color: whitesmoke;
`;

export const Blur = styled(BlurView).attrs({
  intensity: 70,
})`
  padding: 10px;
  width: ${CARD_WIDTH}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: ${StyleSheet.hairlineWidth}px;
`;
