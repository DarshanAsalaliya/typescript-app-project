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
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme].blackTransparent,
    },
    modalButtonView: {
      backgroundColor: Colors[theme].white,
      padding: moderateScale(16),
      borderRadius: moderateScale(16),
    },
    buttonContainer: {
      width: horizontalScale(200),
    },
    modalButtonText: {
      color: Colors[theme].orange,
      alignSelf: 'center',
      fontSize: moderateScale(16),
      fontWeight: '700',
      paddingVertical: verticalScale(16),
    },
  });

export default styles;
