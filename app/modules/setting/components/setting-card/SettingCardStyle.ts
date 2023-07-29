import { StyleSheet } from 'react-native';
import { Theme } from '../../../../redux';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: moderateScale(12),
      marginVertical: verticalScale(10),
      borderRadius: moderateScale(12),
      borderWidth: 0.5,
      borderColor: Colors[theme].lightGrey,
    },
    settingText: {
      color: Colors[theme].black,
      marginLeft: horizontalScale(16),
      fontSize: moderateScale(16),
      fontWeight: '500',
    },
  });

export default styles;
