import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface IButton {
  isPrev?: boolean;
}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<IButton>`
  background-color: ${({ isPrev }) => (isPrev ? null : '#302e38')};
  width: ${({ isPrev }) => (isPrev ? '40%' : '60%')};
  border-radius: 50px;
  padding: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'Inter_400Regular';
  color: #fdfdfd;
`;
