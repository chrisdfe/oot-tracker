import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";

import HeartPieceList from "./components/HeartPieceList";
import StickyInfoBar from "./components/StickyInfoBar";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);

  const { heartPieces } = appData;

  return (
    <div className="HeartPiecesPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickyInfoBar />

      <Container>
        <HeartPieceList heartPieces={heartPieces} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
