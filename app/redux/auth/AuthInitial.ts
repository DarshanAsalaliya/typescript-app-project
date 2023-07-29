import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { UserTypes } from '../../types';

export interface ErrorMsjTypes {
  message?: string;
}

export interface UserAuthData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string | undefined;
  token?: string;
  password: string;
  isFirstChange: boolean;
}

/**
 * type of theme reducer state
 */

export interface AuthStateType {
  isLoading: boolean;
  isLogin: boolean;
  userData: UserTypes | null;
  isError: boolean;
  userAuthData: UserAuthData[];
  errorMsj: ErrorMsjTypes;
  notificationList: FirebaseMessagingTypes.RemoteMessage[];
}

export const AuthInitialState: AuthStateType = {
  isLoading: false,
  isLogin: false,
  userData: null,
  isError: false,
  userAuthData: [],
  errorMsj: {},
  notificationList: [],
};
