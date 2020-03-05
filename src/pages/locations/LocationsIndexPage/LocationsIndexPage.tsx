import React, { useContext, useState, useCallback } from "react";
import groupBy from "lodash-es/groupBy";

import Container from "../../../components/layout/Container";
import Hero from "../../../components/layout/Hero";

import { AppDataContext } from "../../../App/AppData";

import { getRegionById } from "../../../data/selectors/regions";

import LocationRegionFilters from "./LocationRegionFilters";
import LocationListItem from "./LocationListItem";

const LocationsIndexPage = () => {
  const appData = useContext(AppDataContext);
  const { locations, regions } = appData;

  const [currentRegionFilterId, setCurrentRegionFilterId] = useState("");

  const groupedLocations = groupBy(locations, "regionId");

  const filteredLocations = currentRegionFilterId
    ? { [currentRegionFilterId]: groupedLocations[currentRegionFilterId] }
    : groupedLocations;

  const onRegionSelect = useCallback(region => {
    if (currentRegionFilterId && currentRegionFilterId === region.id) {
      setCurrentRegionFilterId("");
    } else {
      setCurrentRegionFilterId(region.id);
    }
  }, []);

  return (
    <>
      <Hero>
        <Container>
          <h1>All Locations</h1>
        </Container>
      </Hero>
      <Container>
        <LocationRegionFilters
          regions={regions}
          onRegionSelect={onRegionSelect}
          currentRegionFilterId={currentRegionFilterId}
        />
        {Object.keys(filteredLocations).map(regionId => {
          const locations = filteredLocations[regionId];
          const themeRegion = getRegionById(appData, regionId);
          const regionSlug = themeRegion ? themeRegion.slug : "";
          return (
            <>
              {locations.map(location => (
                <LocationListItem
                  key={location.slug}
                  location={location}
                  regionSlug={regionSlug}
                />
              ))}
            </>
          );
        })}
      </Container>
    </>
  );
};

export default LocationsIndexPage;
