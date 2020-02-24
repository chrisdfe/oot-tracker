import React from "react";

import usePersistedStringArray from "../../utils/usePersistedStringArray";
import allHeartPieces from "../../data/heartPieces.json";

import Container from "../../components/layout/Container";

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
      <StickyInfoBar
        collectedHearts={collectedHearts}
        allHeartPieces={allHeartPieces}
        setCollectedHearts={setCollectedHearts}
      />

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

      <Container>
        <HeartPieceList
          heartPieces={allHeartPieces}
          collectedHearts={collectedHearts}
          locationWhitelist={heartPieceLocationsWhitelist}
          onToggleCollected={heartPiece => {
            toggleCollectedHeart(heartPiece.number);
          }}
        />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
