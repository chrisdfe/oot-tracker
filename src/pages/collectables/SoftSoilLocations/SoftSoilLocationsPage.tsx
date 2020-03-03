import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import FancyLink from "../../../components/FancyLink";

import SoftSoilLocationsList from "./components/SoftSoilLocationsList";
import StickyInfoBar from "./components/StickyInfoBar";

const SoftSoilLocationsPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { softSoilLocations } = appData;

  return (
    <div className="SoftSoilLocationsPage">
      <Container>
        <FancyLink>
          <Link to="/collectables">&#60; back</Link>
        </FancyLink>
      </Container>

      <StickyInfoBar />

      <Container>
        <SoftSoilLocationsList softSoilLocations={softSoilLocations} />
      </Container>
    </div>
  );
};

export default SoftSoilLocationsPage;
