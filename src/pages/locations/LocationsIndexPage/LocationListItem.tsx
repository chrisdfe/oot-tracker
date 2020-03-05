import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../../components/layout/Container";
import { GameLocation } from "../../../data/types/GameLocation";
import LocationCollectableSummary from "../components/LocationCollectableSummary";
import ThemeRegion from "../../../App/ThemeRegion";

import hexToRGB from "../../../utils/hexToRGB";

interface Props {
  regionSlug: string;
  location: GameLocation;
}

const NextArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.text.color.primary};
  transition: transform 0.2s;
`;

const LocationListItemWrapper = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0 0 0.4rem;
    color: ${({ theme }) => theme.text.color.primary};
  }

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.text.color.primary};
  }

  a {
    position: relative;
    display: block;
    padding: 1.2rem 2rem;
    text-decoration: none;
    background-color: ${({ theme }) => theme.background.color.primary};
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) =>
        hexToRGB(theme.background.color.primary, 0.7)};

      ${NextArrow} {
        transform: translateX(5px);
      }
    }
  }
`;

const LocationListItem = ({ regionSlug, location }: Props) => {
  return (
    <ThemeRegion regionSlug={regionSlug}>
      <LocationListItemWrapper>
        <Link to={`/locations/${location.slug}`}>
          <h2>{location.title}</h2>
          <LocationCollectableSummary location={location} />
          <NextArrow>⇻</NextArrow>
        </Link>
      </LocationListItemWrapper>
    </ThemeRegion>
  );
};

export default LocationListItem;
