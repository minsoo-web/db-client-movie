import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vw } from '~/constants/Size';
import Colors from '~/constants/Colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 0 ${vw(20)}px;

  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: ${vw(20)}px;
`;

export const Poster = styled.Image`
  width: ${vw(112)}px;
  height: undefined;
  aspect-ratio: ${112 / 158.16};
  border-radius: 4;
`;

export const MovieInfo = styled.View`
  flex: 1;
  padding: ${vw(10)}px 0 0 ${vw(10)}px;
`;

export const Title = styled.Text`
  font-size: ${vw(20)}px;
`;

export const TitleEn = styled.Text`
  font-size: ${vw(12)}px;
  color: #666;
  margin-bottom: ${vw(10)};
`;

export const SizedBox = styled.View`
  height: ${vw(10)}px;
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
