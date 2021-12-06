import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NavigationProps } from '../navigation';

declare module SignInPageType {
  export interface SignInNavigationProps {
    navigation: NavigationProp<NavigationProps.AuthParamList, 'SignIn'>;
  }
}
