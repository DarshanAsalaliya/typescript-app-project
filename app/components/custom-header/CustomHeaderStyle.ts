import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
const styles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    backButtonContainer: {
      backgroundColor: Colors[theme].backgroundColor,
      borderRadius: moderateScale(10),
      padding: moderateScale(8),
      marginVertical: verticalScale(4),
      borderColor: Colors[theme].lightGrey,
      borderWidth: 0.5,
    },
    cartIconContainer: {
      position: 'relative',
    },
    textView: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: moderateScale(22),
      fontWeight: '600',
      color: Colors[theme].black,
    },
    badgeContainer: {
      position: 'absolute',
      backgroundColor: 'red',
      zIndex: 1,
      right: 0,
      top: 0,
      paddingHorizontal: horizontalScale(7),
      paddingVertical: verticalScale(4),
      borderRadius: moderateScale(10),
    },
    badgeText: {
      color: Colors[theme].commonWhite,
      fontSize: moderateScale(14),
    },
  });

export default styles;
