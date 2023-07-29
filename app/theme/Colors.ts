const themeColors = {
  transparent: 'transparent',
  dark: '#1E232C',
  red: '#FE2A2B',
  lightGrey: '#AAABAB',
  offWhite: '#E8ECF4',
  orange: '#F67146',
  commonWhite: '#ffffff',
  green: '#18CE97',
  commonblack: '#000000',
  blackTransparent: '#181919aa',
};

const commonColors = {
  white: '#ffffff',
  black: '#000000',
  transparentBlack: '#00000000',
  transparentWhite: '#FFFFFF00',
  darkBackground: '#182B3E',
  secondaryDarkBackground: '#1C232E',
};

const light = {
  ...themeColors,
  white: commonColors.white,
  black: commonColors.black,
  transparentBlack: commonColors.transparentBlack,
  transparentWhite: commonColors.transparentWhite,
  backgroundColor: commonColors.white,
  secondaryBackground: themeColors.offWhite,
};

const dark = {
  ...themeColors,
  white: commonColors.black,
  black: commonColors.white,
  transparentBlack: commonColors.transparentWhite,
  transparentWhite: commonColors.transparentBlack,
  backgroundColor: commonColors.darkBackground,
  secondaryBackground: commonColors.secondaryDarkBackground,
};

export default { light, dark };
