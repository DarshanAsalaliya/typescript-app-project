import { FormikProps } from 'formik';
import { UserLoginTypes } from '../../../types';
import { Theme } from '../../../redux';

export interface UseLoginType {
  formik: FormikProps<UserLoginTypes>;
  theme: Theme;
  isLoading: boolean;
}
