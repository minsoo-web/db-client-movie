import React from 'react';
import MovieList from '~/components/MovieList';
import * as Styled from './Home.style';

const Home = () => {
  return (
    <Styled.Container>
      <MovieList />
    </Styled.Container>
  );
};

export default Home;
