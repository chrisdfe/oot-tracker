import React from "react";

type HeartPiece = {
  number: string;
  location: string;
  conditions: string;
  directions: string;
  imageUrl: string;
};

export interface Props {
  heartPiece: HeartPiece;
  hasBeenCollected: boolean;
  onToggleCollected: (heartPiece: HeartPiece) => void;
}

const HeartPiece = ({
  heartPiece,
  hasBeenCollected,
  onToggleCollected
}: Props) => {
  return (
    <div>
      <h2>Heart Piece #{heartPiece.number}</h2>

      <h3>location</h3>
      <p>{heartPiece.location}</p>

      <h3>conditions</h3>
      <p>{heartPiece.conditions}</p>

      <h3>directions</h3>
      <p>{heartPiece.directions}</p>

      <button
        onClick={() => {
          onToggleCollected(heartPiece);
        }}
      >
        {hasBeenCollected ? "uncollect" : "collect"}
      </button>
    </div>
  );
};

export default HeartPiece;
