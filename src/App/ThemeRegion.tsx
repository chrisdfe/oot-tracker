import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./Theme";
import { RegionName } from "../data/types/GameLocation";

interface Props {
  region: RegionName;
  children: ReactNode;
}

const getTheme = (region: string, theme: any): AppTheme => {
  const matchingRegion = theme.regions[region];
  if (matchingRegion) {
    return { ...theme, ...matchingRegion };
  }
  return theme;
};

const ThemeRegion = ({ region, children }: Props) => {
  return (
    <ThemeProvider theme={(theme: AppTheme) => getTheme(region, theme)}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegion;
