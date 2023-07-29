import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Routes } from '../constant';
import { HomeScreen, UserDetailScreen } from '../modules';
import { HomeStackParamList } from './NavigationTypes';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigation = (): ReactElement => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={Routes.homeScreen} component={HomeScreen} />
      <HomeStack.Screen name={Routes.userDetail} component={UserDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
