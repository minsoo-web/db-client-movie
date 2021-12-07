import React, { useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { vw } from '~/constants/Size';
import * as Styled from './SignUp.style';
import fbAuth from '@react-native-firebase/auth';
import fbStore from '@react-native-firebase/firestore';
import { NavigationProps } from '~/@types/navigation';

const SignUp = ({ navigation }: NavigationProps.RootNavigation) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const [birth, setBirth] = useState('');

  const handleSignUp = async () => {
    setLoading(true);

    await fbAuth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          console.log(error);
        }
      });

    const uid = fbAuth().currentUser?.uid;

    await fbStore().collection('users').doc(uid).set({
      id: uid,
      birth,
      email,
      password,
      name,
    });

    setLoading(false);
    navigation.reset({ routes: [{ name: 'Tabs' }] });
  };

  return (
    <Styled.Container edges={['bottom']}>
      <View style={{ marginTop: vw(20) }}>
        <Styled.TextInput
          placeholder="이메일을 입력하세요."
          value={email}
          onChangeText={setEmail}
        />
        <Styled.SizedBox />
        <Styled.TextInput
          secureTextEntry
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChangeText={setPassword}
        />
        <Styled.SizedBox />
        <Styled.TextInput
          secureTextEntry
          placeholder="비밀번호를 다시 입력하세요"
          value={passwordRe}
          onChangeText={setPasswordRe}
        />
        <Styled.SizedBox />
        <Styled.TextInput
          placeholder="이름을 입력하세요"
          value={name}
          onChangeText={setName}
        />
        <Styled.SizedBox />
        <Styled.TextInput
          placeholder="생년월일을 입력하세요"
          value={birth}
          onChangeText={setBirth}
        />
        <Styled.SizedBox />
      </View>

      <Styled.LoginButton onPress={handleSignUp} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Styled.ButtonLabel>회원가입</Styled.ButtonLabel>
        )}
      </Styled.LoginButton>
    </Styled.Container>
  );
};

export default SignUp;
