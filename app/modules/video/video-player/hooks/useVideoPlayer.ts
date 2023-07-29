import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { StyleProp, useWindowDimensions } from 'react-native';
import Video from 'react-native-video';
import { useTheme } from '../../../../hooks';
import { Theme } from '../../../../redux';
import { UseVideoType, VideoTypes } from '../../VideoTypes';
import styleSheet from '../VideoPlayerStyle';
import Orientation from 'react-native-orientation-locker';
import { globalMetrics } from '../../../../theme';

const useVideoPlayer = (): UseVideoType => {
  const theme: Theme = useTheme();
  const { width, height } = useWindowDimensions();
  const styles: StyleProp = styleSheet(theme);
  const route = useRoute();
  const item: VideoTypes = route?.params?.item;
  const videoRef = useRef<Video>(null);
  const [isVisibleControl, setIsVisibleControl] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0.0);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  const [potrait, setPotrait] = useState<boolean>(false);
  const [landscap, setLandscap] = useState<boolean>(false);

  useEffect(() => {
    if (width > height) {
      setPotrait(true);
    } else {
      setPotrait(false);
      Orientation.unlockAllOrientations();
    }
  }, [width, height]);

  useEffect(() => {
    if (isVisibleControl) {
      setTimeout(() => {
        setIsVisibleControl(!isVisibleControl);
      }, 2000);
    }
  }, [isVisibleControl]);

  const onFullScreen = () => {
    if (globalMetrics.isIos) {
      videoRef.current?.presentFullscreenPlayer();
    } else {
      if (!landscap) {
        setLandscap(!landscap);
        Orientation.lockToLandscape();
        videoRef.current?.presentFullscreenPlayer();
      } else {
        setLandscap(!landscap);
        videoRef.current?.dismissFullscreenPlayer();
        Orientation.unlockAllOrientations();
      }
    }
  };

  const onControlVisible = (): void => {
    setIsVisibleControl(!isVisibleControl);
  };

  const onVolumePlus = (): void => {
    if (volume < 1.0) {
      setVolume(volume + 0.1);
    }
  };

  const onVolumeMinus = (): void => {
    if (volume > 0.0) {
      setVolume(volume - 0.1);
    }
  };

  const onMute = (): void => {
    setIsMute(!isMute);
  };

  const pauseControl = (): void => {
    setIsPaused(!isPaused);
  };

  const onVideoLoad = (duration: number): void => {
    setVideoDuration(duration);
  };

  const onVideoProgress = (currentTime: number): void => {
    setVideoCurrentTime(currentTime);
  };

  const onSliderDrag = (data: number) => {
    setVideoCurrentTime(data);
    videoRef.current?.seek(data);
  };

  const forward = (): void => {
    videoRef.current?.seek(videoCurrentTime + 10);
  };

  const backward = (): void => {
    videoRef.current?.seek(videoCurrentTime - 10);
  };

  const convertSecondsToHr = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}:${minutes}:${Math.floor(remainingSeconds)}`;
  };

  return {
    styles,
    theme,
    item,
    videoRef,
    isVisibleControl,
    setIsVisibleControl,
    isPaused,
    pauseControl,
    onVideoLoad,
    onVideoProgress,
    videoDuration,
    videoCurrentTime,
    convertSecondsToHr,
    onSliderDrag,
    forward,
    backward,
    onMute,
    isMute,
    volume,
    onVolumePlus,
    onVolumeMinus,
    onControlVisible,
    potrait,
    onFullScreen,
  };
};

export default useVideoPlayer;
