import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../constant';
import { ThemeStateType } from './ThemeInitial';

/**
 * theme slice that contain action and reducer for change theme of app
 */
const initialState: ThemeStateType = {
  theme: 'light',
  isDefault: true,
  isFirst: true,
};

const ThemeSlice = createSlice({
  name: ReducerName.themeReducer,
  initialState: initialState,
  reducers: {
    dark: state => {
      state.theme = 'dark';
      state.isDefault = false;
    },
    light: state => {
      state.theme = 'light';
      state.isDefault = false;
    },
    default: (state, actions) => {
      state.theme = actions.payload;
      state.isDefault = true;
    },
    isFirst: state => {
      state.isFirst = false;
    },
  },
});

export const ThemeReducer = ThemeSlice.reducer;
export const ThemeActions = ThemeSlice.actions;
