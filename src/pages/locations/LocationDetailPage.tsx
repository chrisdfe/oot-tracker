import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";
import BackLink from "../../components/BackLink";

import { AppDataContext } from "../../App/AppData";
import { AppStateContext } from "../../App/AppState";
import ThemeRegion from "../../App/ThemeRegion";

import HeartPieceList from "../../pages/collectables/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "../../pages/collectables/GoldSkulltulas/components/GoldSkulltulaList";
import SoftSoilLocationsList from "../../pages/collectables/SoftSoilLocations/components/SoftSoilLocationsList";

import LocationCollectableSummary from "./components/LocationCollectableSummary";

import {
  filterCollectablesByLocation,
  getCollectablesByIds
} from "../../utils/appState";

import { GameLocation } from "../../data/types/GameLocation";

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
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1.2rem;
  }
`;

const Section = styled.section`
  padding-bottom: 4rem;

  h2 {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
    margin-bottom: 0;
    background-color: ${({ theme }) => theme.background.color.primary};
  }
`;

const LocationNotFound = () => (
  <Container>
    <h2>Location not found</h2>
  </Container>
);

const EmptyListWrapper = styled.div`
  padding: 7rem 0 2rem;
  text-align: center;
  font-size: 2rem;
`;

const EmptyList = () => <EmptyListWrapper>⦻</EmptyListWrapper>;

const LocationDetailPage = () => {
  const { slug } = useParams();

  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const {
    locations: allLocations,
    heartPieces,
    goldSkulltulas,
    softSoilLocations
  } = appData;

  const { collectedHearts } = appState.heartPieces;

  const { collectedGoldSkulltulas } = appState.goldSkulltulas;

  const { collectedSoftSoilLocations } = appState.softSoilLocations;

  const currentLocation = allLocations.find(location => location.slug === slug);

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

  return (
    <ThemeRegion region={currentLocation.region}>
      <Wrapper>
        <Hero>
          <Container>
            <HeroHeadline>
              <h1>{currentLocation.title}</h1>
              <LocationCollectableSummary location={currentLocation} />
            </HeroHeadline>

            <BackLink to="/locations" />
          </Container>
        </Hero>

        <Container>
          <Section>
            <h2>
              {collectedLocationHeartPieces.length}/{locationHeartPieces.length}{" "}
              heart {locationHeartPieces.length === 1 ? "piece" : "pieces"}
            </h2>
            {locationHeartPieces.length === 0 ? (
              <EmptyList />
            ) : (
              <HeartPieceList heartPieces={locationHeartPieces} />
            )}
          </Section>

          <Section>
            <h2>
              {collectedLocationGoldSkulltulas.length}/
              {locationGoldSkulltulas.length} gold{" "}
              {locationGoldSkulltulas.length === 1 ? "skulltula" : "skulltulas"}
            </h2>
            {locationGoldSkulltulas.length === 0 ? (
              <EmptyList />
            ) : (
              <GoldSkulltulaList goldSkulltulas={locationGoldSkulltulas} />
            )}
          </Section>

          <Section>
            <h2>
              {collectedLocationSoftSoilLocations.length}/
              {locationSoftSoilLocations.length} soft soil{" "}
              {locationSoftSoilLocations.length === 1
                ? "location"
                : "locations"}
            </h2>
            {locationSoftSoilLocations.length === 0 ? (
              <EmptyList />
            ) : (
              <SoftSoilLocationsList
                softSoilLocations={locationSoftSoilLocations}
              />
            )}
          </Section>
        </Container>
      </Wrapper>
    </ThemeRegion>
  );
};

export default LocationDetailPage;
