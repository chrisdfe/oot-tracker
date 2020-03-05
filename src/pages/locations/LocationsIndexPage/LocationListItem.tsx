import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../../components/layout/Container";
import { GameLocation } from "../../../data/types/GameLocation";
import LocationCollectableSummary from "../components/LocationCollectableSummary";
import ThemeRegion from "../../../App/ThemeRegion";

interface Props {
  regionSlug: string;
  location: GameLocation;
}

const LocationListItemWrapper = styled.div`
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.background.color.primary};

  h2 {
    margin: 0 0 0.4rem;
    color: ${({ theme }) => theme.text.color.primary}
  }

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.text.color.primary}
  }

  a {
    display: block;
    padding: 1.2rem 2rem;
    text-decoration: none;
    border-bottom: 4px solid rgba(255, 255, 255, 0);
    transition: border-color 0.2s;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.border.color.secondary};
    }
  }

  span {
    display: inline: block;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.text.color.primary}
  }
`;

const LocationListItem = ({ regionSlug, location }: Props) => {
  return (
    <ThemeRegion regionSlug={regionSlug}>
      <LocationListItemWrapper>
        <Link to={`/locations/${location.slug}`}>
          <h2>{location.title}</h2>
          <LocationCollectableSummary location={location} />
        </Link>
      </LocationListItemWrapper>
    </ThemeRegion>
  );
};

export default LocationListItem;
