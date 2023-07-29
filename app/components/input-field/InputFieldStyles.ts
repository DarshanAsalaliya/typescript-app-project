import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    inputFieldContainer: {
      marginBottom: verticalScale(16),
    },
    inputFieldText: {
      fontSize: moderateScale(14),
      marginBottom: verticalScale(6),
      color: Colors[theme].black,
    },
    inputField: {
      borderRadius: moderateScale(8),
      paddingHorizontal: horizontalScale(8),
      paddingVertical: globalMetrics.isIos
        ? verticalScale(16)
        : verticalScale(10),
      fontSize: moderateScale(16),
      borderColor: Colors[theme].offWhite,
      borderWidth: 1,
      backgroundColor: Colors[theme].commonWhite,
      color: Colors[theme].commonblack,
    },
    errorText: {
      fontSize: moderateScale(14),
      color: Colors[theme].red,
      marginTop: verticalScale(4),
    },
  });

export default styles;
