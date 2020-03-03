import React, { useContext } from "react";

import { AppDataContext } from "../../../../App/AppData";
import { AppStateContext } from "../../../../App/AppState";

import StickyInfoBar from "../../../../components/StickyInfoBar";
import Button from "../../../../components/Button";

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
      headingText={`${collectedSoftSoilLocations.length}/
              ${softSoilLocations.length} soft soil locations`}
    >
      {/*      <Button
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
      </Button>*/}
    </StickyInfoBar>
  );
};

export default SoftSoilLocationsStickyInfoBar;
