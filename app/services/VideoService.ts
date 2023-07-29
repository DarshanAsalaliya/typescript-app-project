import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReducerActions, videoUrl } from '../constant';

export const getVideoList = createAsyncThunk(
  ReducerActions.videoList,
  async () => {
    try {
      const videoResponse = await axios.get(videoUrl);
      return videoResponse?.data?.categories[0]?.videos ?? [];
    } catch (e) {}
  },
);
