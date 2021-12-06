import React from 'react';
import MovieList from '~/components/MovieList';
import * as Styled from './Home.style';
import axios from 'axios';

const Home = () => {
  React.useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/minsoo-web/ETC/master/movies.json',
      )
      .then((data: any) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Styled.Container>
      <MovieList />
    </Styled.Container>
  );
};

export default Home;
