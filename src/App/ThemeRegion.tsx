import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export type RegionName =
  | "default"
  | "zora"
  | "kokiri"
  | "goron"
  | "shadow"
  | "gerudo";

interface Props {
  region: RegionName;
  children: ReactNode;
}

const getTheme = (region: string, theme: any) => {
  const matchingRegion = theme.regions[region];
  if (matchingRegion) {
    return { ...theme, ...matchingRegion };
  }
  return theme;
};

const ThemeRegion = ({ region, children }: Props) => {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme => getTheme(region, theme)}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegion;
