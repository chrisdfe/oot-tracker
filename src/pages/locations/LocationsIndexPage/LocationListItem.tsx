import React from "react";
import styled from "styled-components";

import { GameLocation } from "../../../data/types/GameLocation";

import FancyBlockLink from "../../../components/FancyBlockLink";

import LocationCollectableSummary from "../components/LocationCollectableSummary";

import ThemeRegion from "../../../App/ThemeRegion";

interface Props {
  regionSlug: string;
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

const LocationListItem = ({ regionSlug, location }: Props) => {
  return (
    <ThemeRegion regionSlug={regionSlug}>
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
