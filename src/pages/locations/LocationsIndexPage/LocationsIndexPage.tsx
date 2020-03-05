import React, { useContext, useCallback, useMemo } from "react";

import groupBy from "lodash-es/groupBy";

import Container from "../../../components/layout/Container";
import Hero from "../../../components/layout/Hero";

import { AppDataContext } from "../../../App/AppData";

import { getRegionById } from "../../../data/selectors/regions";

import usePersistedState from "../../../utils/usePersistedState";

import LocationRegionFilters from "./LocationRegionFilters";
import LocationListItem from "./LocationListItem";
import ListTitle from "./ListTitle";

const LocationsIndexPage = () => {
  const appData = useContext(AppDataContext);
  const { locations, regions } = appData;

  const [currentRegionFilterId, setCurrentRegionFilterId] = usePersistedState(
    "oot-tracker.region-filter-id",
    ""
  );

  const currentRegion = useMemo(
    () => regions.find(region => region.id === currentRegionFilterId),
    [regions, currentRegionFilterId]
  );

  const groupedLocations = useMemo(() => groupBy(locations, "regionId"), [
    locations
  ]);

  const filteredLocations = useMemo(() => {
    if (currentRegionFilterId) {
      return {
        [currentRegionFilterId]: groupedLocations[currentRegionFilterId]
      };
    }

    return groupedLocations;
  }, [currentRegionFilterId, groupedLocations]);

  const onRegionSelect = useCallback(
    region => {
      if (currentRegionFilterId && currentRegionFilterId === region.id) {
        setCurrentRegionFilterId("");
      } else {
        setCurrentRegionFilterId(region.id);
      }
    },
    [currentRegionFilterId, setCurrentRegionFilterId]
  );

  return (
    <>
      <Hero>
        <Container>
          <h1>Locations</h1>
        </Container>
      </Hero>
      <Container>
        <LocationRegionFilters
          regions={regions}
          onRegionSelect={onRegionSelect}
          currentRegionFilterId={currentRegionFilterId}
        />

        <ListTitle region={currentRegion} />
      </Container>

      {Object.keys(filteredLocations).map(regionId => {
        const locations = filteredLocations[regionId];
        const themeRegion = getRegionById(appData, regionId);
        const regionSlug = themeRegion ? themeRegion.slug : "";
        return (
          <div key={regionId}>
            {locations.map(location => (
              <LocationListItem
                key={location.slug}
                location={location}
                regionSlug={regionSlug}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default LocationsIndexPage;