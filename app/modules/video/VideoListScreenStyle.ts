import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import {
  Colors,
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
    videoItemContainer: {
      marginTop: verticalScale(16),
      borderColor: 'grey',
      borderWidth: 0.5,
      borderRadius: moderateScale(15),
    },
    thumbnail: {
      width: '100%',
      height: verticalScale(200),
      borderRadius: moderateScale(15),
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      marginTop: verticalScale(8),
      color: Colors[theme].black,
    },
    channel: {
      fontSize: moderateScale(16),
      color: Colors[theme].lightGrey,
      marginTop: verticalScale(4),
      paddingBottom: verticalScale(5),
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    channelName: {
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(16),
      fontWeight: '500',
      color: Colors[theme].black,
    },
    buttonView: {
      backgroundColor: Colors[theme].red,
      padding: moderateScale(12),
      borderRadius: moderateScale(18),
    },
    subscribe: {
      color: Colors[theme].commonWhite,
      fontSize: moderateScale(14),
      fontWeight: '500',
    },
    channelView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: moderateScale(10),
    },
  });

export default styles;
