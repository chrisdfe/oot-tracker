import React, { ReactNode, createContext } from "react";

import usePersistedStringArray from "../utils/usePersistedStringArray";

interface Props {
  children: ReactNode;
}

export type AppState = {
  heartPieces: {
    collectedHearts: string[];
    setCollectedHearts: (heartIds: string[]) => void;
    toggleCollectedHeart: (heartId: string) => void;
  };
  goldSkulltulas: {
    collectedGoldSkulltulas: string[];
    setCollectedGoldSkulltulas: (goldSkulltulaIds: string[]) => void;
    toggleCollectedGoldSkulltula: (goldSkulltulaId: string) => void;
  };
  softSoilLocations: {
    collectedSoftSoilLocations: string[];
    setCollectedSoftSoilLocations: (softSoilLocationIds: string[]) => void;
    toggleCollectedSoftSoilLocation: (softSoilLocationId: string) => void;
  };
  greatFairyFountains: {
    collectedGreatFairyFountains: string[];
    setCollectedGreatFairyFountains: (greatFairyFountainIds: string[]) => void;
    toggleCollectedGreatFairyFountain: (greatFairyFountainId: string) => void;
  };
};

const initialState = {
  heartPieces: {
    collectedHearts: [],
    setCollectedHearts: () => {},
    toggleCollectedHeart: () => {}
  },
  goldSkulltulas: {
    collectedGoldSkulltulas: [],
    setCollectedGoldSkulltulas: () => {},
    toggleCollectedGoldSkulltula: () => {}
  },
  softSoilLocations: {
    collectedSoftSoilLocations: [],
    setCollectedSoftSoilLocations: () => {},
    toggleCollectedSoftSoilLocation: () => {}
  },
  greatFairyFountains: {
    collectedGreatFairyFountains: [],
    setCollectedGreatFairyFountains: () => {},
    toggleCollectedGreatFairyFountain: () => {}
  }
};

export const AppStateContext = createContext<AppState>(initialState);

const AppState = ({ children }: Props) => {
  const [
    collectedHearts,
    setCollectedHearts,
    toggleCollectedHeart
  ] = usePersistedStringArray("oot-tracker.collected-heart-pieces", []);

  const [
    collectedGoldSkulltulas,
    setCollectedGoldSkulltulas,
    toggleCollectedGoldSkulltula
  ] = usePersistedStringArray("oot-tracker.collected-gold-skulltulas", []);

  const [
    collectedSoftSoilLocations,
    setCollectedSoftSoilLocations,
    toggleCollectedSoftSoilLocation
  ] = usePersistedStringArray("oot-tracker.collected-soft-soil-locations", []);

  const [
    collectedGreatFairyFountains,
    setCollectedGreatFairyFountains,
    toggleCollectedGreatFairyFountain
  ] = usePersistedStringArray(
    "oot-tracker.collected-great-fairy-fountains",
    []
  );

  const state: AppState = {
    heartPieces: {
      collectedHearts,
      setCollectedHearts,
      toggleCollectedHeart
    },
    goldSkulltulas: {
      collectedGoldSkulltulas,
      setCollectedGoldSkulltulas,
      toggleCollectedGoldSkulltula
    },
    softSoilLocations: {
      collectedSoftSoilLocations,
      setCollectedSoftSoilLocations,
      toggleCollectedSoftSoilLocation
    },
    greatFairyFountains: {
      collectedGreatFairyFountains,
      setCollectedGreatFairyFountains,
      toggleCollectedGreatFairyFountain
    }
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
