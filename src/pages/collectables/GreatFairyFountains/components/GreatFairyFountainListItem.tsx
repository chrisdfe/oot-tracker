import React, { useContext } from "react";

import { AppStateContext } from "App/AppState";

import CollectableDetail from "components/CollectableDetail";
import TitledParagraph from "components/typography/TitledParagraph";

import padNumber from "utils/padNumber";
import fetchedImagesToRenderedImages from "utils/fetchedImagesToRenderedImages";

import { GreatFairyFountain } from "data/types/GreatFairyFountain";

export interface Props {
  greatFairyFountain: GreatFairyFountain;
}

const GreatFairyFountainListItem = ({ greatFairyFountain }: Props) => {
  const appState = useContext(AppStateContext);

  const images = fetchedImagesToRenderedImages(greatFairyFountain.images);

  const {
    collectedGreatFairyFountains,
    toggleCollectedGreatFairyFountain
  } = appState.greatFairyFountains;

  const hasBeenCollected = collectedGreatFairyFountains.includes(
    greatFairyFountain.number
  );

  return (
    <CollectableDetail
      hasBeenCollected={hasBeenCollected}
      onToggleCollected={() => {
        toggleCollectedGreatFairyFountain(greatFairyFountain.number);
      }}
      thumbnails={images}
      images={images}
      heading={
        <>
          <strong>#{padNumber(greatFairyFountain.number, 2)}</strong>&nbsp;
          {greatFairyFountain.location}
        </>
      }
    >
      <TitledParagraph
        title="conditions"
        paragraphs={[greatFairyFountain.conditions]}
      />

      <TitledParagraph
        title="reward"
        paragraphs={[greatFairyFountain.reward]}
      />

      <TitledParagraph
        title="directions"
        paragraphs={greatFairyFountain.directions.split("\n")}
      />
    </CollectableDetail>
  );
};

export default GreatFairyFountainListItem;
