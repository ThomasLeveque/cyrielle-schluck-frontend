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
    xxlSpace: 145,
    xlSpace: 90,
    lSpace: 50,
    mSpace: 40,
    xSpace: 30,
    xsSpace: 20,
    gridGap: 20,
    bodyFontSize: 16,
    appMaxWidth: 1440,
    topLayoutPadding: 150,
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '992px',
    lgDesktop: '1200px',
    maxDesktop: '1440px',
  },
};

export { myTheme };
