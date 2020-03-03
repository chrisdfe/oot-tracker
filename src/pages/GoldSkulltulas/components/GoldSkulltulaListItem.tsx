import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";

export interface Props {
  goldSkulltula: GoldSkulltulaData;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({ goldSkulltula }: Props) => {
  const imageSrc = require(`../../../data/images/${
    goldSkulltula.localImageUrl
  }`);

  const appState = useContext(AppStateContext);

  const {
    collectedGoldSkulltulas,
    toggleCollectedGoldSkulltula
    // @ts-ignore
  } = appState.goldSkulltulas;

  const hasBeenCollected = collectedGoldSkulltulas.includes(
    goldSkulltula.number
  );

  return (
    <CollectableDetail
      hasBeenCollected={hasBeenCollected}
      onToggleCollected={() => {
        toggleCollectedGoldSkulltula(goldSkulltula.number);
      }}
      thumbnails={[imageSrc]}
      images={[imageSrc]}
      heading={
        <>
          <strong>#{padNumber(goldSkulltula.number)}</strong>&nbsp;
          {goldSkulltula.location}
        </>
      }
    >
      <Paragraph>
        <strong>conditions:</strong> {goldSkulltula.conditions}
      </Paragraph>

      {goldSkulltula.directions.split("\n").map((paragraph, index) => (
        <Paragraph key={`paragraph-${index}`}>{paragraph}</Paragraph>
      ))}
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
