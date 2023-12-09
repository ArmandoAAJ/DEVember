import React from 'react';

import { Button, Container, Icon } from './styles';
import { Stack } from 'expo-router';

import { COMPONENTS } from './components';
import { CONSTANTS } from './constants';
import { MarkdownEditor } from './components/MarkdownEditor';

const { MarkdownDisplay } = COMPONENTS;
const { MARKDOWN_TEXT } = CONSTANTS;

const ScreenThree: React.FC = () => {
  const [isVisibleEditor, setIsVisibleEditor] = React.useState(false);
  const [markdownText, setMarkdownText] = React.useState(MARKDOWN_TEXT);

  return (
    <Container>
      <Stack.Screen
        options={{
          contentStyle: {
            backgroundColor: '#fff',
          },
          headerTitle: 'MARKDOWN',
          headerRight: () => (
            <Button onPress={() => setIsVisibleEditor(!isVisibleEditor)}>
              <Icon
                isVisibleEdit={isVisibleEditor}
                name={!isVisibleEditor ? 'edit-2' : 'check'}
              />
            </Button>
          ),
        }}
      />
      {!isVisibleEditor && <MarkdownDisplay description={markdownText} />}
      {isVisibleEditor && (
        <MarkdownEditor value={markdownText} onChangeText={setMarkdownText} />
      )}
    </Container>
  );
};

export default ScreenThree;
