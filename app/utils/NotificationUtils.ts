import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { CommonString, Routes } from '../constant';
import { messageAlert, navigationWithParam } from '../utils';
import { AuthAction, store } from '../redux';

export const requestUserPermission = async (): Promise<void> => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    getToken();
  }
};

export const getToken = async (): Promise<void> => {
  let token = await AsyncStorage.getItem('token');
  if (!token) {
    try {
      const token = await messaging().getToken();
      if (token) {
        await AsyncStorage.setItem('token', token);
      }
    } catch (e) {
      messageAlert(CommonString.noNotificationSupport);
    }
  }
};

export const notificationListner = async (): Promise<void> => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    store.dispatch(AuthAction.addNotification(remoteMessage));
    navigationWithParam(Routes.notificationScreen);
  });

  messaging().onMessage(async remoteMessage => {
    store.dispatch(AuthAction.addNotification(remoteMessage));
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        store.dispatch(AuthAction.addNotification(remoteMessage));
        navigationWithParam(Routes.homeStack);
      }
    });
};
