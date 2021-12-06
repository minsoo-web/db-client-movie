import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from '~/screens';
import { NavigationProps } from '~/@types/navigation';

const Stack = createNativeStackNavigator<NavigationProps.AuthParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={Auth.SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
