import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: white;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TopText = styled.p`
  color: ${(p) => p.theme.primary};
  font-weight: bold;
  margin: 0;
`;

export const BottomText = styled.p`
  color: ${(p) => p.theme.secondary};
  font-weight: bold;
  margin: 0;
`;
