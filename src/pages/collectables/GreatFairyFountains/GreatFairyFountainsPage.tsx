import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import PageSection from "components/layout/PageSection";
import Container from "components/layout/Container";
import BackLink from "components/BackLink";
import StickySectionHeader from "components/StickySectionHeader";

import GreatFairyFountainList from "./components/GreatFairyFountainList";

import ProgressBar from "components/ProgressBar";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const GreatFairyFountainsPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

  const { greatFairyFountains } = appData;

  const title = `${collectedGreatFairyFountains.length}/${greatFairyFountains.length
    } great fairy fountains`;

  return (
    <div className="GreatFairyFountainsPage">
      <Hero backLink="/collectables">
        <Container>
          <h1>Great Fairy Fountains</h1>

          <h4>
            Total Collected: {collectedGreatFairyFountains.length}/
            {greatFairyFountains.length}
          </h4>

          <ProgressBar
            currentAmount={collectedGreatFairyFountains.length}
            totalAmount={greatFairyFountains.length}
          />
        </Container>
      </Hero>

      <PageSection>
        <Container>
          <GreatFairyFountainList greatFairyFountains={greatFairyFountains} />
        </Container>
      </PageSection>
    </div>
  );
};

export default GreatFairyFountainsPage;
