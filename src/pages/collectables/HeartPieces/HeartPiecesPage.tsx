import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import FancyLink from "../../../components/FancyLink";

import HeartPieceList from "./components/HeartPieceList";
import StickyInfoBar from "./components/StickyInfoBar";

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { heartPieces } = appData;

  return (
    <div className="HeartPiecesPage">
      <Container>
        <FancyLink>
          <Link to="/collectables">&#60; back</Link>
        </FancyLink>
      </Container>

      <StickyInfoBar />

      <Container>
        <HeartPieceList heartPieces={heartPieces} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
