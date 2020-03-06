import React, { ReactNode, useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";
import FancyBlockLink from "components/FancyBlockLink";

const CollectableListItemWrapper = styled.div`
  margin-bottom: 2rem;

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.text.color.primary}
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

const CollectableListItem = ({
  title,
  url,
  children
}: CollectableListItemProps) => (
  <CollectableListItemWrapper>
    <FancyBlockLink title={title} to={`/collectables/${url}`}>
      {children}
    </FancyBlockLink>
  </CollectableListItemWrapper>
);

const getPercentage = (amount: number, total: number) => {
  const percentage = Math.floor((amount * 100) / total);
  return `${percentage}%`;
};

const CollectablesIndexPage = () => {
  const {
    heartPieces,
    goldSkulltulas,
    softSoilLocations,
    greatFairyFountains
  } = useContext(AppDataContext);

  const appState = useContext(AppStateContext);

  const { collectedHearts } = appState.heartPieces;
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;
  const { collectedSoftSoilLocations } = appState.softSoilLocations;
  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

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

        <CollectableListItem
          url="great-fairy-fountains"
          title="Great Fairy Fountains"
        >
          <h4>
            {collectedGreatFairyFountains.length}/{greatFairyFountains.length}
            :&nbsp;
            {getPercentage(
              collectedGreatFairyFountains.length,
              greatFairyFountains.length
            )}
          </h4>
        </CollectableListItem>
      </Container>
    </>
  );
};

export default CollectablesIndexPage;
