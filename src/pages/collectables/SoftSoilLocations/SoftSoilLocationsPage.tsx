import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";
import StickyInfoBar from "../../../components/StickyInfoBar";

import SoftSoilLocationsList from "./components/SoftSoilLocationsList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const SoftSoilLocationsPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { softSoilLocations } = appData;

  const { collectedSoftSoilLocations } = appState.softSoilLocations;

  return (
    <div className="SoftSoilLocationsPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickyInfoBar
        headingText={`${collectedSoftSoilLocations.length}/
              ${softSoilLocations.length} soft soil locations`}
      />

      <Container>
        <SoftSoilLocationsList softSoilLocations={softSoilLocations} />
      </Container>
    </div>
  );
};

export default SoftSoilLocationsPage;
