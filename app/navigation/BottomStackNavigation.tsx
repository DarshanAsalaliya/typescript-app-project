import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  UserCircle,
  UserCirclePlus,
  VideoCamera,
} from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { StyleProp, Text } from 'react-native';
import { ButtonLabel, Routes } from '../constant';
import { useTheme } from '../hooks';
import { CreateScreen, ProfileScreen, VideoListScreen } from '../modules';
import { Theme, UserActions, useAppDispach } from '../redux';
import { Colors, moderateScale } from '../theme';
import HomeStackNavigation from './HomeStackNavigation';
import styleSheet from './NavigationStyles';
import { BottomTabParamList } from './NavigationTypes';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const BottomStack = createBottomTabNavigator<BottomTabParamList>();

interface TabPressType {
  route: RouteProp<ParamListBase, string>;
}

/**
 *
 * @returns - bottom navigator that help to navigate between screens
 */
const BottomStackNavigation = (): ReactElement => {
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);
  const dispatch = useAppDispach();

  return (
    <BottomStack.Navigator
      screenListeners={({ route }: TabPressType) => ({
        focus: () => dispatch(UserActions.route(route.name)),
      })}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.bottomTabStyle,
        tabBarLabelPosition: 'below-icon',
      }}>
      <BottomStack.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={focused ? styles.focuseText : styles.text}>
                {ButtonLabel.home}
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <House
                size={moderateScale(24)}
                color={focused ? Colors[theme].orange : Colors[theme].black}
                weight={focused ? 'fill' : 'regular'}
              />
            );
          },
        }}
        name={Routes.homeStack}
        component={HomeStackNavigation}
      />
      <BottomStack.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={focused ? styles.focuseText : styles.text}>
                {ButtonLabel.addUser}
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <UserCirclePlus
                size={moderateScale(24)}
                color={focused ? Colors[theme].orange : Colors[theme].black}
                weight={focused ? 'fill' : 'regular'}
              />
            );
          },
        }}
        name={Routes.createScreen}
        component={CreateScreen}
      />
      <BottomStack.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={focused ? styles.focuseText : styles.text}>
                {ButtonLabel.video}
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <VideoCamera
                size={moderateScale(24)}
                color={focused ? Colors[theme].orange : Colors[theme].black}
                weight={focused ? 'fill' : 'regular'}
              />
            );
          },
        }}
        name={Routes.videoList}
        component={VideoListScreen}
      />
      <BottomStack.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={focused ? styles.focuseText : styles.text}>
                {ButtonLabel.profile}
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <UserCircle
                size={moderateScale(24)}
                color={focused ? Colors[theme].orange : Colors[theme].black}
                weight={focused ? 'fill' : 'regular'}
              />
            );
          },
        }}
        name={Routes.profileRoute}
        component={ProfileScreen}
      />
    </BottomStack.Navigator>
  );
};

export default BottomStackNavigation;
