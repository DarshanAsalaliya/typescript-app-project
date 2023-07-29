import { Routes } from '../constant';
import { UserTypes } from '../types';

export type MainStackParamList = {
  [Routes.drawerRoute]: undefined;
  [Routes.login]: undefined;
  [Routes.videoPlayer]: undefined;
  [Routes.notificationScreen]: undefined;
};

export type BottomTabParamList = {
  [Routes.homeStack]: undefined;
  [Routes.createScreen]: undefined;
  [Routes.videoList]: undefined;
  [Routes.profileRoute]: undefined;
};

export type DrawerParamList = {
  [Routes.bottomtabRoute]: undefined;
  [Routes.settingScreen]: undefined;
  [Routes.webView]: undefined;
};

export type HomeStackParamList = {
  [Routes.homeScreen]: undefined;
  [Routes.userDetail]: { item: UserTypes };
};
