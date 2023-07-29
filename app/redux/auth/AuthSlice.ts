import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../constant';
import { userLogin } from '../../services';
import { AuthInitialState } from './AuthInitial';

// auth slice
const AuthSlice = createSlice({
  name: ReducerName.authReducer,
  initialState: AuthInitialState,
  reducers: {
    logOut: state => {
      state.userData = AuthInitialState.userData;
      state.isLogin = false;
    },
    login: (state, actions) => {
      state.userData = actions.payload;
      state.isLogin = true;
    },
    editUser: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    changePassword: (state, actions) => {
      state.userAuthData = state.userAuthData.map(data =>
        data.email === actions.payload.email ? actions.payload : data,
      );
    },
    addNotification: (state, actions) => {
      state.notificationList = [actions.payload, ...state.notificationList];
    },
    deleteNotification: (state, actions) => {
      state.notificationList = state.notificationList.filter(
        data => data.sentTime !== actions.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.userData = actions.payload;
      state.userAuthData = [
        ...state.userAuthData,
        {
          id: actions.payload.id,
          email: actions.payload.email,
          password: actions.payload.password,
          isFirstChange: false,
          first_name: actions.payload.first_name,
          last_name: actions.payload.last_name,
          avatar: actions.payload.avatar,
        },
      ];
      state.isLogin = true;
    });
    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
    });
  },
});

export const AuthReducer = AuthSlice.reducer;
export const AuthAction = AuthSlice.actions;
