import { StyleProp } from 'react-native';
import { UserTypes } from '../../types';
import { Theme } from '../../redux';

export interface UseHome {
  isLoading: boolean;
  isEndList: boolean;
  usersList?: UserTypes[];
  onEndReach: () => void;
  styles: StyleProp;
  theme: Theme;
  searchUser: (text: string) => void;
  users: UserTypes[];
  handleKeyboard: () => void;
  search: string;
  onSearchBack: () => void;
  onSearchClear: () => void;
}
