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
        title: '기업 이름',
      }}>
      <Tab.Screen
        name="Home"
        component={Tabs.Home}
        options={{
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={Tabs.MyPage}
        options={{
          tabBarLabel: '마이페이지',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
