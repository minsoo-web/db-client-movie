import React from 'react';
import MovieList from '~/components/MovieList';
import * as Styled from './Home.style';
import movies from '~/constants/data/movies';

const Home = () => {
  React.useEffect(() => {
    console.log(movies);
  }, []);

  return (
    <Styled.Container>
      <MovieList />
    </Styled.Container>
  );
};

export default Home;
