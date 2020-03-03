import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import FancyLink from "../../../components/FancyLink";

import GoldSkulltulaList from "./components/GoldSkulltulaList";
import StickyInfoBar from "./components/StickyInfoBar";

const GoldSkulltulasPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { goldSkulltulas } = appData;

  return (
    <div className="GoldSkulltulasPage">
      <Container>
        <FancyLink>
          <Link to="/collectables">&#60; back</Link>
        </FancyLink>
      </Container>

      <StickyInfoBar />

      <Container>
        <GoldSkulltulaList goldSkulltulas={goldSkulltulas} />
      </Container>
    </div>
  );
};

export default GoldSkulltulasPage;
