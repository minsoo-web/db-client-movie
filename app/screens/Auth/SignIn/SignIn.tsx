import React, { useState } from 'react';
import { TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { NavigationProps } from '~/@types/navigation';

import { vw } from '~/constants/Size';
import * as Styled from './Singin.style';
import fbAuth from '@react-native-firebase/auth';

const SignIn = ({ navigation }: NavigationProps.RootNavigation) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInButtonPress = async () => {
    try {
      setLoading(true);

      await fbAuth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      navigation.reset({ routes: [{ name: 'Tabs' }] });
    } catch ({ code }: any) {
      setLoading(false);
      if (code === 'auth/user-not-found') {
        Alert.alert('존재하지 않는 아이디입니다.');
      } else if (code === 'auth/user-not-found') {
        Alert.alert('비밀번호가 틀렸습니다.');
      } else {
        Alert.alert('알 수 없는 에러 발생');
      }
    }
  };

  return (
    <Styled.Constainer>
      <Styled.TitleWrapper>
        <Styled.Title>DB 코딩보험</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.FormWrapper>
        <Styled.TextInput
          placeholder="아이디를 입력해주세요."
          value={email}
          onChangeText={setEmail}
        />

        <Styled.TextInput
          secureTextEntry
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChangeText={setPassword}
        />
      </Styled.FormWrapper>

      <Styled.LoginButton onPress={handleSignInButtonPress}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Styled.ButtonLabel>로그인</Styled.ButtonLabel>
        )}
      </Styled.LoginButton>

      <Styled.LinkWrapper>
        <TouchableOpacity
          onPress={() => navigation.push('Auth', { screen: 'FindPw' })}>
          <Styled.LinkText
            style={{
              paddingRight: vw(20),
            }}>
            비밀번호 찾기
          </Styled.LinkText>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderLeftWidth: 1, borderLeftColor: '#666' }}
          onPress={() => navigation.push('Auth', { screen: 'SignUpForms' })}>
          <Styled.LinkText
            style={{
              paddingLeft: vw(20),
            }}>
            회원가입
          </Styled.LinkText>
        </TouchableOpacity>
      </Styled.LinkWrapper>
    </Styled.Constainer>
  );
};

export default SignIn;
