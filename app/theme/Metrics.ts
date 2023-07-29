import { Dimensions, Platform, type ScaledSize } from 'react-native';

/**
 * Get the width and height of the device screen
 * @returns {ScaledSize} - the width and height of device screen
 */
let { width, height }: ScaledSize = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}

const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

/**
 * Converts provided width to based on provided guideline size width.
 * @param {number} size the screen's widdth that UI element should cover
 * @returns {number} the calculated scale depending on current device's screen width
 */
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

/**
 * Converts provided height to based on provided guideline size height.
 * @param {number} size the screen's height that UI element should cover
 * @returns {number} the calculated scale depending on current device's screen height
 */
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

/**
 * Converts provided width to based on provided guideline size width.
 * @param {number} size - The size of the font you want to scale
 * @param {number} [factor=0.5] - The amount of scaling to apply to font sizes. Defaults to 0.5
 * @returns {number} The calculated moderate scale depending on currrent device's screen width
 */
const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

/**
 *type that contain the global metrics for current devices
 */
const globalMetrics: {
  isAndroid: boolean;
  isIos: boolean;
  isPad: boolean;
  isTv: boolean;
} = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTv: Platform.isTV,
};

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  globalMetrics,
  width,
  height,
};
