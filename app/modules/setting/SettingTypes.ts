import { ReactElement, RefObject } from 'react';
import { Theme } from '../../redux';
import { StyleProp } from 'react-native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { FormikProps } from 'formik';

export interface SettingTypes {
  icon: ReactElement;
  onPress: () => void;
  settingText: string;
}

export interface SettingCardTypes {
  item: SettingTypes;
}

export interface ChangePasswordType {
  currentPassword: string;
  newPassword: string;
  reEnterNewPassword: string;
}

export interface UseSettingType {
  styles: StyleProp;
  logOut: () => void;
  openWeb: () => Promise<void>;
  theme: Theme;
  initialValue: number;
  themeChange: (value: string) => void;
  bottomSheetRef: RefObject<BottomSheetMethods>;
  snapPoints: string[];
  handleBottomSheet: () => void;
}

export interface UseChangePassword {
  bottomSheetPasswordRef: RefObject<BottomSheetMethods>;
  formik: FormikProps<ChangePasswordType>;
  handlePasswordBottomSheet: () => void;
  snapPointsPassword: string[];
  expandPasswordBottomsheet: () => void;
  keyBoardDismiss: () => void;
}
