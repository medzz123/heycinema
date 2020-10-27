import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: white;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
