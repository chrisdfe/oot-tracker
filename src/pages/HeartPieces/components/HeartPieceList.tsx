import React from "react";
import styled from "styled-components";

import HeartPieceListItem from "./HeartPieceListItem";

interface Props {
  heartPieces: HeartPiece[];
  collectedHearts: string[];
  onToggleCollected: (heartPiece: HeartPiece) => void;
  locationWhitelist?: HeartPieceLocations;
}

const HeartPieceListWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPieceList = ({
  heartPieces,
  collectedHearts,
  onToggleCollected,
  locationWhitelist
}: Props) => {
  const filteredHeartPieces = locationWhitelist
    ? heartPieces.filter(({ location }) => locationWhitelist.includes(location))
    : heartPieces;

  return (
    <HeartPieceListWrapper>
      {locationWhitelist && (
        <h4>
          Showing {filteredHeartPieces.length} hearts ({heartPieces.length}{" "}
          total)
        </h4>
      )}
      {filteredHeartPieces.map(heartPiece => (
        <HeartPieceListItem
          key={heartPiece.number}
          heartPiece={heartPiece}
          hasBeenCollected={collectedHearts.includes(heartPiece.number)}
          onToggleCollected={heartPiece => {
            onToggleCollected(heartPiece);
          }}
        />
      ))}
    </HeartPieceListWrapper>
  );
};

export default HeartPieceList;
