import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";

import SoftSoilLocationsList from "./components/SoftSoilLocationsList";
import StickyInfoBar from "./components/StickyInfoBar";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const SoftSoilLocationsPage = () => {
  const appData = useContext(AppDataContext);

  const { softSoilLocations } = appData;

  return (
    <div className="SoftSoilLocationsPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickyInfoBar />

      <Container>
        <SoftSoilLocationsList softSoilLocations={softSoilLocations} />
      </Container>
    </div>
  );
};

export default SoftSoilLocationsPage;
