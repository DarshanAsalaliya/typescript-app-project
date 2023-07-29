import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { Theme } from '../../redux';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: Colors[theme].lightGrey,
      padding: moderateScale(16),
      alignItems: 'center',
      borderRadius: moderateScale(10),
      marginTop: verticalScale(10),
      backgroundColor: Colors[theme].backgroundColor,
    },
    titleText: {
      fontSize: moderateScale(18),
      color: Colors[theme].black,
      fontWeight: '700',
    },
    subTitle: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontWeight: '600',
    },
    detailContainer: {
      marginLeft: horizontalScale(16),
    },
  });

export default styles;
