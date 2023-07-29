import { RootStateType } from '../store';
import { VideoStateType, VideoTypes } from './VideoInitial';

type VideoSelectorsTypes = {
  getVideo: (state: RootStateType) => VideoStateType;
  getVideoList: (state: RootStateType) => VideoTypes[];
  getIsLoading: (state: RootStateType) => boolean;
};

const VideoSelectors: VideoSelectorsTypes = {
  getVideo: (state: RootStateType): VideoStateType => state.VideoReducer,
  getVideoList: (state: RootStateType): VideoTypes[] =>
    state.VideoReducer.videoList,
  getIsLoading: (state: RootStateType): boolean => state.VideoReducer.isLoading,
};

export default VideoSelectors;
