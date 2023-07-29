import React, { ReactElement, useCallback, useEffect } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LoaderScreen } from './components';
import { MainStackNavigation } from './navigation';
import { persistor, store } from './redux';
import { ApplicationStyle } from './theme';
import { notificationListner, requestUserPermission } from './utils';
import { useMMKVString, useMMKVBoolean } from 'react-native-mmkv';
import { AsynkKeys, CommonString } from './constant';

/**
 *
 * @returns - This file return jsx file that contain main app
 */
const App = (): ReactElement => {
  const [theme, setTheme] = useMMKVString(AsynkKeys.theme);
  const [isDefault, setIsDefault] = useMMKVBoolean(AsynkKeys.isDefault);
  const [isFirst, setIsFirst] = useMMKVBoolean(AsynkKeys.isFirst);
  const appearance = useColorScheme();

  const setAppTheme = useCallback(() => {
    if (!isFirst || isDefault) {
      setTheme(appearance);
      setIsDefault(true);
      setIsFirst(true);
    }
  }, [appearance]);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();
    notificationListner();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderScreen />} persistor={persistor}>
        <SafeAreaView
          style={
            theme === CommonString.light
              ? ApplicationStyle.safeArea
              : ApplicationStyle.safeAreaDark
          }>
          <MainStackNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
