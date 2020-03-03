import React, { useContext } from "react";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

import StickyInfoBar from "../../../components/StickyInfoBar";
import Button from "../../../components/Button";

const HeartPiecesStickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  // @ts-ignore
  const { heartPieces } = appData;

  const {
    collectedHearts,
    setCollectedHearts
    // @ts-ignore
  } = appState.heartPieces;
  return (
    <StickyInfoBar
      headingText={`${collectedHearts.length}/${
        heartPieces.length
      } heart pieces`}
    >
      {/*      <Button
        onClick={() => {
          setCollectedHearts(
            // @ts-ignore
            heartPieces.map(heartPiece => heartPiece.number)
          );
        }}
      >
        collect all
      </Button>
      <Button
        onClick={() => {
          setCollectedHearts([]);
        }}
      >
        uncollect all
      </Button>*/}
    </StickyInfoBar>
  );
};

export default HeartPiecesStickyInfoBar;
