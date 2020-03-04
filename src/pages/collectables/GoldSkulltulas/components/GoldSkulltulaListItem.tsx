import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import { GoldSkulltula } from "../../../../data/types/GoldSkulltula";

import padNumber from "../../../../utils/padNumber";

export interface Props {
  goldSkulltula: GoldSkulltula;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HeartPieceListItem = ({ goldSkulltula }: Props) => {
  const imageSrc = require(`../../../../images/build/${
    goldSkulltula.images[0].localImageUrl
  }`);

  const appState = useContext(AppStateContext);

  const {
    collectedGoldSkulltulas,
    toggleCollectedGoldSkulltula
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
