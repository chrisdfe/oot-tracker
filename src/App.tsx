import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import AppContainer from "./AppContainer";
import AppGlobalStyles from "./AppGlobalStyles";

import ScrollToTop from "./utils/ScrollToTop";

import Navbar from "./components/Navbar";

import LocationDetailPage from "./pages/locations/LocationDetailPage";
import LocationsIndexPage from "./pages/locations/LocationsIndexPage";
import HeartsPiecesPage from "./pages/HeartPieces/HeartPiecesPage";
import GoldSkulltulasPage from "./pages/GoldSkulltulas/GoldSkulltulasPage";
import SoftSoilLocationsPage from "./pages/SoftSoilLocations/SoftSoilLocationsPage";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <AppGlobalStyles>
          <Helmet>
            <meta charSet="utf-8" />
            <title>OOT item tracker</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
              integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
              // @ts-ignore
              crossorigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
              rel="stylesheet"
            />

            <link
              href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
              rel="stylesheet"
            />
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
              <Route path="/heart-pieces">
                <HeartsPiecesPage />
              </Route>
              <Route path="/gold-skulltulas">
                <GoldSkulltulasPage />
              </Route>
              <Route path="/soft-soil-locations">
                <SoftSoilLocationsPage />
              </Route>
              <Route path="/">
                <h2>home</h2>
              </Route>
            </Switch>
          </Router>
        </AppGlobalStyles>
      </AppContainer>
    </div>
  );
}

export default App;
