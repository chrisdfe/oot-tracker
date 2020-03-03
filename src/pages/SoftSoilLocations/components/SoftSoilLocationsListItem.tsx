import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";

export interface Props {
  softSoilLocation: SoftSoilLocationData;
}

const Paragraph = styled.p`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// TODO - move out into utility
const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({ softSoilLocation }: Props) => {
  // const imageSrc = require(`../../../data/images/${
  //   goldSkulltula.localImageUrl
  // }`);

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
      heading={<strong>#{padNumber(softSoilLocation.number)}</strong>}
    >
      {/*<ImageWrapper>
            <img src={imageSrc} />
          </ImageWrapper>*/}
      <Paragraph>
        <strong>directions:</strong> {softSoilLocation.directions}
      </Paragraph>

      <Paragraph>
        <strong>reward:</strong> {softSoilLocation.rewards}
      </Paragraph>
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
