import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Movie } from '~/@types/movie';
import movie from '~/constants/data/movie';
import * as Styled from './MovieDetail.style';
import moment from 'moment';
import axios from 'axios';
import { vw } from '~/constants/Size';

const MovieDetail = ({
  route: {
    params: { movieId },
  },
}: Movie.DetailProps) => {
  const [movieInfo, setMovieInfo] = useState<Movie.Movie>();
  const [actorPhotoList, setActorPhotoList] = useState<string[]>([]);

  useEffect(() => {
    setMovieInfo(movie[parseInt(movieId)]);

    // axios
    //   .get('https://api.unsplash.com/photos/random', {
    //     params: {
    //       query: 'selfie',
    //       client_id: 'wR1KfiQ0HRzicfe1_c5dThIv7ef0bwQeUGCHq46cyoI',
    //       count: movieInfo?.actors.length,
    //     },
    //   })
    //   .then(({ data }) => {
    //     setActorPhotoList(data.map((image: any) => image.urls.full));
    //   });
  }, []);

  const computedGenre = useMemo(
    () => movieInfo?.genres.map(genre => genre.genreNm).join(','),
    [movieInfo],
  );

  const computedOpenDate = useMemo(
    () => moment(movieInfo?.openDt, 'YYYYMMDD').format('YYYY.MM.DD'),
    [movieInfo],
  );

  return (
    <Styled.Container edges={['bottom']}>
      <View>
        <Styled.Header>
          <Styled.Poster source={{ uri: movieInfo?.posterUrl }} />
          <Styled.MovieInfo>
            <Styled.Title>{movieInfo?.movieNm}</Styled.Title>
            <Styled.TitleEn>{movieInfo?.movieNmEn}</Styled.TitleEn>

            <Text>{computedGenre}</Text>
            <Styled.SizedBox />
            <Text>평점: {movieInfo?.rate}</Text>
            <Styled.SizedBox />
            <Text>{computedOpenDate} 개봉</Text>
            <Styled.SizedBox />
            <Text>{movieInfo?.showTm}분</Text>
          </Styled.MovieInfo>
        </Styled.Header>

        <View>
          <Text style={{ fontSize: vw(20), marginVertical: vw(20) }}>
            등장인물
          </Text>

          <FlatList
            data={movieInfo?.actors}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: 'column',
                  width: vw(100),
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri:
                      actorPhotoList.length > 0
                        ? actorPhotoList[index]
                        : 'https://user-images.githubusercontent.com/57122180/144985636-fb5b64fb-3d5d-48e3-acee-7c37da0fd9d5.png',
                  }}
                  style={{
                    width: vw(75),
                    height: vw(75),
                    borderRadius: vw(75),
                  }}
                />
                <Text
                  style={{
                    marginTop: vw(10),
                    maxWidth: vw(100),
                    textAlign: 'center',
                  }}>
                  {item.peopleNm}
                </Text>
                {item.cast.length > 0 || item.castEn.length > 0 ? (
                  <Text>
                    {item.cast.length > 0 ? item.cast : item.castEn} 역
                  </Text>
                ) : null}
              </View>
            )}
          />
        </View>
      </View>
      <Styled.LoginButton>
        <Styled.ButtonLabel>지금 예매하기</Styled.ButtonLabel>
      </Styled.LoginButton>
    </Styled.Container>
  );
};

export default MovieDetail;
