import React from 'react';

import { AVSwipe } from '../AVSwipe';
import { AVRecording } from '../AVRecording';

interface AVWrapperProps {
  onRecord: () => void;
  onStop: () => void;
  onSend: () => void;
  metering: any;
}

export const AVWrapper: React.FC<AVWrapperProps> = ({
  onRecord,
  onStop,
  onSend,
  metering,
}) => {
  const [isVisibleMic, setIsVisibleMic] = React.useState(true);

  const handleOnPress = () => {
    setTimeout(() => setIsVisibleMic(false), 600);
    setTimeout(() => onRecord(), 650);
  };

  const handleDelete = () => {
    setIsVisibleMic((oldState) => !oldState);
    onStop();
  };

  const handleSend = () => {
    setIsVisibleMic((oldState) => !oldState);
    onSend();
  };

  return (
    <>
      {isVisibleMic && <AVSwipe onPress={handleOnPress} />}
      {!isVisibleMic && (
        <AVRecording
          onDelete={handleDelete}
          onSend={handleSend}
          metering={metering}
        />
      )}
    </>
  );
};
