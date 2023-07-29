import { StyleProp } from 'react-native';
import { useTheme } from '../../hooks';
import { Theme } from '../../redux';
import styleSheet from './CustomHeaderStyle';

const useCustomHeader = (): { styles: StyleProp; theme: Theme } => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  return { styles, theme };
};
export default useCustomHeader;
