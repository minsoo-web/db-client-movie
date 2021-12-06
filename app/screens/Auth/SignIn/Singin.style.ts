import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vw } from '~/constants/Size';
import Colors from '~/constants/Colors';

export const Constainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 0 ${vw(20)}px;
`;

export const TitleWrapper = styled.View`
  margin-top: ${vw(100)}px;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${vw(30)}px;
  font-weight: bold;
`;

export const FormWrapper = styled.View`
  margin-top: ${vw(40)}px;

  height: ${vw(110)}px;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  background-color: #f5f5f5;
  height: ${vw(45)}px;
  padding-left: ${vw(15)}px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${Colors.mainRed};
  justify-content: center;
  align-items: center;
  height: ${vw(45)}px;
  margin-top: ${vw(20)}px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: ${vw(15)}px;
`;

export const LinkWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${vw(20)}px;
`;

export const LinkText = styled.Text`
  color: #666;
  font-size: ${vw(12)}px;
`;
