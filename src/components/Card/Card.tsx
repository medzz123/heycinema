import React from 'react';

import { CardProps } from './Card.models';
import {
  CardContainer,
  ContentContainer,
  ImageContainer,
  MovieName,
  MovieRating,
  MovieReleaseDate,
} from './Card.styles';

const Card: React.FC<CardProps> = (props) => {
  const { name, image, rating, releaseYear } = props;
  return (
    <CardContainer>
      <ImageContainer url={image} />
      <ContentContainer>
        <div>
          <MovieName>{name}</MovieName>
          <MovieRating>{rating}</MovieRating>
        </div>
        <MovieReleaseDate>{releaseYear}</MovieReleaseDate>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
