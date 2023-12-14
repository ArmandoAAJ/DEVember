import React from 'react';

import { AVSwipe } from '../AVSwipe';

export const AVWrapper: React.FC = () => {
  const [isVisibleMic, setIsVisibleMic] = React.useState(true);

  const handleOnPress = () => {
    setTimeout(() => setIsVisibleMic(false), 600);
  };

  return <>{isVisibleMic && <AVSwipe onPress={handleOnPress} />}</>;
};
