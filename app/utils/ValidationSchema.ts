import * as Yup from 'yup';
import { RegExp, YupErrorMessage } from '../constant';

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.emailRegex, YupErrorMessage.emailError),
  password: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
});

export const SignupValidationSchema = Yup.object({
  firstname: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.nameRegex, YupErrorMessage.nameError),
  lastname: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.nameRegex, YupErrorMessage.nameError),
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.emailRegex, YupErrorMessage.emailError),
  password: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
});

export const UserValidationSchema = Yup.object({
  first_name: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.nameRegex, YupErrorMessage.nameError),
  last_name: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.nameRegex, YupErrorMessage.nameError),
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(RegExp.emailRegex, YupErrorMessage.emailError),
});

export const ChangePasswordValidationSchema = Yup.object({
  currentPassword: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
  newPassword: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
  reEnterNewPassword: Yup.string()
    .required(YupErrorMessage.require)
    .oneOf([Yup.ref('newPassword')]),
});
