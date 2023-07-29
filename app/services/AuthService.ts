import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../config';
import { EndPoint, ReducerActions, SuccessResponse } from '../constant';
import { UserLoginTypes, UserTypes } from '../types';

export const userLogin = createAsyncThunk(
  ReducerActions.login,
  async (data: UserLoginTypes) => {
    try {
      const loginResponse = await Api.post(EndPoint.login, {
        email: data.email,
        password: data.password,
      });
      if (SuccessResponse.includes(loginResponse.status)) {
        const users = await Api.get(EndPoint.allUser);
        const getLoginUser = users.data.data.filter(
          (item: UserTypes) => item.email === data.email,
        );
        const loginUserData = {
          ...getLoginUser[0],
          password: data.password,
          token: loginResponse.data.token,
        };
        return loginUserData;
      }
    } catch (e) {}
  },
);
