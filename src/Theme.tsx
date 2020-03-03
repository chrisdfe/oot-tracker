import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const rawColors = {
  white: "#fff",
  // caper: "#d1e9b9",
  // caper: "#dce8c9",
  caper: "#e1e5da",
  // killarney: "#366a45"
  killarney: "#2f5e42",
  kellyGreen: "#22d07a"
};

const rawFonts = {
  merriweather: "Merriweather, sans-serif",
  openSans: "'Open Sans', sans-serif"
};

const theme = {
  rawColors,
  rawFonts,

  fonts: {
    heading: rawFonts.merriweather,
    body: rawFonts.openSans
  },

  background: {
    color: {
      primary: rawColors.caper,
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: rawColors.killarney
    }
  },
  border: {
    color: {
      primary: rawColors.killarney
    }
  },
  interactive: {
    color: {
      primary: rawColors.kellyGreen
    }
  }
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
