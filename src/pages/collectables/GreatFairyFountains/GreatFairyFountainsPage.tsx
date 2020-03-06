import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";
import StickySectionHeader from "../../../components/StickySectionHeader";

import GreatFairyFountainList from "./components/GreatFairyFountainList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

  const { greatFairyFountains } = appData;

  const title = `${collectedGreatFairyFountains.length}/${
    greatFairyFountains.length
  } great fairy fountains`;

  return (
    <div className="HeartPiecesPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickySectionHeader title={title} />

      <Container>
        <GreatFairyFountainList greatFairyFountains={greatFairyFountains} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
