import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";
import TitledParagraph from "../../../components/typography/TitledParagraph";

import padNumber from "../../../utils/padNumber";

export interface Props {
  softSoilLocation: SoftSoilLocationData;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HeartPieceListItem = ({ softSoilLocation }: Props) => {
  const imageUrls = softSoilLocation.images.map(({ localImageUrl }) =>
    require(`../../../data/images/${localImageUrl}`)
  );

  const appState = useContext(AppStateContext);

  const {
    collectedSoftSoilLocations,
    toggleCollectedSoftSoilLocation
    // @ts-ignore
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
      heading={<strong>#{padNumber(softSoilLocation.number)}</strong>}
    >
      {/*<ImageWrapper>
            <img src={imageSrc} />
          </ImageWrapper>*/}

      <TitledParagraph
        title="directions"
        paragraphs={[softSoilLocation.directions]}
      />

      <TitledParagraph title="reward" paragraphs={[softSoilLocation.rewards]} />
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
