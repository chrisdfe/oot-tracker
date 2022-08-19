import React from "react";
import styled from "styled-components";

import { GameLocation } from "data/types/GameLocation";
import { RegionKey } from "data/types/Region";

import ThemeRegion from "App/ThemeRegion";

import FancyBlockLink from "components/FancyBlockLink";

import LocationCollectableSummary from "../components/LocationCollectableSummary";

interface Props {
  regionKey?: RegionKey;
  location: GameLocation;
}

const LocationListItemWrapper = styled.div`
  h2 {
    margin: 0 0 0.4rem;
    color: ${({ theme }) => theme.text.color.primary};
  }

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.text.color.primary};
  }
`;

const LocationListItem = ({ regionKey = RegionKey.overworld, location }: Props) => {
  return (
    <ThemeRegion regionKey={regionKey}>
      <LocationListItemWrapper>
        <FancyBlockLink
          title={location.title}
          to={`/locations/${location.slug}`}
        >
          <LocationCollectableSummary location={location} />
        </FancyBlockLink>
      </LocationListItemWrapper>
    </ThemeRegion>
  );
};

export default LocationListItem;
