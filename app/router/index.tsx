import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator, TabNavigator, MovieNavigator } from './modules';

import { NavigationProps } from '~/@types/navigation';

const Stack = createNativeStackNavigator<NavigationProps.RootStackParamList>();

const index = () => {
  const initialRouteName = true ? 'Auth' : 'Tabs';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait',
        }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Movie" component={MovieNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
