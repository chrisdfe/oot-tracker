import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";
import StickyInfoBar from "../../../components/StickyInfoBar";

import GreatFairyFountainList from "./components/GreatFairyFountainList";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

  const { greatFairyFountains } = appData;

  return (
    <div className="HeartPiecesPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickyInfoBar
        headingText={`${collectedGreatFairyFountains.length}/${
          greatFairyFountains.length
        } great fairy fountains`}
      />

      <Container>
        <GreatFairyFountainList greatFairyFountains={greatFairyFountains} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
