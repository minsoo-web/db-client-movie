import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, Image, ActivityIndicator, View } from 'react-native';
import { Movie } from '~/@types/movie';
import { NavigationProps } from '~/@types/navigation';
import * as Styled from './MovieListItem.style';

const MovieListItem = (props: Movie.Movie) => {
  const navigation: NativeStackNavigationProp<
    NavigationProps.RootStackParamList,
    'Tabs'
  > = useNavigation();

  const [imageLoading, setImageLoading] = useState<boolean>(true);

  return (
    <Styled.Container
      activeOpacity={1}
      onPress={() =>
        navigation.push('Movie', {
          screen: 'MovieDetail',
          params: { movieTitle: props.movieNm, movieId: props.movieCd },
        })
      }>
      <View
        style={{
          position: 'relative',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: undefined,
          aspectRatio: 0.7,
        }}>
        <ActivityIndicator
          style={{
            position: 'absolute',
            display: imageLoading ? 'flex' : 'none',
          }}
        />

        <Image
          source={{ uri: props.posterUrl }}
          onLoadEnd={() => {
            console.log('object');
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 4,
          }}
        />
      </View>
      <Styled.Title>{props.movieNm}</Styled.Title>
      <Text>평점: {props.rate}</Text>
    </Styled.Container>
  );
};

export default MovieListItem;
