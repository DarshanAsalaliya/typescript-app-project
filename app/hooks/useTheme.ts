import { useMMKVString } from 'react-native-mmkv';
import { AsynkKeys } from '../constant';

/**
 *
 * @returns - theme of device or selected bt user which is dark or light
 */
const useTheme = () => {
  const [theme, setTheme] = useMMKVString(AsynkKeys.theme);

  return theme;
};

export default useTheme;
