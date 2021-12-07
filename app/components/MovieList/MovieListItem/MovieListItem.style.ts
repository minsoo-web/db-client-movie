import styled from 'styled-components/native';
import { vw } from '~/constants/Size';

export const Container = styled.TouchableOpacity`
  flex: 0.49;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${vw(15)}px;
  font-weight: 500;
  margin: ${vw(10)}px 0;
`;
