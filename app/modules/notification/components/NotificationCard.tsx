import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Circle, X } from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { StyleProp, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { AuthAction, Theme, useAppDispach } from '../../../redux';
import { Colors, moderateScale } from '../../../theme';
import styleSheet from './NotificationCardStyle';

const NotificationCard = ({
  item,
}: {
  item: FirebaseMessagingTypes.RemoteMessage;
}): ReactElement => {
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);
  const dispatch = useAppDispach();

  return (
    <TouchableOpacity
      onPress={() => dispatch(AuthAction.deleteNotification(item?.sentTime))}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <Circle
            size={moderateScale(16)}
            color={Colors[theme].orange}
            weight="fill"
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{item?.notification?.title ?? ''}</Text>
          <Text style={styles.subTitle}>{item?.notification?.body ?? ''}</Text>
        </View>
        <View style={styles.trashContainer}>
          <X color={Colors[theme].red} size={moderateScale(24)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
