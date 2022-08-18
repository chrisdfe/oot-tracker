import React, { ReactNode, useContext, useMemo } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";
import PageSection from "components/layout/PageSection";

import FancyBlockLink from "components/FancyBlockLink";
import ProgressBar from "components/ProgressBar";

const CollectableListItemWrapper = styled.div`
  margin-bottom: 2rem;

  h4 {
    margin: 0 0 0.3rem;
    color: ${({ theme }) => theme.text.color.primary}
  }

  span {
    display: inline-block;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.text.color.primary}
  }
`;

const HeroContents = styled.div`
  h1 {
    margin-bottom: 2rem;
  }

  h3 {
    margin: 2rem 0 0.4rem;
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
  children,
}: CollectableListItemProps) => (
  <CollectableListItemWrapper>
    <FancyBlockLink title={title} to={`/collectables/${url}`}>
      {children}
    </FancyBlockLink>
  </CollectableListItemWrapper>
);

const addListLengths = (lists: any[][]) =>
  lists.reduce((acc, list) => acc + list.length, 0);

const CollectablesIndexPage = () => {
  const {
    heartPieces,
    goldSkulltulas,
    softSoilLocations,
    greatFairyFountains,
  } = useContext(AppDataContext);

  const appState = useContext(AppStateContext);

  const { collectedHearts } = appState.heartPieces;
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;
  const { collectedSoftSoilLocations } = appState.softSoilLocations;
  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

  const currentAmount = useMemo(
    () =>
      addListLengths([
        collectedHearts,
        collectedGoldSkulltulas,
        collectedSoftSoilLocations,
        collectedGreatFairyFountains,
      ]),
    [
      collectedHearts,
      collectedGoldSkulltulas,
      collectedSoftSoilLocations,
      collectedGreatFairyFountains,
    ]
  );

  const totalAmount = useMemo(
    () =>
      addListLengths([
        heartPieces,
        goldSkulltulas,
        softSoilLocations,
        greatFairyFountains,
      ]),
    [heartPieces, goldSkulltulas, softSoilLocations, greatFairyFountains]
  );

  return (
    <>
      <Hero>
        <Container>
          <HeroContents>
            <h1>Collectables</h1>

            <h4>
              Total collected: {currentAmount}/{totalAmount}
            </h4>

            <ProgressBar
              currentAmount={currentAmount}
              totalAmount={totalAmount}
            />
          </HeroContents>
        </Container>
      </Hero>

      <PageSection>
        <Container>
          <CollectableListItem url="heart-pieces" title="Heart Pieces">
            <h4>
              {collectedHearts.length}/{heartPieces.length}
            </h4>
            <ProgressBar
              currentAmount={collectedHearts.length}
              totalAmount={heartPieces.length}
            />
          </CollectableListItem>

          <CollectableListItem url="gold-skulltulas" title="Gold Skulltulas">
            <h4>
              {collectedGoldSkulltulas.length}/{goldSkulltulas.length}
            </h4>
            <ProgressBar
              currentAmount={collectedGoldSkulltulas.length}
              totalAmount={goldSkulltulas.length}
            />
          </CollectableListItem>

          <CollectableListItem
            url="soft-soil-locations"
            title="Soft Soil Locations"
          >
            <h4>
              {collectedSoftSoilLocations.length}/{softSoilLocations.length}
            </h4>
            <ProgressBar
              currentAmount={collectedSoftSoilLocations.length}
              totalAmount={softSoilLocations.length}
            />
          </CollectableListItem>

          <CollectableListItem
            url="great-fairy-fountains"
            title="Great Fairy Fountains"
          >
            <h4>
              {collectedGreatFairyFountains.length}/{greatFairyFountains.length}
            </h4>
            <ProgressBar
              currentAmount={collectedGreatFairyFountains.length}
              totalAmount={greatFairyFountains.length}
            />
          </CollectableListItem>
        </Container>
      </PageSection>
    </>
  );
};

export default CollectablesIndexPage;
