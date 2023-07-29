import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';
import { Images } from '../../assets';
import { CommonString } from '../../constant';
import { useTheme } from '../../hooks';
import styleSheet from './NoResultStyles';

const NoResult = (): ReactElement => {
  const theme = useTheme();
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={Images.searchMan}
        resizeMode="contain"
      />
      <Text style={styles.text}>{CommonString.noResult}</Text>
    </View>
  );
};

export default NoResult;
