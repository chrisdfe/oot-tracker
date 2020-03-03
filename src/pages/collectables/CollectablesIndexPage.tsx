import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AppDataContext } from "../../App/AppData";
import { AppStateContext } from "../../App/AppState";

import Hero from "../../components/layout/Hero";
import Container from "../../components/layout/Container";

import ThemeRegion, { RegionName } from "../../App/ThemeRegion";

const CollectableListItemWrapper = styled.div`
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

interface CollectableListItemProps {
  title: string;
  url: string;
  children?: ReactNode;
}

// {<ThemeRegion region={getRegionFromTitle(location.title)}>}
// // </ThemeRegion>
const CollectableListItem = ({
  title,
  url,
  children
}: CollectableListItemProps) => (
  <CollectableListItemWrapper>
    <Link to={`/collectables/${url}`}>
      <h2>{title}</h2>
      {children}
    </Link>
  </CollectableListItemWrapper>
);

const getPercentage = (amount: number, total: number) => {
  const percentage = Math.floor((amount * 100) / total);
  return `${percentage}%`;
};

const CollectablesIndexPage = () => {
  // const appData = useContext(AppDataContext);
  // @ts-ignore
  // const { locations } = appData;

  // @ts-ignore
  const { heartPieces, goldSkulltulas, softSoilLocations } = useContext(
    AppDataContext
  );

  const appState = useContext(AppStateContext);

  const {
    collectedHearts
    // @ts-ignore
  } = appState.heartPieces;

  const {
    collectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  const {
    collectedSoftSoilLocations
    // @ts-ignore
  } = appState.softSoilLocations;

  return (
    <>
      <Hero>
        <Container>
          <h1>Collectables</h1>
        </Container>
      </Hero>
      <Container>
        <CollectableListItem url="heart-pieces" title="Heart Pieces">
          <h4>
            {collectedHearts.length}/{heartPieces.length}:&nbsp;
            {getPercentage(collectedHearts.length, heartPieces.length)}
          </h4>
        </CollectableListItem>

        <CollectableListItem url="gold-skulltulas" title="Gold Skulltulas">
          <h4>
            {collectedGoldSkulltulas.length}/{goldSkulltulas.length}:&nbsp;
            {getPercentage(
              collectedGoldSkulltulas.length,
              goldSkulltulas.length
            )}
          </h4>
        </CollectableListItem>

        <CollectableListItem
          url="soft-soil-locations"
          title="Soft Soil Locations"
        >
          <h4>
            {collectedSoftSoilLocations.length}/{softSoilLocations.length}
            :&nbsp;
            {getPercentage(
              collectedSoftSoilLocations.length,
              softSoilLocations.length
            )}
          </h4>
        </CollectableListItem>
      </Container>
    </>
  );
};

export default CollectablesIndexPage;
