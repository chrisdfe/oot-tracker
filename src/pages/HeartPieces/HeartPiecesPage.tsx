import React, { useContext } from "react";

import { AppDataContext } from "../../App/AppData";

import Container from "../../components/layout/Container";

import HeartPieceList from "./components/HeartPieceList";
import StickyInfoBar from "./components/StickyInfoBar";

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { heartPieces } = appData;

  return (
    <div className="HeartPiecesPage">
      <StickyInfoBar />

      <Container>
        <HeartPieceList heartPieces={heartPieces} />
      </Container>
    </div>
  );
};

export default HeartPiecesPage;
