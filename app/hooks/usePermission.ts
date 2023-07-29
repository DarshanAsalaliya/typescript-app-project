import {
  PERMISSIONS,
  PermissionStatus,
  check,
  request,
} from 'react-native-permissions';
import { globalMetrics } from '../theme';

export const checkGalleryPermission = async (): Promise<PermissionStatus> => {
  if (globalMetrics.isAndroid) {
    return await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  } else if (globalMetrics.isIos) {
    return await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
  }
};

export const requestGalleryPermission = async (): Promise<PermissionStatus> => {
  if (globalMetrics.isAndroid) {
    return await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  } else if (globalMetrics.isIos) {
    return await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
  }
};

export const checkCameraPermission = async (): Promise<PermissionStatus> => {
  if (globalMetrics.isAndroid) {
    return await check(PERMISSIONS.ANDROID.CAMERA);
  } else if (globalMetrics.isIos) {
    return await check(PERMISSIONS.IOS.CAMERA);
  }
};

export const requestCameraPermission = async (): Promise<PermissionStatus> => {
  if (globalMetrics.isAndroid) {
    return await request(PERMISSIONS.ANDROID.CAMERA);
  } else if (globalMetrics.isIos) {
    return await request(PERMISSIONS.IOS.CAMERA);
  }
};
