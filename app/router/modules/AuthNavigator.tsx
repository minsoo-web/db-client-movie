import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from '~/screens';
import { NavigationProps } from '~/@types/navigation';

const Stack = createNativeStackNavigator<NavigationProps.AuthParamList>();

const authNavigator = () => {
  // todo 로그인 여부 판단

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="SignIn" component={Auth.SignIn} />
    </Stack.Navigator>
  );
};

export default authNavigator;
