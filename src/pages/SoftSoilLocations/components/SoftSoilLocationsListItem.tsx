import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import CollectableDetail from "../../../components/CollectableDetail";

export interface Props {
  softSoilLocation: SoftSoilLocationData;
}

const Paragraph = styled.p`
  line-height: 1.7em;
  margin: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ConditionsParagraph = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;

const DescriptionParagraph = styled(Paragraph)`
  // font-size: 14px;
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
      <ConditionsParagraph>
        <strong>directions:</strong> {softSoilLocation.directions}
      </ConditionsParagraph>

      <DescriptionParagraph>
        <strong>reward:</strong> {softSoilLocation.rewards}
      </DescriptionParagraph>
    </CollectableDetail>
  );
};

export default HeartPieceListItem;
