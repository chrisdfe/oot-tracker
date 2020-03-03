import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";

export interface Props {
  heartPiece: HeartPiece;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({ heartPiece }: Props) => {
  const imageSrc = require(`../../../data/images/${heartPiece.localImageUrl}`);

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
      <Paragraph>
        <strong>conditions:</strong> {heartPiece.conditions}
      </Paragraph>

      {heartPiece.directions.split("\n").map((paragraph, index) => (
        <Paragraph key={`paragraph-${index}`}>{paragraph}</Paragraph>
      ))}
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
