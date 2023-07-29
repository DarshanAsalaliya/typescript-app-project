import { FormikProps, useFormik } from 'formik';
import { useState } from 'react';
import { StyleProp } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { RESULTS, openSettings } from 'react-native-permissions';
import { CommonString } from '../../constant';
import {
  checkCameraPermission,
  checkGalleryPermission,
  requestCameraPermission,
  requestGalleryPermission,
  useTheme,
} from '../../hooks';
import {
  AuthAction,
  AuthSelectors,
  useAppDispach,
  useAppSelector,
} from '../../redux';
import { UserTypes } from '../../types';
import { UserValidationSchema, messageAlert } from '../../utils';
import styleSheet from './ProfileScreenStyle';

export interface UseProfile {
  styles: StyleProp;
  formik: FormikProps<UserTypes>;
  userData: UserTypes | null;
  editable: boolean;
  onEdit: () => void;
  onProfileEdit: () => void;
  onOpenGallery: () => Promise<void>;
  isVisible: boolean;
  modalVisible: () => void;
  onOpenCamera: () => Promise<void>;
}

const useProfile = (): UseProfile => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const dispatch = useAppDispach();
  const userData = useAppSelector(AuthSelectors.getUserData);
  const [editable, setEditable] = useState<boolean>(false);
  const [isVisible, setVisible] = useState(false);

  const modalVisible = (): void => {
    setVisible(!isVisible);
  };

  const onAddUser = (): void => {
    const user = {
      first_name: formik.values.first_name,
      last_name: formik.values.last_name,
      email: formik.values.email,
    };
    dispatch(AuthAction.editUser(user));
    setEditable(!editable);
    messageAlert(CommonString.dataUpdate);
  };

  const onEdit = (): void => {
    setEditable(!editable);
  };

  const onOpenGallery = async (): Promise<void> => {
    const permissionStatus = await checkGalleryPermission();
    if (permissionStatus === RESULTS.GRANTED) {
      showImagePicker();
    } else if (permissionStatus === RESULTS.BLOCKED) {
      openSettings();
    } else if (permissionStatus === RESULTS.DENIED) {
      const requestPermission = await requestGalleryPermission();
      if (requestPermission === RESULTS.GRANTED) {
        showImagePicker();
      }
    } else {
      messageAlert(CommonString.notAvailable);
    }
  };

  const onOpenCamera = async (): Promise<void> => {
    const permissionStatus = await checkCameraPermission();
    if (permissionStatus === RESULTS.GRANTED) {
      openCamera();
    } else if (permissionStatus === RESULTS.BLOCKED) {
      openSettings();
    } else if (permissionStatus === RESULTS.DENIED) {
      const requestPermission = await requestCameraPermission();
      if (requestPermission === RESULTS.GRANTED) {
        openCamera();
      }
    } else {
      messageAlert(CommonString.notAvailable);
    }
  };

  const showImagePicker = async (): Promise<void> => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets) {
      dispatch(AuthAction.editUser({ avatar: result.assets[0]?.uri }));
    }
    setVisible(!isVisible);
  };

  const openCamera = async (): Promise<void> => {
    const result = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    if (result.assets) {
      dispatch(AuthAction.editUser({ avatar: result.assets[0]?.uri }));
    }
    setVisible(!isVisible);
  };

  const formik = useFormik({
    initialValues: {
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
    },
    onSubmit: onAddUser,
    validationSchema: UserValidationSchema,
  });

  return {
    styles,
    formik,
    userData,
    editable,
    onEdit,
    onOpenGallery,
    isVisible,
    modalVisible,
    onOpenCamera,
  };
};

export default useProfile;
