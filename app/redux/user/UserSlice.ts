import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, Routes } from '../../constant';
import { getUser } from '../../services';
import { UserStateType } from './UserInitial';

const initialState: UserStateType = {
  usersList: [],
  isLoading: false,
  isEndList: false,
  route: Routes.homeScreen,
};

const UserSlice = createSlice({
  name: ReducerName.userReducer,
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersList = [action.payload, ...state.usersList];
    },
    endList: state => {
      state.isEndList = true;
    },
    route: (state, actions) => {
      state.route = actions.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, actions) => {
      state.usersList = [...state.usersList, ...actions.payload];
      state.isLoading = false;
    });
  },
});

export const UserReducer = UserSlice.reducer;
export const UserActions = UserSlice.actions;
