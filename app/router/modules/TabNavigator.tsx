import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProps } from '~/@types/navigation';
import { Tabs } from '~/screens';

const Tab = createBottomTabNavigator<NavigationProps.TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Tabs.Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
