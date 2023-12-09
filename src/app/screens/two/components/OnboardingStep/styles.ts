import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 5px;
  display: flex;
  flex-direction: row;
`;

interface StepProps {
  active?: boolean;
}

export const Step = styled.View<StepProps>`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ active }) => (active ? '#CEF202' : 'grey')};
`;
