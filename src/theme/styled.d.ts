// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      myBlack: string;
      myWhite: string;
      gray: string;
      lightGray: string;
      mainColor: string;
    };
    fonts: {
      mainFont: string;
      secondaryFont: string;
    };
    vars: {
      footerHeight: number;
      footerBorderSize: number;
      lSpace: number;
      mSpace: number;
      bodyFontSize: number;
    };
  }
}
