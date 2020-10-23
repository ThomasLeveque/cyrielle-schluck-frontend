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
      homeInfosDesktopWidth: string;
      footerHeight: number;
      footerBorderSize: number;
      xxlSpace: number;
      xlSpace: number;
      lSpace: number;
      mSpace: number;
      sSpace: number;
      xsSpace: number;
      gridGap: number;
      bodyFontSize: number;
      appMaxWidth: number;
      topLayoutPadding: number;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      lgDesktop: string;
      maxDesktop: string;
    };
  }
}
