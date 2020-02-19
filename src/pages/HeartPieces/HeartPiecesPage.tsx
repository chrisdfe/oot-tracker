import React from "react";

import usePersistedState from "../../utils/usePersistedState";
import heartPieces from "../../data/heartPieces.json";

import HeartPiece from "./components/HeartPiece";

const LOCAL_STORAGE_HEART_PIECES_KEY = "oot-tracker.collected-heart-pieces";

const HeartPiecesPage = () => {
  const [collectedHearts, setCollectedHearts] = usePersistedState<string[]>(
    LOCAL_STORAGE_HEART_PIECES_KEY,
    []
  );

  const heartHasBeenCollected = (heartPiece: HeartPiece) =>
    collectedHearts.includes(heartPiece.number);

  const addCollectedHeart = (heartPiece: HeartPiece) => {
    setCollectedHearts([...collectedHearts, heartPiece.number]);
  };

  const removeCollectedHeart = (targetHeartPiece: HeartPiece) => {
    const filteredHearts = collectedHearts.filter(
      (heartNumber: string) => heartNumber !== targetHeartPiece.number
    );
    setCollectedHearts(filteredHearts);
  };

  const toggleCollectedHeart = (targetHeartPiece: HeartPiece) => {
    if (heartHasBeenCollected(targetHeartPiece)) {
      removeCollectedHeart(targetHeartPiece);
    } else {
      addCollectedHeart(targetHeartPiece);
    }
  };

  return (
    <div className="HeartPiecesPage">
      <h1>
        {collectedHearts.length}/{heartPieces.length}
      </h1>

      {heartPieces.map(heartPiece => (
        <HeartPiece
          heartPiece={heartPiece}
          hasBeenCollected={heartHasBeenCollected(heartPiece)}
          onToggleCollected={heartPiece => {
            toggleCollectedHeart(heartPiece);
          }}
        />
      ))}
    </div>
  );
};

export default HeartPiecesPage;
