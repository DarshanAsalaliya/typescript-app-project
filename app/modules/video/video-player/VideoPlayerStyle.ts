import { StyleSheet } from 'react-native';
import { Theme } from '../../../redux';
import {
  Colors,
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../../theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].backgroundColor,
    },
    videoView: {
      position: 'relative',
    },
    backgroundVideo: {
      width: '100%',
      height: verticalScale(270),
      backgroundColor: Colors[theme].commonblack,
    },
    potraitBackgroundVideo: {
      width: height,
      height: width,
      backgroundColor: Colors[theme].commonblack,
    },
    controlContainer: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: horizontalScale(16),
      height: verticalScale(270),
      backgroundColor: Colors[theme].blackTransparent,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    potraitControlContainer: {
      position: 'absolute',
      width: height,
      paddingHorizontal: horizontalScale(16),
      height: width,
      backgroundColor: Colors[theme].blackTransparent,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    topControlContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    middleControlContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pause: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: horizontalScale(200),
      marginLeft: 'auto',
    },
    volumeContainer: {
      marginLeft: 'auto',
      alignItems: 'flex-end',
    },
    sliderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    slider: {
      flex: 1,
      marginHorizontal: horizontalScale(4),
    },
    durationText: {
      color: Colors[theme].commonWhite,
      fontSize: moderateScale(14),
    },
    bottomControlContainer: {
      width: '100%',
    },
  });

export default styles;
