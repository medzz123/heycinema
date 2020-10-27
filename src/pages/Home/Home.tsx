import Card from '@components/Card';
import Header from '@components/Header';
import Input from '@components/Input';
import { Row } from '@components/Layout';
import { moviesQuery } from '@state/movies';
import debounce from 'lodash.debounce';
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Center } from './Home.styles';

const Home = () => {
  const [search, setSearch] = React.useState('Uga');
  const [queryDebounced, setQueryDebounced] = React.useState('Uga');
  const delayedQuery = React.useRef(
    debounce((q: string) => setQueryDebounced(q), 1500)
  ).current;

  const movie = useRecoilValueLoadable(moviesQuery(queryDebounced));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div>
      <Header />
      <Row />
      <Center>
        <Input value={search} onChange={onChange} />
      </Center>
      <Row />
      <Center>
        {movie.state === 'hasValue' ? (
          <>
            {!movie.contents ? (
              <p>There has been an error, please try again</p>
            ) : movie.contents.Error ? (
              <p>{movie.contents.Error}</p>
            ) : (
              <Card
                name={movie.contents.Title}
                rating={movie.contents.imdbRating}
                image={movie.contents.Poster}
                releaseYear={movie.contents.Released}
              />
            )}
          </>
        ) : movie.state === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <p>There has been an error, please try again</p>
        )}
      </Center>
    </div>
  );
};

export default Home;
