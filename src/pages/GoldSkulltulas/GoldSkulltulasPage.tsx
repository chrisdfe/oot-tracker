import React, { useContext } from "react";

import { AppDataContext } from "../../App/AppData";

import Container from "../../components/layout/Container";

import GoldSkulltulaList from "./components/GoldSkulltulaList";
import StickyInfoBar from "./components/StickyInfoBar";

const GoldSkulltulasPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { goldSkulltulas } = appData;

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
