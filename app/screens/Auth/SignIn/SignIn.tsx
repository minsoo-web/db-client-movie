import React from 'react';
import { TouchableOpacity } from 'react-native';
import { vw } from '~/constants/Size';
import * as Styled from './Singin.style';

const SignIn = () => {
  return (
    <Styled.Constainer>
      <Styled.TitleWrapper>
        <Styled.Title>회사 로고</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.FormWrapper>
        <Styled.TextInput placeholder="아이디를 입력해주세요." />

        <Styled.TextInput placeholder="비밀번호를 입력해주세요." />
      </Styled.FormWrapper>

      <Styled.LoginButton>
        <Styled.ButtonLabel>로그인</Styled.ButtonLabel>
      </Styled.LoginButton>

      <Styled.LinkWrapper>
        <TouchableOpacity>
          <Styled.LinkText
            style={{
              paddingRight: vw(20),
            }}>
            비밀번호 찾기
          </Styled.LinkText>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderLeftWidth: 1, borderLeftColor: '#666' }}>
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
