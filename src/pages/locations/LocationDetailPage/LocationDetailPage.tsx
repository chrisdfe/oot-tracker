import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "components/layout/Container";
import Hero from "components/layout/Hero";
import BackLink from "components/BackLink";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import ThemeRegion from "App/ThemeRegion";

import HeartPieceList from "pages/collectables/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "pages/collectables/GoldSkulltulas/components/GoldSkulltulaList";
import SoftSoilLocationsList from "pages/collectables/SoftSoilLocations/components/SoftSoilLocationsList";
import GreatFairyFountainList from "pages/collectables/GreatFairyFountains/components/GreatFairyFountainList";

import LocationCollectableSummary from "../components/LocationCollectableSummary";
import LocationDetailSection from "./LocationDetailSection";

import {
  filterCollectablesByLocation,
  getCollectablesByIds,
} from "../../../utils/appState";

import { getRegionById } from "../../../data/selectors/regions";

import { GameLocation } from "../../../data/types/GameLocation";

interface LocationListItemProps {
  location: GameLocation;
}

const Wrapper = styled.div`
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.background.color.primary};

  // TODO - separate 'Heading' and 'Paragraph' components
  * {
    color: ${({ theme }) => theme.text.color.primary};
  }
`;

const HeroHeadline = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 2rem;
  }
`;

const LocationNotFound = () => (
  <Container>
    <h2>Location not found</h2>
  </Container>
);

const LocationDetailPage = () => {
  const { slug } = useParams();

  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const {
    locations: allLocations,
    heartPieces,
    goldSkulltulas,
    softSoilLocations,
    greatFairyFountains,
  } = appData;

  const { collectedHearts } = appState.heartPieces;
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;
  const { collectedSoftSoilLocations } = appState.softSoilLocations;
  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

  const currentLocation = allLocations.find(
    (location) => location.slug === slug
  );

  if (!currentLocation) return <LocationNotFound />;

  const locationHeartPieces = filterCollectablesByLocation(
    heartPieces,
    currentLocation
  );
  const collectedLocationHeartPieces = filterCollectablesByLocation(
    getCollectablesByIds(heartPieces, collectedHearts),
    currentLocation
  );

  const locationGoldSkulltulas = filterCollectablesByLocation(
    goldSkulltulas,
    currentLocation
  );
  const collectedLocationGoldSkulltulas = filterCollectablesByLocation(
    getCollectablesByIds(goldSkulltulas, collectedGoldSkulltulas),
    currentLocation
  );

  const locationSoftSoilLocations = filterCollectablesByLocation(
    softSoilLocations,
    currentLocation
  );
  const collectedLocationSoftSoilLocations = filterCollectablesByLocation(
    getCollectablesByIds(softSoilLocations, collectedSoftSoilLocations),
    currentLocation
  );

  const locationGreatFairyFountains = filterCollectablesByLocation(
    greatFairyFountains,
    currentLocation
  );
  const collectedLocationGreatFairyFountains = filterCollectablesByLocation(
    getCollectablesByIds(greatFairyFountains, collectedGreatFairyFountains),
    currentLocation
  );

  const themeRegion = getRegionById(appData, currentLocation.regionId);
  const regionSlug = themeRegion ? themeRegion.slug : "";

  return (
    <ThemeRegion regionSlug={regionSlug}>
      <Wrapper>
        <Hero backLink="/locations">
          <HeroHeadline>
            <h1>{currentLocation.title}</h1>
            <LocationCollectableSummary location={currentLocation} />
          </HeroHeadline>
        </Hero>

        <LocationDetailSection
          title={`${collectedLocationHeartPieces.length}/${
            locationHeartPieces.length
          } heart ${locationHeartPieces.length === 1 ? "piece" : "pieces"}`}
          isEmpty={locationHeartPieces.length === 0}
        >
          <HeartPieceList heartPieces={locationHeartPieces} />
        </LocationDetailSection>

        <LocationDetailSection
          title={`${collectedLocationGoldSkulltulas.length}/${
            locationGoldSkulltulas.length
          } gold ${
            locationGoldSkulltulas.length === 1 ? "skulltula" : "skulltulas"
          }`}
          isEmpty={locationGoldSkulltulas.length === 0}
        >
          <GoldSkulltulaList goldSkulltulas={locationGoldSkulltulas} />
        </LocationDetailSection>

        <LocationDetailSection
          title={`${collectedLocationSoftSoilLocations.length}/${
            locationSoftSoilLocations.length
          } soft soil ${
            locationSoftSoilLocations.length === 1 ? "location" : "locations"
          }`}
          isEmpty={locationSoftSoilLocations.length === 0}
        >
          <SoftSoilLocationsList
            softSoilLocations={locationSoftSoilLocations}
          />
        </LocationDetailSection>

        <LocationDetailSection
          title={`${collectedLocationGreatFairyFountains.length}/${
            locationGreatFairyFountains.length
          } great fairy ${
            locationGreatFairyFountains.length === 1 ? "fountain" : "fountains"
          }`}
          isEmpty={locationGreatFairyFountains.length === 0}
        >
          <GreatFairyFountainList
            greatFairyFountains={locationGreatFairyFountains}
          />
        </LocationDetailSection>
      </Wrapper>
    </ThemeRegion>
  );
};

export default LocationDetailPage;
