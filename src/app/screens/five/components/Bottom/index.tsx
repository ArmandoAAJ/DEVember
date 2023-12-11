import React, { ReactNode, useMemo, useRef } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import { Text } from './styles';

interface BottomProps {
  children: ReactNode;
}

export const Bottom: React.FC<BottomProps> = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '50%', '90%'], []);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
      <Text>HOTÉIS</Text>
      {children}
    </BottomSheet>
  );
};
