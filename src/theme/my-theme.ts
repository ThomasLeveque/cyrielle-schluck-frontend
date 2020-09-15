import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    myBlack: '#161616',
    myWhite: '#F2F2F2',
    gray: '#9B9B9B',
    lightGray: '#F2F2F2',
    mainColor: '#BA6751',
  },
  fonts: {
    mainFont: "'Libre Franklin', sans-serif",
    secondaryFont: "'Libre Baskerville', serif",
  },
  vars: {
    footerHeight: 60,
    footerBorderSize: 4,
    lSpace: 90,
    mSpace: 50,
    bodyFontSize: 16,
    appMaxWidth: 1440,
  },
};

export { myTheme };
