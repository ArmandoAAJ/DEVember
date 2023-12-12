import React, { useEffect, useState } from 'react';

import { COMPONENTS } from './components';
import { CONSTANTS } from './constants';
import { Container } from './styles';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

const { SwipeCard } = COMPONENTS;
const { MOCK_SWIPE_CARDS } = CONSTANTS;

const ScreenSix: React.FC = () => {
  const activeIndex = useSharedValue(0);
  const [countries, setCountries] = useState(MOCK_SWIPE_CARDS);
  const [index, setIndex] = useState(0);

  useAnimatedReaction(
    () => activeIndex.value,
    (value, prevValue) => {
      if (Math.floor(value) !== index) {
        runOnJS(setIndex)(Math.floor(value));
      }
    }
  );

  useEffect(() => {
    if (index > countries.length - 10) {
      setCountries((oldState) => [...oldState, ...MOCK_SWIPE_CARDS.reverse()]);
    }
  }, [index]);

  const onResponse = (res: boolean) => {
    console.log('on Response: ', res);
  };

  return (
    <Container>
      {countries.map((card, index) => {
        return (
          <SwipeCard
            key={index}
            item={card}
            currentIndex={index}
            numberOfCards={MOCK_SWIPE_CARDS.length}
            activeIndex={activeIndex}
            onResponse={onResponse}
          />
        );
      })}
    </Container>
  );
};

export default ScreenSix;
