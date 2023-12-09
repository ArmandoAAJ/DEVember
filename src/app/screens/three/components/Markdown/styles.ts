import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`
  padding: 20px;
`;

export const MarkdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: 'Inter_900Black',
    color: '#212020',
    marginTop: 15,
    marginBottom: 10,

    lineHeight: 40,
  },
  heading2: {
    fontFamily: 'Inter_700Bold',
    color: '#404040',

    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
