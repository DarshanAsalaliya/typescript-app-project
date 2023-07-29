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
    container: {
      flex: 1,
      padding: moderateScale(16),
      backgroundColor: Colors[theme].backgroundColor,
    },
    bottomSheetContainer: {
      alignItems: 'center',
    },
    bottomSheetBackground: {
      backgroundColor: Colors[theme].backgroundColor,
      borderTopColor: Colors[theme].lightGrey,
      borderWidth: 1,
    },
    radioButtonView: {
      width: horizontalScale(300),
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
    radioText: {
      fontSize: moderateScale(14),
    },
    radioBox: {
      width: '100%',
      height: '25%',
      marginVertical: verticalScale(12),
    },
  });

export default styles;
