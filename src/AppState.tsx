import React, { ReactNode, createContext } from "react";

export const AppStateContext = createContext({});

interface Props {
  children: ReactNode;
}

const AppState = ({ children }: Props) => {
  return (
    <AppStateContext.Provider value={{ test: "message" }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
