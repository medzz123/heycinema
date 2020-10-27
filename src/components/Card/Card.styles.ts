import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  width: 400px;
  height: 125px;
`;

export const ImageContainer = styled.div`
  width: 35%;
`;

export const ContentContainer = styled.div`
  padding: 10px;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieName = styled.h1`
  margin: 0 0 2px 0;
  color: ${(p) => p.theme.primary};
`;

export const MovieRating = styled.p`
  margin: 0;
  color: ${(p) => p.theme.text.info};
`;

export const MovieReleaseDate = styled.p`
  margin: 0;
  color: ${(p) => p.theme.tertiary};
`;
