import React, { ReactNode, createContext } from "react";

import heartPieces from "../data/build/heartPieces.json";
import goldSkulltulas from "../data/build/goldSkulltulas.json";
import softSoilLocations from "../data/build/softSoilLocations.json";
import greatFairyFountains from "../data/build/greatFairyFountains.json";
import locations from "../data/build/locations.json";
import regions from "../data/build/regions.json";

import { HeartPiece } from "../data/types/HeartPiece";
import { GoldSkulltula } from "../data/types/GoldSkulltula";
import { SoftSoilLocation } from "../data/types/SoftSoilLocation";
import { GreatFairyFountain } from "../data/types/GreatFairyFountain";
import { GameLocation } from "../data/types/GameLocation";
import { Region } from "../data/types/Region";

interface Props {
  children: ReactNode;
}

export type AppData = {
  heartPieces: HeartPiece[];
  goldSkulltulas: GoldSkulltula[];
  softSoilLocations: SoftSoilLocation[];
  greatFairyFountains: GreatFairyFountain[];
  locations: GameLocation[];
  regions: Region[];
};

const data: AppData = {
  heartPieces,
  goldSkulltulas,
  locations,
  softSoilLocations,
  greatFairyFountains,
  regions
};

export const AppDataContext = createContext<AppData>(data);

const AppData = ({ children }: Props) => {
  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export default AppData;
