import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";

import allLocations from "../../data/locations.json";

type Location = {
  slug: string;
  title: string;
};

interface LocationListItemProps {
  location: Location;
}

const LocationListItem = ({ location }: LocationListItemProps) => (
  <div>
    <Link to={`/locations/${location.slug}`}>
      <h2>{location.title}</h2>
    </Link>
  </div>
);

const LocationsIndexPage = () => {
  return (
    <Container>
      {allLocations.map(location => (
        <LocationListItem location={location} />
      ))}
    </Container>
  );
};

export default LocationsIndexPage;
