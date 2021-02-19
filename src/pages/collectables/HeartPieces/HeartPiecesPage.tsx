import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";
import PageSection from "components/layout/PageSection";

import BackLink from "components/BackLink";
import StickySectionHeader from "components/StickySectionHeader";

import HeartPieceList from "./components/HeartPieceList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { heartPieces } = appData;

  const { collectedHearts } = appState.heartPieces;

  const title = `${collectedHearts.length}/${heartPieces.length} heart pieces`;

  return (
    <div className="HeartPiecesPage">
      <Hero backLink="/collectables">
        <Container>
          <h1>Heart Pieces</h1>

          <h4>
            Total Collected: {collectedHearts.length}/{heartPieces.length}
          </h4>
        </Container>
      </Hero>

      <PageSection>
        <Container>
          <HeartPieceList heartPieces={heartPieces} />
        </Container>
      </PageSection>
    </div>
  );
};

export default HeartPiecesPage;
