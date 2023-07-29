import { StyleSheet } from 'react-native';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { Theme } from '../../redux';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].secondaryBackground,
      padding: moderateScale(16),
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors[theme].backgroundColor,
      marginTop: verticalScale(8),
      paddingHorizontal: moderateScale(16),
      paddingVertical: verticalScale(4),
      borderRadius: moderateScale(10),
      borderWidth: 1,
      borderColor: Colors[theme].lightGrey,
    },
    textInput: {
      flex: 1,
      paddingVertical: globalMetrics.isIos
        ? verticalScale(12)
        : verticalScale(6),
      marginHorizontal: horizontalScale(4),
      fontSize: moderateScale(14),
      color: Colors[theme].black,
    },
    fotterText: {
      textAlign: 'center',
      paddingVertical: verticalScale(10),
      color: Colors[theme].black,
    },
  });

export default styles;
