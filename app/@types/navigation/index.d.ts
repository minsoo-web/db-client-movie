import { NavigatorScreenParams } from '@react-navigation/native';

declare module NavigationProps {
  export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthParamList> | undefined;
    Tabs: NavigatorScreenParams<TabParamList> | undefined;
  };

  export type AuthParamList = {
    SignIn: undefined; // 로그인 화면

    FindPw: undefined; // 비밀번호 찾기
    FindPwNew: undefined; // 비밀번호 새로 입력하는 창

    SignUpForms: undefined; // 회원가입 입력폼 페이지 -> 내담자 / 상담자
  };

  export type TabParamList = {
    Home: undefined; // 메인 화면 Main_Page_001
  };
}
