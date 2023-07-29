import React, { ReactElement } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  View,
  useColorScheme,
} from 'react-native';
import { useTheme } from '../../hooks';
import { Theme } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import styleSheet from './LoaderScreenStyles';

//loader screen
const LoaderScreen = (): ReactElement => {
  const theme: Theme = useTheme();
  const apperence = useColorScheme();
  const themeValue = theme ?? apperence;
  const styles: StyleProp = styleSheet(themeValue);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={moderateScale(50)}
        color={Colors[themeValue].black}
      />
    </View>
  );
};

export default LoaderScreen;
