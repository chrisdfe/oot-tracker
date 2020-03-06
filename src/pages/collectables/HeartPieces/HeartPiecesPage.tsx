import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Container from "components/layout/Container";
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
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickySectionHeader title={title} />

      <Container>
        <HeartPieceList heartPieces={heartPieces} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
