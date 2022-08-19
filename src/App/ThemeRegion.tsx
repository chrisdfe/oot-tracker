import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themeRegionMap } from "./Theme";
import { RegionKey } from 'data/types/Region';

interface Props {
  regionKey?: RegionKey;
  children: ReactNode;
}

const ThemeRegion = ({ regionKey = RegionKey.overworld, children }: Props) => {
  return (
    <ThemeProvider theme={() => themeRegionMap[regionKey]}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegion;
