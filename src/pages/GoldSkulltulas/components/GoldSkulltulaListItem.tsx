import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";
import TitledParagraph from "../../../components/typography/TitledParagraph";

import padNumber from "../../../utils/padNumber";

export interface Props {
  goldSkulltula: GoldSkulltulaData;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

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
      <TitledParagraph
        title="conditions"
        paragraphs={[goldSkulltula.conditions]}
      />
      <TitledParagraph
        title="directions"
        paragraphs={goldSkulltula.directions.split("\n")}
      />
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
