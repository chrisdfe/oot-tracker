import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import padNumber from "../../../../utils/padNumber";

export interface Props {
  heartPiece: HeartPiece;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HeartPieceListItem = ({ heartPiece }: Props) => {
  const imageSrc = require(`../../../../images/build/${
    heartPiece.images[0].localImageUrl
  }`);

  const appState = useContext(AppStateContext);

  const {
    collectedHearts,
    toggleCollectedHeart
    // @ts-ignore
  } = appState.heartPieces;

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
          <strong>#{padNumber(heartPiece.number)}</strong>&nbsp;
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
