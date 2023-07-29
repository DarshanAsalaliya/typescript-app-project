import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { Theme } from '../../redux';

// custom Drawer style
const styles = (theme: Theme) =>
  StyleSheet.create({
    drawerContent: {
      flex: 1,
      backgroundColor: Colors[theme].backgroundColor,
    },
    userInfoSection: {
      paddingLeft: horizontalScale(20),
    },
    rowContainer: {
      flexDirection: 'row',
      marginTop: verticalScale(15),
      alignItems: 'center',
    },
    title: {
      fontSize: moderateScale(16, 0.3),
      marginTop: verticalScale(3),
      fontWeight: 'bold',
      marginLeft: horizontalScale(15),
      marginRight: horizontalScale(5),
      color: Colors[theme].black,
    },
    caption: {
      fontSize: moderateScale(14),
      lineHeight: verticalScale(14),
    },
    lableStyle: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
    },
    row: {
      marginTop: verticalScale(20),
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: horizontalScale(15),
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: horizontalScale(3),
    },
    drawerSection: {
      marginTop: verticalScale(15),
    },
    bottomDrawerSection: {
      marginBottom: verticalScale(15),
      borderTopColor: Colors[theme].offWhite,
      borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(16),
    },
    versionText: {
      margin: moderateScale(16),
      color: Colors[theme].black,
      fontSize: moderateScale(14),
    },
  });

export default styles;
