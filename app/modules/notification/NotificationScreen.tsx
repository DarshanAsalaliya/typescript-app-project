import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { BellSlash } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { FlatList, StyleProp, Text, View } from 'react-native';
import { CustomHeader } from '../../components';
import { CommonString } from '../../constant';
import { useTheme } from '../../hooks';
import { AuthSelectors, Theme, useAppSelector } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import styleSheet from './NotificationScreenStyle';
import { NotificationCard } from './components';

const notificationRender = ({
  item,
}: {
  item: FirebaseMessagingTypes.RemoteMessage;
}): ReactElement => <NotificationCard item={item} />;

const NotificationScreen = (): ReactElement => {
  const notificationList = useAppSelector(AuthSelectors.getNotification);
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);

  const emptyScreen = () => (
    <View style={styles.emptyContainer}>
      <BellSlash size={moderateScale(140)} color={Colors[theme].black} />
      <Text style={styles.notification}>{CommonString.notifications}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader backButton headerText={CommonString.notifications} />
      <FlatList
        data={notificationList}
        renderItem={notificationRender}
        ListEmptyComponent={emptyScreen}
      />
    </View>
  );
};

export default NotificationScreen;
