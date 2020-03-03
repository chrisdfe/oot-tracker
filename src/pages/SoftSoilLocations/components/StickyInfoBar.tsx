import React, { useContext } from "react";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

import StickyInfoBar from "../../../components/StickyInfoBar";
import Button from "../../../components/Button";

const SoftSoilLocationsStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  // @ts-ignore
  const { softSoilLocations } = appData;

  const {
    collectedSoftSoilLocations,
    setCollectedSoftSoilLocations
    // @ts-ignore
  } = appState.softSoilLocations;

  return (
    <StickyInfoBar
      headingText={`soft soil locations: ${collectedSoftSoilLocations.length}/
              ${softSoilLocations.length}`}
    >
      <Button
        onClick={() => {
          setCollectedSoftSoilLocations(
            // @ts-ignore
            softSoilLocations.map(
              // @ts-ignore
              softSoilLocation => softSoilLocation.number
            )
          );
        }}
      >
        collect all
      </Button>
      <Button
        onClick={() => {
          setCollectedSoftSoilLocations([]);
        }}
      >
        uncollect all
      </Button>
    </StickyInfoBar>
  );
};

export default SoftSoilLocationsStickyInfoBar;
