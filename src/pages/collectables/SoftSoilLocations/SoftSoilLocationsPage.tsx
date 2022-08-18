import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";
import PageSection from "components/layout/PageSection";

import BackLink from "components/BackLink";
import StickySectionHeader from "components/StickySectionHeader";

import ProgressBar from "components/ProgressBar";

import SoftSoilLocationsList from "./components/SoftSoilLocationsList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const SoftSoilLocationsPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { softSoilLocations } = appData;

  const { collectedSoftSoilLocations } = appState.softSoilLocations;

  const title = `${collectedSoftSoilLocations.length}/
              ${softSoilLocations.length} soft soil locations`;
  return (
    <div className="SoftSoilLocationsPage">
      <Hero backLink="/collectables">
        <Container>
          <h1>Soft Soil Locations</h1>

          <h4>
            Total Collected: {collectedSoftSoilLocations.length}/
            {softSoilLocations.length}
          </h4>

          <ProgressBar
            currentAmount={collectedSoftSoilLocations.length}
            totalAmount={softSoilLocations.length}
          />
        </Container>
      </Hero>

      {/*<StickySectionHeader title={title} />*/}

      <PageSection>
        <Container>
          <SoftSoilLocationsList softSoilLocations={softSoilLocations} />
        </Container>
      </PageSection>
    </div>
  );
};

export default SoftSoilLocationsPage;
