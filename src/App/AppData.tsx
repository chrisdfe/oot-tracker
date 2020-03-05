import React, { ReactNode, createContext } from "react";

import heartPieces from "../data/build/heartPieces.json";
import goldSkulltulas from "../data/build/goldSkulltulas.json";
import locations from "../data/build/locations.json";
import softSoilLocations from "../data/build/softSoilLocations.json";

import { HeartPiece } from "../data/types/HeartPiece";
import { GoldSkulltula } from "../data/types/GoldSkulltula";
import { SoftSoilLocation } from "../data/types/SoftSoilLocation";
import { GameLocation } from "../data/types/GameLocation";

interface Props {
  children: ReactNode;
}

export type AppData = {
  heartPieces: HeartPiece[];
  goldSkulltulas: GoldSkulltula[];
  softSoilLocations: SoftSoilLocation[];
  locations: GameLocation[];
};

const data: AppData = {
  heartPieces,
  goldSkulltulas,
  locations: locations.map(location => location as GameLocation),
  softSoilLocations
};

export const AppDataContext = createContext<AppData>(data);

const AppData = ({ children }: Props) => {
  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export default AppData;
