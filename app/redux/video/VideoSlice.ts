import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../constant';
import { getVideoList } from '../../services';
import { initialState } from './VideoInitial';

const VideoSlice = createSlice({
  name: ReducerName.videoReducer,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVideoList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getVideoList.fulfilled, (state, actions) => {
      state.videoList = actions.payload;
      state.isLoading = false;
    });
  },
});

export const VideoReducer = VideoSlice.reducer;
export const VideoAction = VideoSlice.actions;
