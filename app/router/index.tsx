import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AuthNavigator,
  TabNavigator,
  MovieNavigator,
  MyPageNavigator,
} from './modules';
import { NavigationProps } from '~/@types/navigation';
import fbAuth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator<NavigationProps.RootStackParamList>();

const index = ({ navigation }: NavigationProps.RootNavigation) => {
  const initialRouteName = fbAuth().currentUser ? 'Tabs' : 'Auth';

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
        <Stack.Screen name="MyPage" component={MyPageNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
