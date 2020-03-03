import React, { ReactNode, useContext } from "react";
import { ThemeContext, createGlobalStyle } from "styled-components";

import "normalize.css";

interface Props {
  children: ReactNode;
}

const AppGlobalStyles = ({ children }: Props) => {
  const theme = useContext(ThemeContext);

  const GlobalStyles = createGlobalStyle`
    :root {
      font-size: 16px;
    }

    body {
      background-color: ${theme.background.color.primary};
      font-family: ${theme.fonts.body};
      color: ${theme.text.color.primary};
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
      font-weight: 800;
      line-height: 1.2em;
      letter-spacing: 0.015em;
    }

    h1 {
      font-size: 4.1rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      line-height: 2.2em;
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
