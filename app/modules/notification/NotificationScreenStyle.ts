import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import { Colors, moderateScale, verticalScale } from '../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].backgroundColor,
      padding: moderateScale(16),
    },
    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: moderateScale(24),
    },
    notification: {
      fontSize: moderateScale(16),
      color: Colors[theme].black,
      marginTop: verticalScale(14),
    },
  });

export default styles;
