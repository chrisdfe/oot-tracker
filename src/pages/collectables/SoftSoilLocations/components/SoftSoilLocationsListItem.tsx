import React, { useContext } from "react";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import padNumber from "../../../../utils/padNumber";
import fetchedImagesToRenderedImages from "../../../../utils/fetchedImagesToRenderedImages";

import { SoftSoilLocation } from "../../../../data/types/SoftSoilLocation";

export interface Props {
  softSoilLocation: SoftSoilLocation;
}

const HeartPieceListItem = ({ softSoilLocation }: Props) => {
  const appState = useContext(AppStateContext);

  const images = fetchedImagesToRenderedImages(softSoilLocation.images);

  const {
    collectedSoftSoilLocations,
    toggleCollectedSoftSoilLocation
  } = appState.softSoilLocations;

  const hasBeenCollected = collectedSoftSoilLocations.includes(
    softSoilLocation.number
  );

  return (
    <CollectableDetail
      hasBeenCollected={hasBeenCollected}
      onToggleCollected={() => {
        toggleCollectedSoftSoilLocation(softSoilLocation.number);
      }}
      thumbnails={images}
      images={images}
      heading={<strong>#{padNumber(softSoilLocation.number, 2)}</strong>}
    >
      <TitledParagraph
        title="directions"
        paragraphs={[softSoilLocation.directions]}
      />

      <TitledParagraph title="reward" paragraphs={[softSoilLocation.rewards]} />
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
