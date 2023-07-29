import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Gear, HouseSimple, User } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Drawer, Title } from 'react-native-paper';
import { ButtonLabel, CommonString, ImageUrl, Routes } from '../../constant';
import { Colors, moderateScale } from '../../theme';
import { UserDrawerContentType } from './DrawerContentType';
import { useDrawerContent } from './hooks';

/**
 *
 * @param props - drawer props that have drawer oprion and methods
 * @returns - custom drawer
 */
const DrawerContent = (props: DrawerContentComponentProps): ReactElement => {
  const { styles, userData, theme, route, setRoute }: UserDrawerContentType =
    useDrawerContent();

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.rowContainer}>
              <Avatar.Image
                source={{
                  uri: ImageUrl.profilePhoto,
                }}
                size={moderateScale(50)}
              />
              <View>
                <Title numberOfLines={1} style={styles.title}>
                  {`${userData?.first_name} ${userData?.last_name}`}
                </Title>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              focused={route === Routes.homeStack}
              label={ButtonLabel.home}
              labelStyle={styles.lableStyle}
              icon={({ size }: { size: number }): ReactElement => (
                <HouseSimple
                  color={Colors[theme].black}
                  size={moderateScale(size)}
                />
              )}
              onPress={(): void => setRoute(Routes.homeStack)}
            />
            <DrawerItem
              focused={route === Routes.profileRoute}
              icon={({ size }: { size: number }): ReactElement => (
                <User color={Colors[theme].black} size={moderateScale(size)} />
              )}
              labelStyle={styles.lableStyle}
              label={ButtonLabel.profile}
              onPress={(): void => setRoute(Routes.profileRoute)}
            />
            <DrawerItem
              focused={route === Routes.settingScreen}
              icon={({ size }: { size: number }): ReactElement => (
                <Gear color={Colors[theme].black} size={moderateScale(size)} />
              )}
              labelStyle={styles.lableStyle}
              label={ButtonLabel.setting}
              onPress={(): void => setRoute(Routes.settingScreen)}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Text style={styles.versionText}>{CommonString.version}</Text>
    </View>
  );
};

export default DrawerContent;
