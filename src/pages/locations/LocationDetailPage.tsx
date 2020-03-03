import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";
import FancyLink from "../../components/FancyLink";

import { AppDataContext } from "../../AppData";

import HeartPieceList from "../../pages/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "../../pages/GoldSkulltulas/components/GoldSkulltulaList";
import SoftSoilLocationsList from "../../pages/SoftSoilLocations/components/SoftSoilLocationsList";

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

  const appData = useContext(AppDataContext);

  const {
    // @ts-ignore
    locations: allLocations,
    // @ts-ignore
    heartPieces,
    // @ts-ignore
    goldSkulltulas,
    // @ts-ignore
    softSoilLocations
  } = appData;

  // @ts-ignore
  const currentLocation = allLocations.find(location => location.slug === slug);

  if (!currentLocation) return <LocationNotFound />;

  const locationHeartPieces = heartPieces.filter(
    // @ts-ignore
    heartPiece => heartPiece.location === currentLocation.title
  );
  const locationGoldSkulltulas = goldSkulltulas.filter(
    // @ts-ignore
    goldSkulltula => goldSkulltula.location === currentLocation.title
  );
  const locationSoftSoilLocations = softSoilLocations.filter(
    // @ts-ignore
    softSoilLocation => softSoilLocation.location === currentLocation.title
  );

  return (
    <>
      <Hero>
        <Container>
          <h1>{currentLocation.title}</h1>

          <FancyLink>
            <Link to="/locations">&#60; back</Link>
          </FancyLink>
        </Container>
      </Hero>
      <Container>
        <div>
          <h3>
            {locationHeartPieces.length} heart{" "}
            {locationHeartPieces.length === 1 ? "piece" : "pieces"}
          </h3>
          <HeartPieceList heartPieces={locationHeartPieces} />
        </div>

        <div>
          <h3>
            {locationGoldSkulltulas.length} gold{" "}
            {locationGoldSkulltulas.length === 1 ? "skulltula" : "skulltulas"}
          </h3>
          <GoldSkulltulaList goldSkulltulas={locationGoldSkulltulas} />
        </div>

        <div>
          <h3>
            {locationSoftSoilLocations.length} soft soil{" "}
            {locationSoftSoilLocations.length === 1 ? "location" : "locations"}
          </h3>
          <SoftSoilLocationsList
            softSoilLocations={locationSoftSoilLocations}
          />
        </div>
      </Container>
    </>
  );
};

export default LocationDetailPage;
