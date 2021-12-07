import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Styled from './MyPage.style';
import fbAuth from '@react-native-firebase/auth';
import { NavigationProps } from '~/@types/navigation';

const MyPage = ({ navigation }: NavigationProps.RootNavigation) => {
  const handlesignOut = async () => {
    await fbAuth().signOut();
    navigation.reset({ routes: [{ name: 'Auth' }] });
  };
  return (
    <Styled.Container>
      <TouchableOpacity onPress={handlesignOut}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </Styled.Container>
  );
};

export default MyPage;
