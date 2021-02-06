import {Dimensions} from 'react-native';

const {width, height, scale} = Dimensions.get('window');
export const dimensions = {width, height, scale};

const metrics = {
  screenWidth: (width < height ? width : height) * scale,
  screenHeight: (width < height ? height : width) * scale,
  icons: {
    tiny: 15,
    small: 20,
    menu: 24,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    thumbnail: 92,
    huge: 128,
    logo: 200,
  },
};

export default metrics;
