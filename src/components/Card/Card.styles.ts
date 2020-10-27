import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 400px;
  height: 125px;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div<{ url: string }>`
  width: 35%;
  background-image: url(${(p) => p.url});
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
