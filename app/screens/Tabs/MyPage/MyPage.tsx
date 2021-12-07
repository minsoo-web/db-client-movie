import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as Styled from './MyPage.style';
import fbAuth from '@react-native-firebase/auth';
import fbStore from '@react-native-firebase/firestore';
import { NavigationProps } from '~/@types/navigation';
import { vw } from '~/constants/Size';

interface UserDto {
  id: string;
  email: string;
  password: string;
  birth: string;
  name: string;
}

const MyPage = ({ navigation }: NavigationProps.RootNavigation) => {
  const [userInfo, setUserInfo] = useState<UserDto>({
    id: '',
    email: '',
    password: '',
    birth: '',
    name: '',
  });

  useEffect(() => {
    const uid = fbAuth().currentUser?.uid;
    fbStore()
      .collection('users')
      .where('id', '==', uid)
      .get()
      .then(user => {
        const data: any = user.docs[0].data();
        setUserInfo(data);
      });
  }, []);

  const handlesignOut = async () => {
    await fbAuth().signOut();
    navigation.reset({ routes: [{ name: 'Auth' }] });
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Image
          source={{
            uri: 'https://user-images.githubusercontent.com/57122180/144985636-fb5b64fb-3d5d-48e3-acee-7c37da0fd9d5.png',
          }}
          style={{ width: 75, height: 75, borderRadius: 100 }}
        />

        <View
          style={{
            marginLeft: 10,
          }}>
          <Styled.UserName>{userInfo.name}</Styled.UserName>
          <TouchableOpacity style={{ marginTop: 10 }} onPress={handlesignOut}>
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </Styled.Header>

      {/*  */}
      <View style={{ paddingHorizontal: vw(20) }}>
        <Styled.ListItem>
          <Text>예매 정보 확인</Text>
        </Styled.ListItem>
        <Styled.SizedBox />
        <Styled.ListItem>
          <Text>예매 취소 리스트</Text>
        </Styled.ListItem>
        <Styled.SizedBox />
        <Styled.ListItem
          onPress={() =>
            navigation.push('MyPage', { screen: 'ProfileModify' })
          }>
          <Text>비밀번호 변경</Text>
        </Styled.ListItem>
      </View>
    </Styled.Container>
  );
};

export default MyPage;
