import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./Theme";

interface Props {
  regionSlug: string;
  children: ReactNode;
}

const getTheme = (regionSlug: string, theme: any): AppTheme => {
  const matchingRegion = theme.regions[regionSlug];
  if (matchingRegion) {
    return { ...theme, ...matchingRegion };
  }
  return theme;
};

const ThemeRegion = ({ regionSlug, children }: Props) => {
  return (
    <ThemeProvider theme={(theme: AppTheme) => getTheme(regionSlug, theme)}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegion;
