import { StyleProp } from 'react-native';
import { Theme } from '../../../redux';
import { UserTypes } from '../../../types';

export interface UseUserDetail {
  theme: Theme;
  styles: StyleProp;
  item: UserTypes;
  isVisible: boolean;
  modalVisible: () => void;
  sendMail: () => Promise<void>;
  openDialer: () => Promise<void>;
}
