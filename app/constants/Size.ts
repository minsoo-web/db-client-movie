import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const XD_WIDTH = 375;
const XD_HEIGHT = 857;

export const vw = (width: number) => {
  const percentage = (width / XD_WIDTH) * 100;

  return responsiveWidth(percentage);
};

export const vh = (height: number) => {
  const percentage = (height / XD_HEIGHT) * 100;

  return responsiveHeight(percentage);
};
