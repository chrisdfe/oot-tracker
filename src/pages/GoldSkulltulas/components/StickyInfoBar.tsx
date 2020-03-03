import React, { useContext } from "react";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import StickyInfoBar from "../../../components/StickyInfoBar";
import Button from "../../../components/Button";

const GoldSkulltulaStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  // @ts-ignore
  const { goldSkulltulas } = appData;

  const {
    collectedGoldSkulltulas,
    setCollectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  return (
    <StickyInfoBar
      headingText={`${collectedGoldSkulltulas.length}/
              ${goldSkulltulas.length} gold skulltulas`}
    >
      {/*      <Button
        onClick={() => {
          setCollectedGoldSkulltulas(
            // @ts-ignore
            goldSkulltulas.map(goldSkulltula => goldSkulltula.number)
          );
        }}
      >
        collect all
      </Button>
      <Button
        onClick={() => {
          setCollectedGoldSkulltulas([]);
        }}
      >
        uncollect all
      </Button>*/}
    </StickyInfoBar>
  );
};

export default GoldSkulltulaStickyInfoBar;
