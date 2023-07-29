import { StyleSheet } from 'react-native';
import { Theme } from '../../../redux';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(16),
      backgroundColor: Colors[theme].backgroundColor,
    },
    coverImage: {
      width: '100%',
      height: verticalScale(180),
      borderRadius: moderateScale(16),
      marginTop: verticalScale(16),
    },
    innerView: {
      position: 'absolute',
      top: verticalScale(130),
      alignSelf: 'center',
      alignItems: 'center',
    },
    profileImageView: {
      backgroundColor: Colors[theme].commonWhite,
      alignSelf: 'center',
      width: moderateScale(110),
      height: moderateScale(110),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(110),
    },
    titleText: {
      color: Colors[theme].black,
      fontSize: moderateScale(20),
      fontWeight: '600',
    },
    rowContainer: {
      flexDirection: 'row',
      marginTop: verticalScale(16),
      alignSelf: 'center',
    },
    topViewDetailContainer: {
      alignItems: 'center',
      marginHorizontal: horizontalScale(26),
    },
    subTitleText: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontWeight: '600',
    },
    text: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
    },
    textColor: {
      fontSize: moderateScale(16),
      color: Colors[theme].orange,
      fontWeight: '600',
    },
    bottomView: {
      width: '100%',
      borderWidth: 1,
      borderColor: Colors[theme].lightGrey,
      backgroundColor: Colors[theme].secondaryBackground,
      borderRadius: moderateScale(16),
      marginVertical: verticalScale(16),
    },
    bottomViewDetailContainer: {
      paddingHorizontal: horizontalScale(16),
      paddingVertical: verticalScale(8),
    },
    breakLine: {
      height: verticalScale(1),
      backgroundColor: Colors[theme].lightGrey,
    },
    modalView: {
      flex: 1,
      backgroundColor: Colors[theme].blackTransparent,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
