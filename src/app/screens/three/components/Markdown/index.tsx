import React from 'react';

import Markdown from 'react-native-markdown-display';

import { Container, MarkdownStyles } from './styles';

interface IMarkdownDisplayProps {
  description: string;
}

export const MarkdownDisplay: React.FC<IMarkdownDisplayProps> = ({
  description,
}) => {
  return (
    <Container>
      <Markdown style={MarkdownStyles}>{description}</Markdown>
    </Container>
  );
};
