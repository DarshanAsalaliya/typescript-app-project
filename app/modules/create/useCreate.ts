import { FormikProps, useFormik } from 'formik';
import { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { RESULTS, openSettings } from 'react-native-permissions';
import { CommonString, Routes } from '../../constant';
import {
  checkCameraPermission,
  checkGalleryPermission,
  requestCameraPermission,
  requestGalleryPermission,
  useTheme,
} from '../../hooks';
import { UserActions, useAppDispach } from '../../redux';
import { UserTypes } from '../../types';
import {
  UserValidationSchema,
  messageAlert,
  navigationWithParam,
} from '../../utils';
import styleSheet from './CreateScreenStyle';

export interface UseCreate {
  styles: StyleProp;
  formik: FormikProps<UserTypes>;
  imageUrl: string;
  onProfileEdit: () => Promise<void>;
  onOpenCamera: () => Promise<void>;
  onOpenGallery: () => Promise<void>;
  isVisible: boolean;
  modalVisible: () => void;
}

const useCreate = (): UseCreate => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const dispatch = useAppDispach();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [isVisible, setVisible] = useState(false);

  const modalVisible = (): void => {
    setVisible(!isVisible);
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
    if (result.assets) setImageUrl(result.assets[0]?.uri);
    setVisible(!isVisible);
  };

  const openCamera = async (): Promise<void> => {
    const result = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    if (result.assets) setImageUrl(result.assets[0]?.uri);
    setVisible(!isVisible);
  };

  const onAddUser = (): void => {
    const user: UserTypes = {
      id: Date.now(),
      first_name: formik.values.first_name,
      last_name: formik.values.last_name,
      email: formik.values.email,
      avatar: imageUrl,
    };
    if (imageUrl) {
      dispatch(UserActions.addUser(user));
      formik.resetForm();
      setImageUrl(undefined);
      navigationWithParam(Routes.homeScreen);
    } else {
      messageAlert(CommonString.selectImage);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
    onSubmit: onAddUser,
    validationSchema: UserValidationSchema,
  });

  return {
    styles,
    formik,
    imageUrl,
    onOpenCamera,
    onOpenGallery,
    isVisible,
    modalVisible,
  };
};

export default useCreate;
