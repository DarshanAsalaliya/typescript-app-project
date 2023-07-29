import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { UserTypes } from '../../types';
import { RootStateType } from '../store';
import { AuthStateType, ErrorMsjTypes, UserAuthData } from './AuthInitial';

/**
 * type of selectors for all theme state
 */
type AuthSelectorsTypes = {
  getAuth: (state: RootStateType) => AuthStateType;
  getIsLogin: (state: RootStateType) => boolean;
  getIsLoading: (state: RootStateType) => boolean;
  getUserData: (state: RootStateType) => UserTypes | null;
  getErrorMsj: (state: RootStateType) => ErrorMsjTypes;
  getIsError: (state: RootStateType) => boolean;
  getUserAuthData: (state: RootStateType) => UserAuthData[];
  getNotification: (
    state: RootStateType,
  ) => FirebaseMessagingTypes.RemoteMessage[];
};

/**
 * A types containing the selectord for theme state
 */
const AuthSelectors: AuthSelectorsTypes = {
  getAuth: (state: RootStateType): AuthStateType => state.AuthReducer,
  getIsLogin: (state: RootStateType): boolean => state.AuthReducer.isLogin,
  getIsLoading: (state: RootStateType): boolean => state.AuthReducer.isLoading,
  getUserData: (state: RootStateType): UserTypes | null =>
    state.AuthReducer.userData,
  getErrorMsj: (state: RootStateType): ErrorMsjTypes =>
    state.AuthReducer.errorMsj,
  getIsError: (state: RootStateType): boolean => state.AuthReducer.isError,
  getUserAuthData: (state: RootStateType): UserAuthData[] =>
    state.AuthReducer.userAuthData,
  getNotification: (
    state: RootStateType,
  ): FirebaseMessagingTypes.RemoteMessage[] =>
    state.AuthReducer.notificationList,
};

export default AuthSelectors;
