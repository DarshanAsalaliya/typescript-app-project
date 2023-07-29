import { StyleProp } from 'react-native';
import { Theme } from '../../redux';
import { UserTypes } from '../../types';

export interface UserDrawerContentType {
  userData: UserTypes;
  styles: StyleProp;
  theme: Theme;
  route: string;
  setRoute: (route: string) => void;
}
