import React, { useContext } from "react";

import { AppDataContext } from "../../AppData";
import { AppStateContext } from "../../AppState";

import Container from "../../components/layout/Container";

import GoldSkulltulaList from "./components/GoldSkulltulaList";
// import FiltersBar from "./components/FiltersBar";
import StickyInfoBar from "./components/StickyInfoBar";

const GoldSkulltulasPage = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  // @ts-ignore
  const { goldSkulltulas } = appData;

  // const {
  //   collectedHearts,
  //   setCollectedHearts,
  //   toggleCollectedHeart
  //   // @ts-ignore
  // } = appState.GoldSkulltulas;

  return (
    <div className="GoldSkulltulasPage">
      <StickyInfoBar />

      <Container>
        <GoldSkulltulaList goldSkulltulas={goldSkulltulas} />
      </Container>
    </div>
  );
};

export default GoldSkulltulasPage;