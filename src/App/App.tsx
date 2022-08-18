import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

import AppContainer from "./AppContainer";
import AppGlobalStyles from "./AppGlobalStyles";

import ScrollToTop from "../utils/ScrollToTop";

import Navbar from "../components/Navbar";

import LocationDetailPage from "../pages/locations/LocationDetailPage";
import LocationsIndexPage from "../pages/locations/LocationsIndexPage";

import HeartsPiecesPage from "../pages/collectables/HeartPieces/HeartPiecesPage";
import GoldSkulltulasPage from "../pages/collectables/GoldSkulltulas/GoldSkulltulasPage";
import SoftSoilLocationsPage from "../pages/collectables/SoftSoilLocations/SoftSoilLocationsPage";
import GreatFairyFountainsPage from "../pages/collectables/GreatFairyFountains/GreatFairyFountainsPage";
import CollectablesIndexPage from "../pages/collectables/CollectablesIndexPage";

import StyleguideIndexPage from "../pages/styleguide/StyleguideIndexPage";
import StyleguideTypographyPage from "../pages/styleguide/StyleguideTypographyPage";
import StyleguideRegionsPage from "../pages/styleguide/StyleguideRegionsPage";
import StyleguideComponentsPage from "../pages/styleguide/StyleguideComponentsPage";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <AppGlobalStyles>
          <Helmet>
            <meta charSet="utf-8" />
            <title>OOT item tracker</title>
            {/*<link
              href="https://fonts.googleapis.com/css?family=Merriweather:700,900|Open+Sans:400,600,700,700i,800&display=swap"
              rel="stylesheet"
            />*/}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Space+Mono&display=swap" rel="stylesheet" />
          </Helmet>

          <Router>
            <ScrollToTop />
            <Navbar />

            <Switch>
              <Route path="/locations/:slug">
                <LocationDetailPage />
              </Route>
              <Route path="/locations">
                <LocationsIndexPage />
              </Route>
              <Route path="/collectables/heart-pieces">
                <HeartsPiecesPage />
              </Route>
              <Route path="/collectables/gold-skulltulas">
                <GoldSkulltulasPage />
              </Route>
              <Route path="/collectables/soft-soil-locations">
                <SoftSoilLocationsPage />
              </Route>
              <Route path="/collectables/great-fairy-fountains">
                <GreatFairyFountainsPage />
              </Route>
              <Route path="/collectables">
                <CollectablesIndexPage />
              </Route>
              <Route path="/styleguide/components">
                <StyleguideComponentsPage />
              </Route>
              <Route path="/styleguide/typography">
                <StyleguideTypographyPage />
              </Route>
              <Route path="/styleguide/regions">
                <StyleguideRegionsPage />
              </Route>
              <Route path="/styleguide">
                <StyleguideIndexPage />
              </Route>
              <Route path="/">
                <CollectablesIndexPage />
              </Route>
            </Switch>
          </Router>
        </AppGlobalStyles>
      </AppContainer>
    </div>
  );
}

export default App;
