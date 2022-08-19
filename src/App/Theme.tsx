import React, { ReactNode } from "react";
import { defaultsDeep } from "lodash-es";

import { DefaultTheme, ThemeProvider } from "styled-components";
import { RegionKey } from "data/types/Region";

import hexToRGB from "../utils/hexToRGB";

interface Props {
  children: ReactNode;
}

export const rawColors = {
  white: "#ffffff",
  caper: "#e1e5da",
  killarney: "#2f5e42",
  kellyGreen: "#22d07a",
};

export const rawFonts = {
  merriweather: "Merriweather, sans-serif",
  openSans: "'Open Sans', sans-serif",
  lora: "'Lora', serif",
  spaceMono: "'Space Mono', monospace",
};

const baseTheme = {
  fonts: {
    heading: rawFonts.lora,
    body: rawFonts.spaceMono
  },
  rawColors,
  rawFonts,
};

export const overworldTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: rawColors.white,
      secondary: "#eaecef",
    },
  },
  text: {
    color: {
      primary: "#2A3854",
    },
  },
  border: {
    color: {
      primary: "#2A3854",
      secondary: hexToRGB("#2A3854", 0.2),
    },
  },
}, baseTheme);

export const zoraTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: "#d7e5ed",
      secondary: "#d7e5edaa",
    },
  },
  text: {
    color: {
      primary: "#08466e",
    },
  },
  border: {
    color: {
      primary: "#08466e",
      secondary: hexToRGB("#08466e", 0.2),
    },
  },
}, baseTheme);

export const kokiriTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: rawColors.caper,
      secondary: hexToRGB(rawColors.caper, 0.5),
    },
  },
  text: {
    color: {
      primary: rawColors.killarney,
    },
  },
  border: {
    color: {
      primary: rawColors.killarney,
      secondary: hexToRGB(rawColors.killarney, 0.2),
    },
  },
}, baseTheme);

export const goronTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: "#e5cccc",
      secondary: "#e5ccccaa",
    },
  },
  text: {
    color: {
      primary: "#c13540",
    },
  },
  border: {
    color: {
      primary: "#c13540",
      secondary: hexToRGB("#c13540", 0.2),
    },
  },
}, baseTheme);

export const shadowTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: "#dddce5",
      secondary: "#dddce5aa",
    },
  },
  text: {
    color: {
      primary: "#635566",
    },
  },
  border: {
    color: {
      primary: "#635566",
      secondary: hexToRGB("#635566", 0.2),
    },
  },
}, baseTheme);

export const gerudoTheme: DefaultTheme = defaultsDeep({
  background: {
    color: {
      primary: "#FBDEC6",
      secondary: "#FBDEC6aa",
    },
  },
  text: {
    color: {
      primary: "#E5555E",
    },
  },
  border: {
    color: {
      primary: "#E5555E",
      secondary: hexToRGB("#E5555E", 0.2),
    },
  },
}, baseTheme);

export type ThemeRegionMap = { [key in RegionKey]: DefaultTheme };

export const themeRegionMap = {
  overworld: overworldTheme,
  zora: zoraTheme,
  kokiri: kokiriTheme,
  goron: goronTheme,
  shadow: shadowTheme,
  gerudo: gerudoTheme,
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={overworldTheme}>{children}</ThemeProvider>;
};

export default Theme;
