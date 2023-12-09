import React from 'react';

import { List } from './styles';
import { CONSTANTS } from './constants';
import { COMPONENTS } from './components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { CardsDay } = COMPONENTS;

const ScreenOne: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <List
      data={CONSTANTS.DAYS}
      keyExtractor={(item) => item.toString()}
      renderItem={(props) => <CardsDay {...props} />}
      numColumns={2}
      horizontal={false}
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
    />
  );
};

export default ScreenOne;
