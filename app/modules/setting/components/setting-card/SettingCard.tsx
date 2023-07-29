import React, { ReactElement } from 'react';
import { StyleProp, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../hooks';
import { SettingCardTypes } from '../../SettingTypes';
import styleSheet from './SettingCardStyle';
import { Theme } from '../../../../redux';

const SettingCard = ({ item }: SettingCardTypes): ReactElement => {
  const theme: Theme = useTheme();
  const styles: StyleProp = styleSheet(theme);

  return (
    <TouchableOpacity onPress={item?.onPress} style={styles.container}>
      {item?.icon}
      <Text style={styles.settingText}>{item?.settingText}</Text>
    </TouchableOpacity>
  );
};

export default SettingCard;
