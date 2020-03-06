import React, { useContext } from "react";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import padNumber from "../../../../utils/padNumber";
import fetchedImagesToRenderedImages from "../../../../utils/fetchedImagesToRenderedImages";

import { HeartPiece } from "../../../../data/types/HeartPiece";

export interface Props {
  heartPiece: HeartPiece;
}

const HeartPieceListItem = ({ heartPiece }: Props) => {
  const appState = useContext(AppStateContext);

  const images = fetchedImagesToRenderedImages(heartPiece.images);

  const { collectedHearts, toggleCollectedHeart } = appState.heartPieces;

  const hasBeenCollected = collectedHearts.includes(heartPiece.number);

  return (
    <CollectableDetail
      hasBeenCollected={hasBeenCollected}
      onToggleCollected={() => {
        toggleCollectedHeart(heartPiece.number);
      }}
      thumbnails={images}
      images={images}
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
