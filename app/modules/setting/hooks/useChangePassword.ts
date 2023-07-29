import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useCallback, useMemo, useRef } from 'react';
import { Keyboard } from 'react-native';
import { CommonString } from '../../../constant';
import {
  AuthAction,
  AuthSelectors,
  useAppDispach,
  useAppSelector,
} from '../../../redux';
import { ChangePasswordValidationSchema, messageAlert } from '../../../utils';
import { UseChangePassword } from '../SettingTypes';

const useChangePassword = (): UseChangePassword => {
  const bottomSheetPasswordRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispach();
  const userAuthData = useAppSelector(AuthSelectors.getUserAuthData);
  const userData = useAppSelector(AuthSelectors.getUserData);

  const handlePasswordBottomSheet: () => void = useCallback(() => {
    bottomSheetPasswordRef.current?.snapToIndex(0);
  }, []);

  const onPasswordSubmit = (): void => {
    const getCurrentPass = userAuthData.filter(
      data => data.email === userData?.email,
    );
    if (
      getCurrentPass.length > 0 &&
      getCurrentPass[0]?.password === formik.values.currentPassword
    ) {
      const newPassword = {
        id: getCurrentPass[0]?.id,
        email: getCurrentPass[0]?.email,
        password: formik.values.newPassword,
        isFirstChange: true,
      };
      dispatch(AuthAction.changePassword(newPassword));
      bottomSheetPasswordRef.current?.close();
      formik.resetForm();
      messageAlert(CommonString.passwordChange);
    } else {
      messageAlert(CommonString.currentPassWrong);
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      reEnterNewPassword: '',
    },
    onSubmit: onPasswordSubmit,
    validationSchema: ChangePasswordValidationSchema,
  });

  const snapPointsPassword: string[] = useMemo(() => ['95%', '95%'], []);

  const expandPasswordBottomsheet = (): void => {
    bottomSheetPasswordRef.current?.expand();
  };

  const keyBoardDismiss = (): void => {
    Keyboard.dismiss();
  };

  return {
    bottomSheetPasswordRef,
    formik,
    handlePasswordBottomSheet,
    snapPointsPassword,
    expandPasswordBottomsheet,
    keyBoardDismiss,
  };
};
export default useChangePassword;
