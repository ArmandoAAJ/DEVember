import React, { useEffect } from 'react';

import { Container } from './styles';

import { SERVICES } from '@/services';

import { Location } from '@/services';

import { MapMarker } from '../MapMarker';
import { Modal } from '../Modal';
import { Bottom } from '../Bottom';
import { Pressable, View } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const { generateRandonLocation } = SERVICES;

export const Map: React.FC = () => {
  const [onMarkerSelect, setOnMarkerSelect] = React.useState<Location | null>();
  const [markers, setMarkers] = React.useState<Location[]>([]);

  const loadMarkers = async () => {
    const getMarkers = await generateRandonLocation();

    setMarkers(() => getMarkers);
  };

  useEffect(() => {
    loadMarkers();
  }, []);

  if (markers.length < 1) return null;

  const { latitude, longitude } = markers[0];

  return (
    <>
      <Container
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            item={marker}
            onPress={() => setOnMarkerSelect(marker)}
          />
        ))}
      </Container>
      {!!onMarkerSelect && <Modal item={onMarkerSelect} />}
      <Bottom>
        <BottomSheetFlatList
          data={markers}
          renderItem={({ item }) => (
            <Pressable onPress={() => setOnMarkerSelect(item)}>
              <Modal isBottomList item={item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </Bottom>
    </>
  );
};
