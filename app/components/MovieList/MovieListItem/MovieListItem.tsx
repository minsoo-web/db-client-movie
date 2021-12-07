import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, Image } from 'react-native';
import { Movie } from '~/@types/movie';
import { NavigationProps } from '~/@types/navigation';
import * as Styled from './MovieListItem.style';

const MovieListItem = (props: Movie.Movie) => {
  const navigation: NativeStackNavigationProp<
    NavigationProps.RootStackParamList,
    'Tabs'
  > = useNavigation();

  return (
    <Styled.Container
      activeOpacity={1}
      onPress={() =>
        navigation.push('Movie', {
          screen: 'MovieDetail',
          params: { movieTitle: props.movieNm, movieId: props.movieCd },
        })
      }>
      <Image
        source={{ uri: props.posterUrl }}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 0.7,
          borderRadius: 4,
        }}
      />
      <Styled.Title>{props.movieNm}</Styled.Title>
      <Text>평점: {props.rate}</Text>
    </Styled.Container>
  );
};

export default MovieListItem;
