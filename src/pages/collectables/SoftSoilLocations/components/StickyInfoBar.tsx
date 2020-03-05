import React, { useContext } from "react";

import { AppDataContext } from "../../../../App/AppData";
import { AppStateContext } from "../../../../App/AppState";

import StickyInfoBar from "../../../../components/StickyInfoBar";

const SoftSoilLocationsStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { softSoilLocations } = appData;

  const { collectedSoftSoilLocations } = appState.softSoilLocations;

  return (
    <StickyInfoBar
      headingText={`${collectedSoftSoilLocations.length}/
              ${softSoilLocations.length} soft soil locations`}
    />
  );
};

export default SoftSoilLocationsStickyInfoBar;
