import React from "react";
import styled from "styled-components";

import HeartPiece from "./HeartPiece";

interface Props {
  heartPieces: HeartPiece[];
  collectedHearts: string[];
  locationWhitelist: HeartPieceLocations;
  onToggleCollected: (heartPiece: HeartPiece) => void;
}

const HeartPieceListWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPieceList = ({
  heartPieces,
  locationWhitelist,
  collectedHearts,
  onToggleCollected
}: Props) => {
  const filteredHeartPieces = heartPieces.filter(({ location }) =>
    locationWhitelist.includes(location)
  );

  return (
    <HeartPieceListWrapper>
      <h4>
        Showing {filteredHeartPieces.length} hearts ({heartPieces.length} total)
      </h4>
      {filteredHeartPieces.map(heartPiece => (
        <HeartPiece
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
