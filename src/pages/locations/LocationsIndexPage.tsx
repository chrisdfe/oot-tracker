import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";

import allLocations from "../../data/locations.json";

type Location = {
  slug: string;
  title: string;
  heartPieceIds: string[];
  goldSkulltulaIds: string[];
  softSoilLocationIds: string[];
};

interface LocationListItemProps {
  location: Location;
}

const LocationListItemWrapper = styled.div`
  margin-bottom: 4rem;

  a {
    text-decoration: none;
  }

  span {
    display: inline: block;
    margin-right: 0.5rem;
  }
`;

const LocationListItem = ({ location }: LocationListItemProps) => (
  <LocationListItemWrapper>
    <Link to={`/locations/${location.slug}`}>
      <h2>{location.title}</h2>
      <p>
        <span>heart pieces: {location.heartPieceIds.length}</span>&nbsp;
        <span>
          gold skulltulas:
          {location.goldSkulltulaIds.length}
        </span>
        <span>
          soft soil locations:
          {location.softSoilLocationIds.length}
        </span>
      </p>
    </Link>
  </LocationListItemWrapper>
);

const LocationsIndexPage = () => {
  return (
    <Container>
      {allLocations.map(location => (
        <LocationListItem key={location.slug} location={location} />
      ))}
    </Container>
  );
};

export default LocationsIndexPage;
