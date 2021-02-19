import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import PageSection from "components/layout/PageSection";
import Container from "components/layout/Container";

import BackLink from "components/BackLink";
import StickySectionHeader from "components/StickySectionHeader";

import GoldSkulltulaList from "./components/GoldSkulltulaList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const GoldSkulltulasPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { goldSkulltulas } = appData;

  const { collectedGoldSkulltulas } = appState.goldSkulltulas;

  const title = `${collectedGoldSkulltulas.length}/
              ${goldSkulltulas.length} gold skulltulas`;

  return (
    <div className="GoldSkulltulasPage">
      <Hero backLink="/collectables">
        <Container>
          <h1>Gold Skulltulas</h1>

          <h4>
            Total Collected: {collectedGoldSkulltulas.length}/
            {goldSkulltulas.length}
          </h4>
        </Container>
      </Hero>

      <PageSection>
        <Container>
          <GoldSkulltulaList goldSkulltulas={goldSkulltulas} />
        </Container>
      </PageSection>
    </div>
  );
};

export default GoldSkulltulasPage;
