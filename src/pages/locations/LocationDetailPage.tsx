import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/layout/Container";

import { AppDataContext } from "../../AppData";
import { AppStateContext } from "../../AppState";

import allLocations from "../../data/locations.json";
import heartPieces from "../../data/heartPieces.json";
import goldSkulltulas from "../../data/goldSkulltulas.json";

import HeartPieceList from "../../pages/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "../../pages/GoldSkulltulas/components/GoldSkulltulaList";

type Location = {
  slug: string;
  title: string;
};

interface LocationListItemProps {
  location: Location;
}

const LocationNotFound = () => (
  <Container>
    <h2>Location not found</h2>
  </Container>
);

const LocationDetailPage = () => {
  const { slug } = useParams();

  const appState = useContext(AppStateContext);
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { collectedHearts } = appState.heartPieces;
  // @ts-ignore
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;

  const currentLocation = allLocations.find(location => location.slug === slug);

  if (!currentLocation) return <LocationNotFound />;

  const locationHeartPieces = heartPieces.filter(
    heartPiece => heartPiece.location === currentLocation.title
  );
  const locationGoldSkulltulas = goldSkulltulas.filter(
    goldSkulltula => goldSkulltula.location === currentLocation.title
  );

  return (
    <Container>
      <div>
        <Link to="/locations">back</Link>
      </div>
      <h2>{currentLocation.title}</h2>

      <div>
        <h3>{locationHeartPieces.length} heart pieces</h3>
        <HeartPieceList heartPieces={locationHeartPieces} />
      </div>

      <div>
        <h3>{locationGoldSkulltulas.length} gold skulltulas</h3>
        <GoldSkulltulaList goldSkulltulas={locationGoldSkulltulas} />
      </div>
    </Container>
  );
};

export default LocationDetailPage;
