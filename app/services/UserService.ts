import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../config';
import { EndPoint, ReducerActions } from '../constant';

export const getUser = createAsyncThunk(
  ReducerActions.getUser,
  async (page: number) => {
    try {
      const userResponse = await Api.get(EndPoint.users + page);
      return userResponse.data.data;
    } catch (e) {}
  },
);
