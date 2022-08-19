import 'styled-components';


type ThemeValueMap = {
  [name: string]: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      color: {
        primary: string;
        secondary: string;
      };
    };
    text: {
      color: {
        primary: string;
      };
    };
    fonts: {
      heading: string,
      body: string,
    },
    border: {
      color: {
        primary: string;
        secondary: string;
      };
    };
    rawFonts: ThemeValueMap,
    rawColors: ThemeValueMap,
  }
}