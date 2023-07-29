import { StyleSheet } from 'react-native';
import { Theme } from '../redux';
import { Colors, moderateScale, verticalScale } from '../theme';

// navigation style file
const styles = (theme: Theme) =>
  StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: Colors[theme].backgroundColor,
      height: verticalScale(52),
    },
    focuseText: {
      color: Colors[theme].orange,
      fontSize: moderateScale(14, 0.5),
    },
    text: {
      color: Colors[theme].black,
      fontSize: moderateScale(14, 0.5),
    },
  });

export default styles;
