import { StyleSheet } from 'react-native';
import { Theme } from '../../../redux';
import {
  Colors,
  globalMetrics,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme]?.backgroundColor,
      padding: moderateScale(16),
      justifyContent: 'space-between',
    },
    heading: {
      fontWeight: '700',
      fontSize: moderateScale(32),
      marginTop: verticalScale(32),
      color: Colors[theme].black,
    },
    subHeading: {
      fontSize: moderateScale(14),
      marginTop: verticalScale(6),
      color: Colors[theme].black,
    },
    fieldContainer: {
      marginTop: verticalScale(50),
    },
    buttonView: {
      backgroundColor: Colors[theme].orange,
      borderRadius: moderateScale(8),
      paddingVertical: globalMetrics.isIos
        ? verticalScale(16)
        : verticalScale(12),
    },
    buttonText: {
      fontSize: moderateScale(16),
      alignSelf: 'center',
      color: Colors[theme].commonWhite,
      fontWeight: '600',
    },
    forgetView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(10),
    },
    forgetText: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
    },
    resetText: {
      fontSize: moderateScale(14),
      color: Colors[theme].green,
    },
    bottomView: {
      flexDirection: 'row',
      borderWidth: 1,
      borderTopColor: Colors[theme].offWhite,
      borderBottomColor: Colors[theme].backgroundColor,
      borderRightColor: Colors[theme].backgroundColor,
      borderLeftColor: Colors[theme].backgroundColor,
      paddingTop: verticalScale(16),
      justifyContent: 'center',
    },
  });

export default styles;
