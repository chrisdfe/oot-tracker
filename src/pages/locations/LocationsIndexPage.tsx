import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";

import LocationCollectableSummary from "./components/LocationCollectableSummary";

import { AppDataContext } from "../../App/AppData";
import ThemeRegion, { RegionName } from "../../App/ThemeRegion";

// TODO - fix conflict with global 'Location'
// TODO - move elsewhere
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

// TODO - hardcode in location data instead of this
export const getRegionFromTitle = (title: string): RegionName => {
  if (
    title.includes("Goron") ||
    title.includes("Death") ||
    title.includes("Dodongo") ||
    title.includes("Fire")
  ) {
    return "goron";
  }

  if (
    title.includes("Zora") ||
    title.includes("Jabu") ||
    title.includes("Hylia") ||
    title.includes("Ice") ||
    title.includes("Water")
  ) {
    return "zora";
  }

  if (
    title.includes("Kokiri") ||
    title.includes("Lost Woods") ||
    title.includes("Sacred") ||
    title.includes("Forest") ||
    title.includes("Deku")
  ) {
    return "kokiri";
  }

  if (
    title.includes("Shadow") ||
    title.includes("Grave") ||
    title.includes("Bottom of")
  ) {
    return "shadow";
  }

  if (
    title.includes("Gerudo") ||
    title.includes("Haunted Wasteland") ||
    title.includes("Spirit") ||
    title.includes("Desert")
  ) {
    return "gerudo";
  }

  return "default";
};

const LocationListItem = ({ location }: LocationListItemProps) => (
  <ThemeRegion region={getRegionFromTitle(location.title)}>
    <LocationListItemWrapper>
      <Link to={`/locations/${location.slug}`}>
        <h2>{location.title}</h2>
        <LocationCollectableSummary location={location} />
      </Link>
    </LocationListItemWrapper>
  </ThemeRegion>
);

const LocationsIndexPage = () => {
  const appData = useContext(AppDataContext);
  // @ts-ignore
  const { locations } = appData;
  return (
    <>
      <Hero>
        <Container>
          <h1>All Locations</h1>
        </Container>
      </Hero>
      <Container>
        {/*@ts-ignore*/}
        {locations.map((location: any) => (
          <LocationListItem key={location.slug} location={location} />
        ))}
      </Container>
    </>
  );
};

export default LocationsIndexPage;
