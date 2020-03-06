import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

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
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickySectionHeader title={title} />

      <Container>
        <GoldSkulltulaList goldSkulltulas={goldSkulltulas} />
      </Container>
    </div>
  );
};

export default GoldSkulltulasPage;
