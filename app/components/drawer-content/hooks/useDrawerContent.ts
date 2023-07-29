import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerStatus } from '@react-navigation/native';
import { useEffect } from 'react';
import { Keyboard, StyleProp } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  AuthSelectors,
  Theme,
  UserActions,
  UserSelectors,
  useAppDispach,
  useAppSelector,
} from '../../../redux';
import styleSheet from '../DrawerContentStyle';
import { UserDrawerContentType } from '../DrawerContentType';
import { CommonString } from '../../../constant';
import { navigationWithParam } from '../../../utils';

const useDrawerContent = (): UserDrawerContentType => {
  const dispatch = useAppDispach();
  const userData = useAppSelector(AuthSelectors.getUserData);
  const route = useAppSelector(UserSelectors.getRoute);
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);
  const isOpenDrawer: DrawerStatus = useDrawerStatus();

  useEffect(() => {
    if (isOpenDrawer === CommonString.open) {
      Keyboard.dismiss();
    }
  }, [isOpenDrawer]);

  const setRoute = (route: string) => {
    dispatch(UserActions.route(route));
    navigationWithParam(route);
  };

  return {
    userData,
    styles,
    theme,
    route,
    setRoute,
  };
};

export default useDrawerContent;
