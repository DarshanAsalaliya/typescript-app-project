import Slider from '@react-native-community/slider';
import {
  ArrowLeft,
  ArrowsOutSimple,
  ClockClockwise,
  ClockCounterClockwise,
  Minus,
  Pause,
  Play,
  Plus,
  SpeakerHigh,
  SpeakerSlash,
} from 'phosphor-react-native';
import React, { ReactElement } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { Colors, moderateScale } from '../../../theme';
import { navigateBack } from '../../../utils';
import { useVideoPlayer } from './hooks';
import { UseVideoType } from '../VideoTypes';
import { VideoDetail } from './components';

const VideoPlayer = (): ReactElement => {
  const {
    styles,
    theme,
    item,
    videoRef,
    isVisibleControl,
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
  }: UseVideoType = useVideoPlayer();

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoView} onPress={onControlVisible}>
        <Video
          repeat
          ref={videoRef}
          source={{
            uri: item.sources[0],
          }}
          style={
            potrait ? styles.potraitBackgroundVideo : styles.backgroundVideo
          }
          resizeMode="contain"
          paused={isPaused}
          muted={isMute}
          volume={volume}
          onLoad={({ duration }) => onVideoLoad(duration)}
          onProgress={({ currentTime }) => onVideoProgress(currentTime)}
        />
        {isVisibleControl && (
          <View
            style={
              potrait ? styles.potraitControlContainer : styles.controlContainer
            }>
            <View style={styles.topControlContainer}>
              <TouchableOpacity onPress={potrait ? onFullScreen : navigateBack}>
                <ArrowLeft
                  size={moderateScale(28)}
                  color={Colors[theme].commonWhite}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onFullScreen}>
                <ArrowsOutSimple
                  size={moderateScale(28)}
                  weight="fill"
                  color={Colors[theme].commonWhite}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.middleControlContainer}>
              <View style={styles.pause}>
                <TouchableOpacity onPress={backward}>
                  <ClockCounterClockwise
                    size={moderateScale(28)}
                    weight="fill"
                    color={Colors[theme].commonWhite}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={pauseControl}>
                  {isPaused ? (
                    <Play
                      size={moderateScale(28)}
                      weight="fill"
                      color={Colors[theme].commonWhite}
                    />
                  ) : (
                    <Pause
                      size={moderateScale(28)}
                      weight="fill"
                      color={Colors[theme].commonWhite}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={forward}>
                  <ClockClockwise
                    size={moderateScale(28)}
                    weight="fill"
                    color={Colors[theme].commonWhite}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.volumeContainer}>
                <TouchableOpacity onPress={onVolumePlus}>
                  <Plus
                    size={moderateScale(28)}
                    weight="fill"
                    color={Colors[theme].commonWhite}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onMute}>
                  {isMute ? (
                    <SpeakerSlash
                      size={moderateScale(28)}
                      weight="fill"
                      color={Colors[theme].commonWhite}
                    />
                  ) : (
                    <SpeakerHigh
                      size={moderateScale(28)}
                      weight="fill"
                      color={Colors[theme].commonWhite}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={onVolumeMinus}>
                  <Minus
                    size={moderateScale(28)}
                    weight="fill"
                    color={Colors[theme].commonWhite}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomControlContainer}>
              <View style={styles.sliderContainer}>
                <Text style={styles.durationText}>
                  {convertSecondsToHr(videoCurrentTime)}
                </Text>
                <Slider
                  style={styles.slider}
                  value={videoCurrentTime}
                  maximumValue={videoDuration}
                  onValueChange={data => onSliderDrag(data)}
                  minimumTrackTintColor={Colors[theme].orange}
                  maximumTrackTintColor={Colors[theme].lightGrey}
                />
                <Text style={styles.durationText}>
                  {convertSecondsToHr(videoDuration)}
                </Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
      <VideoDetail item={item} theme={theme} />
    </View>
  );
};

export default VideoPlayer;
