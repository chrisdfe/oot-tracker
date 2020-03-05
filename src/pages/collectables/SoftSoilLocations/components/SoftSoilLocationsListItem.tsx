import React, { useContext } from "react";

import { AppStateContext } from "../../../../App/AppState";

import CollectableDetail from "../../../../components/CollectableDetail";
import TitledParagraph from "../../../../components/typography/TitledParagraph";

import padNumber from "../../../../utils/padNumber";

import { SoftSoilLocation } from "../../../../data/types/SoftSoilLocation";

export interface Props {
  softSoilLocation: SoftSoilLocation;
}

const HeartPieceListItem = ({ softSoilLocation }: Props) => {
  const imageUrls = softSoilLocation.images.map(({ localImageUrl }) =>
    require(`../../../../images/build/${localImageUrl}`)
  );

  const appState = useContext(AppStateContext);

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
      thumbnails={imageUrls}
      images={imageUrls}
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
