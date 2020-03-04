import React, { useContext } from "react";

import { AppDataContext } from "../../../../App/AppData";
import { AppStateContext } from "../../../../App/AppState";

import StickyInfoBar from "../../../../components/StickyInfoBar";

const GoldSkulltulaStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { goldSkulltulas } = appData;

  const {
    collectedGoldSkulltulas,
    setCollectedGoldSkulltulas
  } = appState.goldSkulltulas;

  return (
    <StickyInfoBar
      headingText={`${collectedGoldSkulltulas.length}/
              ${goldSkulltulas.length} gold skulltulas`}
    />
  );
};

export default GoldSkulltulaStickyInfoBar;
