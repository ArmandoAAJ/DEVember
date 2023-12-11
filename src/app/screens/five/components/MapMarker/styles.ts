import styled from 'styled-components/native';

import { MapMarker } from 'react-native-maps';

export const Marker = styled(MapMarker).attrs({})`
  padding: 5px 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #302e38;
`;

export const Container = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 14px;
  color: #302e38;
`;
