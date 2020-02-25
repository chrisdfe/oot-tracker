import React, { useContext } from "react";

import { AppDataContext } from "../../AppData";
import { AppStateContext } from "../../AppState";

import Container from "../../components/layout/Container";

import HeartPieceList from "./components/HeartPieceList";
import FiltersBar from "./components/FiltersBar";
import StickyInfoBar from "./components/StickyInfoBar";

const HeartPiecesPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

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
