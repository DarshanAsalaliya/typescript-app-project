import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import { Colors, moderateScale } from '../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: moderateScale(300),
      height: moderateScale(300),
    },
    text: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontWeight: '600',
    },
  });

export default styles;
