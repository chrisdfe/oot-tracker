import React, { ReactNode, useContext } from "react";
import { useTheme, createGlobalStyle } from "styled-components";

import "normalize.css";

interface Props {
  children: ReactNode;
}

const AppGlobalStyles = ({ children }: Props) => {
  const theme = useTheme();

  const GlobalStyles = createGlobalStyle`
    :root {
      font-size: 16px;
    }

    body {
      background-color: ${theme.background.color.primary};
      font-family: ${theme.fonts.body};
      color: ${theme.text.color.primary};
      overflow-y:scroll;
    }

    // TODO- heading component instead of this
    h1,
    h2,
    h3 {
      font-family: ${theme.fonts.heading};
    }

    h1,
    h2,
    h3 {
      font-weight: 400;
      line-height: 1.2em;
      letter-spacing: 0.015em;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 14px;
      font-weight: 600;
    }

    p {
      line-height: 1.6em;
      font-size: 14px;
    }

    a {
color: ${theme.text.color.primary};
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
