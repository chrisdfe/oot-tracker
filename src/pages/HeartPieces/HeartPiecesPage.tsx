import React from "react";
import styled from "styled-components";

import usePersistedState from "../../utils/usePersistedState";
import allHeartPieces from "../../data/heartPieces.json";

import HeartPieceList from "./components/HeartPieceList";
import FiltersBar from "./components/FiltersBar";
import StickyInfoBar from "./components/StickyInfoBar";

const heartPieceLocations = allHeartPieces
  .reduce<HeartPieceLocations>((acc, { location }) => {
    if (!acc.includes(location)) {
      return [...acc, location];
    }
    return acc;
  }, [])
  // Alphebetize
  .sort((a, b) => a.localeCompare(b));

function usePersistedStringArray(
  key: string,
  defaultValue: string[]
): [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  (targetValue: string) => void
] {
  const [value, setValue] = usePersistedState<string[]>(key, defaultValue);

  const addValue = (newElement: string) => {
    setValue([...value, newElement]);
  };

  const removeValue = (elementToRemove: string) => {
    const filteredValue = value.filter(
      (currentValue: string) => currentValue !== elementToRemove
    );
    setValue(filteredValue);
  };

  const toggleValue = (targetValue: string) => {
    if (value.includes(targetValue)) {
      removeValue(targetValue);
    } else {
      addValue(targetValue);
    }
  };

  return [value, setValue, toggleValue];
}

const HeartPiecesPage = () => {
  const [
    collectedHearts,
    setCollectedHearts,
    toggleCollectedHeart
  ] = usePersistedStringArray("oot-tracker.collected-heart-pieces", []);

  const [
    heartPieceLocationsWhitelist,
    setHeartPieceLocationsWhitelist,
    toggleHeartPieceLocationWhitelist
  ] = usePersistedStringArray("oot-tracker.heart-pieces-location-filter", [
    ...heartPieceLocations
  ]);

  return (
    <div className="HeartPiecesPage">
      <StickyInfoBar>
        <h2>
          hearts collected: {collectedHearts.length}/{allHeartPieces.length}
        </h2>
        <button
          onClick={() => {
            setCollectedHearts(
              allHeartPieces.map(heartPiece => heartPiece.number)
            );
          }}
        >
          collect all
        </button>
        <button
          onClick={() => {
            setCollectedHearts([]);
          }}
        >
          uncollect all
        </button>
      </StickyInfoBar>

      <FiltersBar
        allLocations={heartPieceLocations}
        selectedLocations={heartPieceLocationsWhitelist}
        onLocationsClearAll={() => {
          setHeartPieceLocationsWhitelist([]);
        }}
        onLocationsSelectAll={() => {
          setHeartPieceLocationsWhitelist(heartPieceLocations);
        }}
        onFilterToggle={location => {
          toggleHeartPieceLocationWhitelist(location);
        }}
      />

      <div className="container">
        <HeartPieceList
          heartPieces={allHeartPieces}
          collectedHearts={collectedHearts}
          locationWhitelist={heartPieceLocationsWhitelist}
          onToggleCollected={heartPiece => {
            toggleCollectedHeart(heartPiece.number);
          }}
        />
      </div>
    </div>
  );
};

export default HeartPiecesPage;
