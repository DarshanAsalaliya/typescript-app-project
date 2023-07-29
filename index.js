/**
 * @format
 */

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './app/App';
import { messageAlert } from './app/utils';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  messageAlert(JSON.stringify(remoteMessage));
});

AppRegistry.registerComponent(appName, () => App);
