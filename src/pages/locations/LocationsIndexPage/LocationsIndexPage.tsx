import React, { useContext, useCallback, useMemo } from "react";

import groupBy from "lodash-es/groupBy";

import PageSection from "components/layout/PageSection";
import Container from "components/layout/Container";
import Hero from "components/layout/Hero";

import { AppDataContext } from "App/AppData";

import { getRegionById } from "data/selectors/regions";

import usePersistedState from "utils/usePersistedState";

import LocationRegionFilters from "./LocationRegionFilters";
import LocationListItem from "./LocationListItem";
import ListTitle from "./ListTitle";
import { Region, RegionKey } from "data/types/Region";

const LocationsIndexPage = () => {
  const appData = useContext(AppDataContext);
  const { locations, regions } = appData;

  const [currentRegionFilterId, setCurrentRegionFilterId] = usePersistedState(
    "oot-tracker.region-filter-id",
    ""
  );

  const currentRegion = useMemo(
    () => regions.find((region) => region.id === currentRegionFilterId),
    [regions, currentRegionFilterId]
  );

  const groupedLocations = useMemo(() => groupBy(locations, "regionId"), [
    locations,
  ]);

  const filteredLocations = useMemo(() => {
    if (currentRegionFilterId) {
      return {
        [currentRegionFilterId]: groupedLocations[currentRegionFilterId],
      };
    }

    return groupedLocations;
  }, [currentRegionFilterId, groupedLocations]);

  const onRegionSelect = useCallback(
    (region: Region) => {
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
      <Hero heading="Locations" />

      <PageSection>
        <Container>
          <LocationRegionFilters
            regions={regions}
            onRegionSelect={onRegionSelect}
            currentRegionFilterId={currentRegionFilterId}
          />
        </Container>
      </PageSection>
      <PageSection>
        <Container>
          <ListTitle region={currentRegion} />

          {Object.keys(filteredLocations).map((regionId) => {
            const locations = filteredLocations[regionId];
            const themeRegion = getRegionById(appData, regionId as RegionKey);
            const regionKey = themeRegion ? themeRegion.key : undefined;

            return (
              <div key={regionId}>
                {locations.map((location) => (
                  <LocationListItem
                    key={location.slug}
                    location={location}
                    regionKey={regionKey}
                  />
                ))}
              </div>
            );
          })}
        </Container>
      </PageSection>
    </>
  );
};

export default LocationsIndexPage;
