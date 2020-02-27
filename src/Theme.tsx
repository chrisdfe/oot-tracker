import React, { ReactNode, createContext } from "react";

import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const colors = {
  white: "#fff",
  // caper: "#d1e9b9",
  caper: "#dce8c9",
  // killarney: "#366a45"
  killarney: "#2f5e42",
  kellyGreen: "#22d07a"
};

const margin = {};

const theme = {
  rawColors: colors,
  background: {
    color: {
      primary: colors.caper,
      secondary: colors.white
    }
  },
  text: {
    color: {
      primary: colors.killarney
    }
  },
  border: {
    color: {
      primary: colors.killarney
    }
  },
  interactive: {
    color: {
      primary: colors.kellyGreen
    }
  }
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
