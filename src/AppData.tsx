import React, { ReactNode, createContext } from "react";

import heartPieces from "./data/heartPieces.json";
import goldSkulltulas from "./data/goldSkulltulas.json";
import locations from "./data/locations.json";

export const AppDataContext = createContext({});

interface Props {
  children: ReactNode;
}

const AppData = ({ children }: Props) => {
  const data = {
    heartPieces,
    goldSkulltulas,
    locations
  };

  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export default AppData;
