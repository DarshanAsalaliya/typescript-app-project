import { StyleSheet } from 'react-native';
import { Theme } from '../../redux';
import { Colors } from '../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
