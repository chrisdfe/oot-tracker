import React, { ReactNode } from "react";

import AppData from "./AppData";
import AppState from "./AppState";
import Theme from "./Theme";

interface Props {
  children: ReactNode;
}

const AppContainer = ({ children }: Props) => {
  return (
    <AppData>
      <AppState>
        <Theme>{children}</Theme>
      </AppState>
    </AppData>
  );
};

export default AppContainer;
