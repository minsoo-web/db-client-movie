import styled from 'styled-components/native';
import { vw } from '~/constants/Size';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${vw(20)}px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const UserName = styled.Text`
  font-size: ${vw(25)}px;
`;

export const ListItem = styled.TouchableOpacity`
  padding: ${vw(10)}px 0;
`;

export const SizedBox = styled.View`
  height: ${vw(10)}px;
`;
