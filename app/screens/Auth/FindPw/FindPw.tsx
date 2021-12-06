import React from 'react';
import * as Styled from './FindPw.style';

const FindPw = () => {
  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.TextInput placeholder="아이디를 입력하세요." />
        <Styled.SizedBox />
        <Styled.TextInput placeholder="이름을 입력하세요" />
        <Styled.SizedBox />
        <Styled.TextInput placeholder="생년월일을 입력하세요 ex: 950711" />
      </Styled.InputWrapper>

      <Styled.LoginButton>
        <Styled.ButtonLabel>비밀번호 찾기</Styled.ButtonLabel>
      </Styled.LoginButton>
    </Styled.Container>
  );
};

export default FindPw;
