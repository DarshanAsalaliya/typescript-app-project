import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ColorSchemeName, StyleProp, useColorScheme } from 'react-native';
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv';
import { AsynkKeys, CommonString, Routes } from '../../../constant';
import { AuthAction, useAppDispach } from '../../../redux';
import { messageAlert, navigationWithParam } from '../../../utils';
import styleSheet from '../SettingScreenStyle';
import { UseSettingType } from '../SettingTypes';

const useSetting = (): UseSettingType => {
  const [theme, setTheme] = useMMKVString(AsynkKeys.theme);
  const [isDefault, setIsDefault] = useMMKVBoolean(AsynkKeys.isDefault);
  const deviceTheme: ColorSchemeName = useColorScheme();
  const styles: StyleProp<Object> = styleSheet(theme);
  const dispatch = useAppDispach();
  const [initialValue, setInitialValue] = useState<number>(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints: string[] = useMemo(() => ['40%', '40%'], []);

  const handleBottomSheet: () => void = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const logOut = (): void => {
    dispatch(AuthAction.logOut());
  };

  const openWeb = async (): Promise<void> => {
    try {
      navigationWithParam(Routes.webView);
    } catch (error) {
      messageAlert(CommonString.someThingWromg);
    }
  };

  const themeChange = (value: string): void => {
    if (value === CommonString.light) {
      setTheme(value);
      setIsDefault(false);
      bottomSheetRef.current?.close();
    } else if (value === CommonString.dark) {
      setTheme(value);
      setIsDefault(false);
      bottomSheetRef.current?.close();
    } else {
      setTheme(deviceTheme);
      setIsDefault(true);
    }
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if (!isDefault) {
      if (theme === CommonString.light) {
        setInitialValue(1);
      } else if (theme === CommonString.dark) {
        setInitialValue(2);
      } else {
        setInitialValue(3);
      }
    } else {
      setInitialValue(3);
    }
  }, [theme]);

  return {
    theme,
    styles,
    logOut,
    openWeb,
    initialValue,
    themeChange,
    bottomSheetRef,
    snapPoints,
    handleBottomSheet,
  };
};
export default useSetting;
