import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";

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
  margin-bottom: 2rem;

  h2 {
    margin: 0 0 0.4rem;
  }

  h4 {
    margin: 0;
  }

  a {
    display: block;
    padding: 1.2rem 0 ;
    text-decoration: none;
    border-bottom: 4px solid rgba(255, 255, 255, 0);
    transition: border-color 0.2s;
    // transition: background-color 0.2s;

    &:hover {
      // h2 {
        border-bottom-color: #fff;
      // }
    }
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
      <h4>
        <span>heart pieces:&nbsp;{location.heartPieceIds.length}</span>&nbsp;
        <span>
          gold skulltulas:&nbsp;
          {location.goldSkulltulaIds.length}
        </span>
        <span>
          soft soil locations:&nbsp;
          {location.softSoilLocationIds.length}
        </span>
      </h4>
    </Link>
  </LocationListItemWrapper>
);

const LocationsIndexPage = () => {
  return (
    <>
      <Hero>
        <Container>
          <h1>Locations</h1>
        </Container>
      </Hero>
      <Container>
        {allLocations.map(location => (
          <LocationListItem key={location.slug} location={location} />
        ))}
      </Container>
    </>
  );
};

export default LocationsIndexPage;
