import React, { useContext } from "react";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import padNumber from "../../../../utils/padNumber";

import { HeartPiece } from "../../../../data/types/HeartPiece";

export interface Props {
  heartPiece: HeartPiece;
}

const HeartPieceListItem = ({ heartPiece }: Props) => {
  const imageSrc = require(`../../../../images/build/${
    heartPiece.images[0].localImageUrl
  }`);

  const appState = useContext(AppStateContext);

  const { collectedHearts, toggleCollectedHeart } = appState.heartPieces;

  const hasBeenCollected = collectedHearts.includes(heartPiece.number);

  return (
    <CollectableDetail
      hasBeenCollected={hasBeenCollected}
      onToggleCollected={() => {
        toggleCollectedHeart(heartPiece.number);
      }}
      thumbnails={[imageSrc]}
      images={[imageSrc]}
      heading={
        <>
          <strong>#{padNumber(heartPiece.number, 2)}</strong>&nbsp;
          {heartPiece.location}
        </>
      }
    >
      <TitledParagraph
        title="conditions"
        paragraphs={[heartPiece.conditions]}
      />

      <TitledParagraph
        title="directions"
        paragraphs={heartPiece.directions.split("\n")}
      />
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
