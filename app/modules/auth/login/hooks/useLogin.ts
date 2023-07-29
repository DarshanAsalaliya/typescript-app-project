import { useFormik } from 'formik';
import { CommonString } from '../../../../constant';
import { useTheme } from '../../../../hooks';
import {
  AuthAction,
  AuthSelectors,
  Theme,
  useAppDispach,
  useAppSelector,
} from '../../../../redux';
import { userLogin } from '../../../../services';
import { LoginValidationSchema, messageAlert } from '../../../../utils';
import { UseLoginType } from '../LoginType';

/**
 *
 * @returns - theme mode of device or chose by user and formik object
 */
const useLogin = (): UseLoginType => {
  const theme: Theme = useTheme();
  const dispatch = useAppDispach();
  const isLoading = useAppSelector(AuthSelectors.getIsLoading);
  const authUserData = useAppSelector(AuthSelectors.getUserAuthData);

  const submitLogin = (): void => {
    const loginData = {
      email: formik.values.email,
      password: formik.values.password,
    };
    if (authUserData.length > 0) {
      const getUser = authUserData.filter(
        data => data.email === formik.values.email,
      );
      if (getUser.length > 0) {
        if (getUser[0]?.isFirstChange) {
          if (getUser[0]?.password === formik.values.password) {
            dispatch(AuthAction.login(getUser[0]));
          } else {
            messageAlert(CommonString.passwordWrong);
          }
        } else {
          dispatch(AuthAction.login(getUser[0]));
        }
      } else {
        dispatch(userLogin(loginData));
      }
    } else {
      dispatch(userLogin(loginData));
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitLogin,
    validationSchema: LoginValidationSchema,
  });

  return { formik, theme, isLoading };
};

export default useLogin;
