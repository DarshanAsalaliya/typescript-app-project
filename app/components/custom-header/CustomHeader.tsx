import { Bell, CaretLeft, List } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { StyleProp, Text, TouchableOpacity, View } from 'react-native';
import { CommonString, Routes } from '../../constant';
import { AuthSelectors, Theme, useAppSelector } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import { navigateBack, navigationWithParam, toggleDrawer } from '../../utils';
import { CustomHeaderType } from './CustomHeaderTypes';
import useCustomHeader from './useCustomHeader';

const CustomHeader = ({
  notification,
  backButton,
  headerText,
}: CustomHeaderType): ReactElement => {
  const { styles, theme }: { styles: StyleProp; theme: Theme } =
    useCustomHeader();

  const navigationList = useAppSelector(AuthSelectors.getNotification);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.cartIconContainer}
        onPress={backButton ? navigateBack : toggleDrawer}>
        <View style={styles.backButtonContainer}>
          {backButton ? (
            <CaretLeft
              size={moderateScale(24)}
              color={Colors[theme].black}
              weight="bold"
            />
          ) : (
            <List
              size={moderateScale(24)}
              color={Colors[theme].black}
              weight="bold"
            />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.title}>{headerText ?? CommonString.appName}</Text>
      </View>
      {notification && (
        <TouchableOpacity
          onPress={() => navigationWithParam(Routes.notificationScreen)}
          style={styles.cartIconContainer}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{navigationList?.length ?? 0}</Text>
          </View>
          <View style={styles.backButtonContainer}>
            <Bell
              size={moderateScale(24)}
              color={Colors[theme].black}
              weight="bold"
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
