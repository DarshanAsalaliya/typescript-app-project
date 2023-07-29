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
      backgroundColor: Colors[theme].backgroundColor,
      padding: moderateScale(16),
    },
    imageContainer: {
      position: 'relative',
      alignSelf: 'center',
      width: moderateScale(150),
      height: moderateScale(150),
      marginVertical: verticalScale(16),
    },
    iconContainer: {
      position: 'absolute',
      bottom: 0,
      right: horizontalScale(12),
      backgroundColor: Colors[theme].offWhite,
      padding: moderateScale(5),
      borderRadius: moderateScale(50),
      borderWidth: 1,
      borderColor: Colors[theme].lightGrey,
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
  });

export default styles;
