import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";
import FancyLink from "../../components/FancyLink";

import { AppDataContext } from "../../App/AppData";
import { AppStateContext } from "../../App/AppState";
import ThemeRegion, { RegionName } from "../../App/ThemeRegion";

import HeartPieceList from "../../pages/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "../../pages/GoldSkulltulas/components/GoldSkulltulaList";
import SoftSoilLocationsList from "../../pages/SoftSoilLocations/components/SoftSoilLocationsList";

import LocationCollectableSummary from "./components/LocationCollectableSummary";

import {
  filterCollectablesByLocation,
  getCollectablesByIds
} from "../../utils/appState";

// TODO - hardcode in location data instead of this
import { getRegionFromTitle } from "./LocationsIndexPage";

type Location = {
  slug: string;
  title: string;
};

interface LocationListItemProps {
  location: Location;
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
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
    background-color: ${({ theme }) => theme.background.color.primary};
  }
`;

const LocationNotFound = () => (
  <Container>
    <h2>Location not found</h2>
  </Container>
);

const EmptyListWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
  font-size: 3rem;
`;

const EmptyList = () => <EmptyListWrapper>♡</EmptyListWrapper>;

const LocationDetailPage = () => {
  const { slug } = useParams();

  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

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

  const {
    collectedHearts
    // @ts-ignore
  } = appState.heartPieces;

  const {
    collectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  const {
    collectedSoftSoilLocations
    // @ts-ignore
  } = appState.softSoilLocations;

  // @ts-ignore
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
    <ThemeRegion region={getRegionFromTitle(currentLocation.title)}>
      <Wrapper>
        <Hero>
          <Container>
            <HeroHeadline>
              <h1>{currentLocation.title}</h1>
              <LocationCollectableSummary location={currentLocation} />
            </HeroHeadline>

            <FancyLink>
              <Link to="/locations">&#60; back</Link>
            </FancyLink>
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
