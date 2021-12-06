import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vw } from '~/constants/Size';
import Colors from '~/constants/Colors';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
  background-color: #fff;

  padding: 0 ${vw(20)}px;
`;

export const SizedBox = styled.View`
  height: ${vw(20)}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${vw(100)}px;
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
  border-radius: 20px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: ${vw(15)}px;
`;
