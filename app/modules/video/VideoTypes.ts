import { StyleProp } from 'react-native';
import { Theme } from '../../redux';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Video from 'react-native-video';

export interface VideoTypes {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface UseVideoListTypes {
  theme: Theme;
  styles: StyleProp;
  isLoading?: boolean;
  videoList: VideoTypes[];
  onRefresh: () => void;
}
export interface UseVideoType {
  styles: StyleProp;
  theme: Theme;
  item: VideoTypes;
  videoRef: RefObject<Video>;
  isVisibleControl: boolean;
  setIsVisibleControl: Dispatch<SetStateAction<boolean>>;
  isPaused: boolean;
  pauseControl: () => void;
  onVideoLoad: (duration: number) => void;
  onVideoProgress: (currentTime: number) => void;
  videoDuration: number;
  videoCurrentTime: number;
  convertSecondsToHr: (seconds: number) => string;
  onSliderDrag: (data: number) => void;
  forward: () => void;
  backward: () => void;
  onMute: () => void;
  isMute: boolean;
  volume: number;
  onVolumePlus: () => void;
  onVolumeMinus: () => void;
  onControlVisible: () => void;
  potrait: boolean;
  onFullScreen: () => void;
}
