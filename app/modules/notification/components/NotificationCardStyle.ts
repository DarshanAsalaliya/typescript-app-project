import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import { Theme } from '../../../redux';

const styles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      borderWidth: 0.5,
      borderColor: Colors[theme].lightGrey,
      padding: moderateScale(12),
      marginVertical: moderateScale(4),
      borderRadius: moderateScale(8),
    },
    iconContainer: {
      paddingTop: verticalScale(4),
    },
    detailContainer: {
      flex: 1,
      marginLeft: horizontalScale(8),
    },
    title: {
      fontSize: moderateScale(18),
      color: Colors[theme].dark,
    },
    subTitle: {
      fontSize: moderateScale(14),
      color: Colors[theme].lightGrey,
    },
    trashContainer: {
      justifyContent: 'center',
    },
  });

export default styles;
