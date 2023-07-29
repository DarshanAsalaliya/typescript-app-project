import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { DrawerContent } from '../components';
import { CommonString, Routes } from '../constant';
import { SettingScreen, WebViewScreen } from '../modules';
import BottomStackNavigation from './BottomStackNavigation';
import { DrawerParamList } from './NavigationTypes';

const DrawerStack = createDrawerNavigator<DrawerParamList>();

/**
 *
 * @returns drawer stack navigation
 */
const DrawerStackNavigation = (): ReactElement => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <DrawerStack.Screen
        name={Routes.bottomtabRoute}
        component={BottomStackNavigation}
      />
      <DrawerStack.Screen
        name={Routes.settingScreen}
        component={SettingScreen}
      />
      <DrawerStack.Screen
        options={{
          headerShown: true,
          headerTitle: CommonString.regulations,
        }}
        name={Routes.webView}
        component={WebViewScreen}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerStackNavigation;
