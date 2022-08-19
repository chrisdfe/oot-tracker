import React, { ReactNode, useContext, useRef, useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "components/layout/Container";
import Hero from "components/layout/Hero";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import ThemeRegion from "App/ThemeRegion";

import HeartPieceList from "pages/collectables/HeartPieces/components/HeartPieceList";
import GoldSkulltulaList from "pages/collectables/GoldSkulltulas/components/GoldSkulltulaList";
import SoftSoilLocationsList from "pages/collectables/SoftSoilLocations/components/SoftSoilLocationsList";
import GreatFairyFountainList from "pages/collectables/GreatFairyFountains/components/GreatFairyFountainList";

import LocationCollectableSummarySticky from "../components/LocationCollectableSummarySticky";
import LocationDetailSection from "./LocationDetailSection";

import {
  filterCollectablesByLocation,
  getCollectablesByIds,
} from "../../../utils/appState";

import { getRegionById } from "../../../data/selectors/regions";

const Wrapper = styled.div`
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.background.color.primary};

  // TODO - separate 'Heading' and 'Paragraph' components
  * {
    color: ${({ theme }) => theme.text.color.primary};
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

  const locationSummaryRef = useRef<HTMLDivElement>(null);
  const [locationSummaryHeight, setLocationSummaryHeight] = useState(0);
  useEffect(() => {
    if (locationSummaryRef?.current) {
      const height = Math.floor(locationSummaryRef.current.getBoundingClientRect().height);
      setLocationSummaryHeight(height);
    }
  }, []);

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

  return (
    <ThemeRegion regionKey={themeRegion && themeRegion.key}>
      <Wrapper>
        <Hero
          backLink="/locations"
          subheading="locations"
          heading={currentLocation.title}
        />

        <LocationCollectableSummarySticky ref={locationSummaryRef} location={currentLocation} />

        <LocationDetailSection
          title={<>
            <strong>{collectedLocationHeartPieces.length}/{locationHeartPieces.length
            }</strong>&nbsp;heart {locationHeartPieces.length === 1 ? "piece" : "pieces"}
          </>}
          isEmpty={locationHeartPieces.length === 0}
          stickyTopOffset={locationSummaryHeight}
        >
          <HeartPieceList heartPieces={locationHeartPieces} />
        </LocationDetailSection>

        <LocationDetailSection
          title={<>
            <strong>{collectedLocationGoldSkulltulas.length}/{locationGoldSkulltulas.length}</strong>&nbsp;gold {locationGoldSkulltulas.length === 1 ? "skulltula" : "skulltulas"}
          </>}
          isEmpty={locationGoldSkulltulas.length === 0}
          stickyTopOffset={locationSummaryHeight}
        >
          <GoldSkulltulaList goldSkulltulas={locationGoldSkulltulas} />
        </LocationDetailSection>

        <LocationDetailSection
          title={<>
            <strong>{collectedLocationSoftSoilLocations.length}/{locationSoftSoilLocations.length}</strong>&nbsp;soft soil {locationSoftSoilLocations.length === 1 ? "location" : "locations"}
          </>}
          isEmpty={locationSoftSoilLocations.length === 0}
          stickyTopOffset={locationSummaryHeight}
        >
          <SoftSoilLocationsList
            softSoilLocations={locationSoftSoilLocations}
          />
        </LocationDetailSection>

        <LocationDetailSection
          title={<>
            <strong>{collectedLocationGreatFairyFountains.length}/{locationGreatFairyFountains.length
            }</strong>&nbsp;great fairy {locationGreatFairyFountains.length === 1 ? "fountain" : "fountains"}
          </>}
          isEmpty={locationGreatFairyFountains.length === 0}
          stickyTopOffset={locationSummaryHeight}
        >
          <GreatFairyFountainList
            greatFairyFountains={locationGreatFairyFountains}
          />
        </LocationDetailSection>
      </Wrapper>
    </ThemeRegion >
  );
};

export default LocationDetailPage;
