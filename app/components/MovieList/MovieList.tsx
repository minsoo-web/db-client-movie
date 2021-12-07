import React from 'react';
import { View, FlatList } from 'react-native';
import movies from '~/constants/data/movies';
import MovieListItem from './MovieListItem';

import * as Styled from './MovieList.style';

const MovieList = () => {
  return (
    <Styled.Container>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({ item }) => <MovieListItem {...item} />}
        keyExtractor={item => item.movieCd}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </Styled.Container>
  );
};

export default MovieList;
