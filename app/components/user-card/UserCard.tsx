import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { ImageUrl, Routes, UserString } from '../../constant';
import { useTheme } from '../../hooks';
import { UserTypes } from '../../types';
import { navigationWithParam } from '../../utils';
import styleSheet from './UserCardStyles';

/**
 *
 * @param {UserTypes} item - object that have user details
 * @returns - user card that contain user basic detail
 */
const UserCard = ({ item }: { item: UserTypes }): ReactElement => {
  const theme = useTheme();
  const styles = styleSheet(theme);

  return (
    <TouchableOpacity
      onPress={() => navigationWithParam(Routes.userDetail, { item: item })}>
      <View style={styles.container}>
        <Avatar.Image source={{ uri: item?.avatar ?? ImageUrl.profilePhoto }} />
        <View style={styles.detailContainer}>
          <Text style={styles.titleText}>
            {`${item?.first_name ?? UserString.first_name} ${
              item?.last_name ?? UserString.last_name
            }`}
          </Text>
          <Text style={styles.subTitle}>{item?.email ?? UserString.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
