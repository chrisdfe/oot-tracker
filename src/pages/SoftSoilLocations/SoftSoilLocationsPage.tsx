import React, { useContext } from "react";

import { AppDataContext } from "../../AppData";
import { AppStateContext } from "../../AppState";

import Container from "../../components/layout/Container";

import SoftSoilLocationsList from "./components/SoftSoilLocationsList";
// import FiltersBar from "./components/FiltersBar";
import StickyInfoBar from "./components/StickyInfoBar";

const SoftSoilLocationsPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { softSoilLocations } = appData;

  return (
    <div className="SoftSoilLocationsPage">
      <StickyInfoBar />

      <Container>
        <SoftSoilLocationsList softSoilLocations={softSoilLocations} />
      </Container>
    </div>
  );
};

export default SoftSoilLocationsPage;
