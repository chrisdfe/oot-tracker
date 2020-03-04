import React, { ReactNode, createContext } from "react";

import heartPieces from "../data/build/heartPieces.json";
import goldSkulltulas from "../data/build/goldSkulltulas.json";
import locations from "../data/build/locations.json";
import softSoilLocations from "../data/build/softSoilLocations.json";

export const AppDataContext = createContext({});

interface Props {
  children: ReactNode;
}

const AppData = ({ children }: Props) => {
  const data = {
    heartPieces,
    goldSkulltulas,
    locations,
    softSoilLocations
  };

  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export default AppData;
