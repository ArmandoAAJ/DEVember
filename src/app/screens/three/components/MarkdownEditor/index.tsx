import React from 'react';

import { Container } from './styles';
import { TextInputProps } from 'react-native';

export const MarkdownEditor: React.FC<TextInputProps> = ({ ...rest }) => {
  return <Container {...rest} multiline={true} autoFocus={true} />;
};
