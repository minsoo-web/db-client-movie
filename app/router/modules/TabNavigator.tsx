import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProps } from '~/@types/navigation';
import { Tabs } from '~/screens';

const Tab = createBottomTabNavigator<NavigationProps.TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarLabelPosition: 'beside-icon',
        title: 'DB 코딩보험',
      }}>
      <Tab.Screen
        name="Home"
        component={Tabs.Home}
        options={{
          tabBarLabel: '영화',
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={Tabs.MyPage}
        options={{
          tabBarLabel: 'MY',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
