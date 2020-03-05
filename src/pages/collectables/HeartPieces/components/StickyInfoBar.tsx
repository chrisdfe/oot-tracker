import React, { useContext } from "react";

import { AppDataContext } from "../../../../App/AppData";
import { AppStateContext } from "../../../../App/AppState";

import StickyInfoBar from "../../../../components/StickyInfoBar";

const HeartPiecesStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { heartPieces } = appData;

  const { collectedHearts } = appState.heartPieces;

  return (
    <StickyInfoBar
      headingText={`${collectedHearts.length}/${
        heartPieces.length
      } heart pieces`}
    />
  );
};

export default HeartPiecesStickyInfoBar;
