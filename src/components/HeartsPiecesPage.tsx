import React from "react";

import usePersistedState from "../utils/usePersistedState";
import heartPieces from "../data/heartPieces.json";

const LOCAL_STORAGE_HEART_PIECES_KEY = "oot-tracker.collected-heart-pieces";

function App() {
  const [collectedHearts, setCollectedHearts] = usePersistedState<string[]>(
    LOCAL_STORAGE_HEART_PIECES_KEY,
    []
  );

  const addCollectedHeart = (heartNumber: string) => {
    setCollectedHearts([...collectedHearts, heartNumber]);
  };

  const removeCollectedHeart = (targetHeartNumber: string) => {
    const filteredHearts = collectedHearts.filter(
      (heartNumber: string) => heartNumber !== targetHeartNumber
    );
    setCollectedHearts(filteredHearts);
  };

  const toggleCollectedHeart = (number: string) => {
    if (collectedHearts.includes(number)) {
      removeCollectedHeart(number);
    } else {
      addCollectedHeart(number);
    }
  };

  return (
    <div className="App">
      <h1>
        {collectedHearts.length}/{heartPieces.length}
      </h1>

      {heartPieces.map(heartPiece => (
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
              toggleCollectedHeart(heartPiece.number);
            }}
          >
            I got this one.
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
