import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Movie } from '~/screens';
import { Image, TouchableOpacity } from 'react-native';
import ArrowLeftBlack from '~/assets/images/ico/ico-arrow-left-black.png';
import { vw } from '~/constants/Size';
import { NavigationProps } from '~/@types/navigation';

const Stack = createNativeStackNavigator<NavigationProps.MovieParamList>();

const MovieNavigator = ({ navigation }: NavigationProps.RootNavigation) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () =>
          navigation.canGoBack() && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ padding: 14, marginLeft: -15 }}>
              <Image
                source={ArrowLeftBlack}
                style={{ width: vw(10), height: vw(20) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
      }}>
      <Stack.Screen
        name="MovieDetail"
        component={Movie.MovieDetail}
        options={({ route }) => ({ title: route.params.movieTitle })}
      />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
