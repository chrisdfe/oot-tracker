import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";

export interface Props {
  goldSkulltula: GoldSkulltulaData;
}

const Paragraph = styled.p`
  line-height: 1.7em;
  // font-size: 14px;
  margin: 0 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ConditionsParagraph = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;

const DescriptionParagraph = styled(Paragraph)``;

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
      <ConditionsParagraph>
        <strong>conditions:</strong> {goldSkulltula.conditions}
      </ConditionsParagraph>

      {goldSkulltula.directions.split("\n").map((paragraph, index) => (
        <DescriptionParagraph key={`paragraph-${index}`}>
          {paragraph}
        </DescriptionParagraph>
      ))}
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
