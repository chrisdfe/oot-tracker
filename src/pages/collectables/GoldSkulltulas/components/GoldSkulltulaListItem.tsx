import React, { useContext } from "react";

import { AppStateContext } from "App/AppState";

import CollectableDetail from "components/CollectableDetail";
import TitledParagraph from "components/typography/TitledParagraph";

import padNumber from "utils/padNumber";
import fetchedImagesToRenderedImages from "utils/fetchedImagesToRenderedImages";

import { GoldSkulltula } from "data/types/GoldSkulltula";

export interface Props {
  goldSkulltula: GoldSkulltula;
}

const HeartPieceListItem = ({ goldSkulltula }: Props) => {
  const appState = useContext(AppStateContext);

  const images = fetchedImagesToRenderedImages(goldSkulltula.images);

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
      thumbnails={images}
      images={images}
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
