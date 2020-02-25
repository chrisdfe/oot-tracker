import React, { ReactNode, useContext } from "react";
import { ThemeContext, createGlobalStyle } from "styled-components";

import AppData from "./AppData";
import AppState from "./AppState";
import Theme from "./Theme";

interface Props {
  children: ReactNode;
}

const AppGlobalStyles = ({ children }: Props) => {
  const theme = useContext(ThemeContext);

  const GlobalStyles = createGlobalStyle`
    * {
      // font-family: 'Source Code Pro';
      font-family: 'Merriweather', serif;
      color: ${theme.text.color.primary};
    }

    body {
      background-color: ${theme.background.color.primary};
    }
  `;

  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default AppGlobalStyles;
