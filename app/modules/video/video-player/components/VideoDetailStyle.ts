import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';
import { Theme } from '../../../../redux';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: moderateScale(16),
    },
    videoTitle: {
      fontSize: moderateScale(18),
      fontWeight: '600',
      color: Colors[theme].black,
    },
    channelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(16),
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: '600',
      color: Colors[theme].black,
      marginLeft: horizontalScale(12),
    },
    subscribeView: {
      backgroundColor: Colors[theme].red,
      padding: moderateScale(8),
      borderRadius: moderateScale(18),
      marginLeft: 'auto',
    },
    subscribe: {
      fontSize: moderateScale(14),
      color: Colors[theme].commonWhite,
    },
    subscribers: {
      fontSize: moderateScale(14),
      color: Colors[theme].lightGrey,
      marginLeft: horizontalScale(12),
    },
    rowContainer: {
      flexDirection: 'row',
      marginVertical: verticalScale(22),
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
    devider: {
      height: verticalScale(1),
      width: '100%',
      backgroundColor: Colors[theme].lightGrey,
    },
    description: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      marginVertical: verticalScale(16),
    },
  });

export default styles;
