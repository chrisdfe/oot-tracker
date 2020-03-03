import React, { ReactNode, createContext } from "react";

import usePersistedStringArray from "../utils/usePersistedStringArray";

export const AppStateContext = createContext({});

interface Props {
  children: ReactNode;
}

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
    // @ts-ignore
  ] = usePersistedStringArray("oot-tracker.collected-gold-skulltulas", []);

  const [
    collectedSoftSoilLocations,
    setCollectedSoftSoilLocations,
    toggleCollectedSoftSoilLocation
    // @ts-ignore
  ] = usePersistedStringArray("oot-tracker.collected-soft-soil-locations", []);

  const state = {
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
    }
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
