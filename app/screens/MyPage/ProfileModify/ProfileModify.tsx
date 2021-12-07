import React, { useEffect, useState } from 'react';
import * as Styled from './ProfileModify.style';
import fbAuth from '@react-native-firebase/auth';
import fbStore from '@react-native-firebase/firestore';
import { Alert, ActivityIndicator } from 'react-native';
import { NavigationProps } from '~/@types/navigation';
import { SignInPageType } from '~/@types/SignIn';

interface UserDto {
  id: string;
  email: string;
  password: string;
  birth: string;
  name: string;
}

const ProfileModify = ({
  navigation,
}: SignInPageType.SignInNavigationProps) => {
  const [userInfo, setUserInfo] = useState<UserDto>({
    id: '',
    email: '',
    password: '',
    birth: '',
    name: '',
  });

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isPass, setIsPass] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRe, setNewPasswordRe] = useState('');

  const checkPasswordRight = () => {
    const checkMatch = userInfo.password === password;

    if (checkMatch) setIsPass(true);
    else {
      Alert.alert('비밀번호를 다시 입력해주세요');
      setPassword('');
    }
  };

  const updatePassword = async () => {
    setLoading(true);
    const currentUser = fbAuth().currentUser!;

    if (newPassword !== newPasswordRe) {
      Alert.alert('비밀번호를 확인해주세요.');
      setLoading(false);
      return;
    }

    try {
      await fbAuth().signInWithEmailAndPassword(
        currentUser?.email!,
        userInfo.password,
      );

      await currentUser.updatePassword(newPassword);
      await fbStore().doc(`users/${currentUser.uid}`).update({
        password: newPassword,
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    Alert.alert('비밀번호가 변경되었습니다.');
    navigation.goBack();
  };

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

  return (
    <Styled.Container>
      {isPass ? (
        <Styled.CheckPassContainer>
          <Styled.Title>새 비밀번호 입력</Styled.Title>
          <Styled.TextInput
            secureTextEntry
            placeholder="새로운 비밀번호를 입력해주세요."
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Styled.SizedBox />
          <Styled.TextInput
            secureTextEntry
            placeholder="새로운 비밀번호 확인"
            value={newPasswordRe}
            onChangeText={setNewPasswordRe}
          />

          <Styled.LoginButton onPress={updatePassword}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Styled.ButtonLabel>비밀번호 변경</Styled.ButtonLabel>
            )}
          </Styled.LoginButton>
        </Styled.CheckPassContainer>
      ) : (
        <Styled.PasswordCheckContainer>
          <Styled.Title>비밀번호 입력</Styled.Title>
          <Styled.TextInput
            secureTextEntry
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeText={setPassword}
          />

          <Styled.LoginButton onPress={checkPasswordRight}>
            <Styled.ButtonLabel>확인</Styled.ButtonLabel>
          </Styled.LoginButton>
        </Styled.PasswordCheckContainer>
      )}
    </Styled.Container>
  );
};

export default ProfileModify;
