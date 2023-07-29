import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { CommonString, Routes } from '../constant';
import { LoginScreen, NotificationScreen, VideoPlayer } from '../modules';
import { AuthSelectors, useAppSelector } from '../redux';
import { navigationRef } from '../utils';
import DrawerStackNavigation from './DrawerStackNavigation';
import { MainStackParamList } from './NavigationTypes';
import { StatusBar } from 'react-native';
import { useTheme } from '../hooks';
import { Colors } from '../theme';

const Stack = createStackNavigator<MainStackParamList>();

/**
 *
 * @returns - Main Navigation container that hold all the screen include bottom and drawer navigation
 */
const MainStackNavigation = (): ReactElement => {
  const theme = useTheme();
  const isLogin = useAppSelector(AuthSelectors.getIsLogin);

  return (
    <>
      <StatusBar
        backgroundColor={Colors[theme].backgroundColor}
        barStyle={
          theme === CommonString.light ? 'dark-content' : 'light-content'
        }
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!isLogin ? (
            <Stack.Screen name={Routes.login} component={LoginScreen} />
          ) : (
            <>
              <Stack.Screen
                name={Routes.drawerRoute}
                component={DrawerStackNavigation}
              />
              <Stack.Screen name={Routes.videoPlayer} component={VideoPlayer} />
              <Stack.Screen
                name={Routes.notificationScreen}
                component={NotificationScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStackNavigation;
