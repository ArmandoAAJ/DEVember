import React from 'react';

import { Container, Separator } from './styles';
import { AVPlayer } from '../AVPlayer';

export type Memo = {
  uri: string;
  metering: number[];
};

export interface AVListRecordingProps {
  memos: Memo[];
}

export const AVListRecording: React.FC<AVListRecordingProps> = ({ memos }) => {
  return (
    <Container
      data={memos}
      renderItem={({ item }) => <AVPlayer item={item} />}
      keyExtractor={(item) => item?.uri}
      ItemSeparatorComponent={() => <Separator />}
      contentContainerStyle={{
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
      }}
    />
  );
};
