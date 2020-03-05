import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import {
  filterCollectablesByLocation,
  getCollectablesByIds
} from "../../../utils/appState";

const SummaryForCollectable = styled.div`
  margin-right: 1rem;
  font-weight: normal;

  span {
    font-weight: bold;
  }

  &:after {
    content: '+'
    display: block;
    padding: 0 0.5rem;
  }

  &:last-child: {
    &:after {
      content: '';
      padding: 0;
    }
  }
`;

const Summary = styled.h4`
  margin: 0;
  display: flex;
  flex-direction: row;
`;

interface Props {
  location: any;
}

const LocationCollectableSummary = ({ location }: Props) => {
  const appState = useContext(AppStateContext);
  const appData = useContext(AppDataContext);

  const { heartPieces, goldSkulltulas, softSoilLocations } = appData;

  const { collectedHearts } = appState.heartPieces;
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;
  const { collectedSoftSoilLocations } = appState.softSoilLocations;

  const collectedLocationHeartPieces = filterCollectablesByLocation(
    getCollectablesByIds(heartPieces, collectedHearts),
    location
  );

  const collectedLocationGoldSkulltulas = filterCollectablesByLocation(
    getCollectablesByIds(goldSkulltulas, collectedGoldSkulltulas),
    location
  );

  const collectedLocationSoftSoilLocations = filterCollectablesByLocation(
    getCollectablesByIds(softSoilLocations, collectedSoftSoilLocations),
    location
  );

  return (
    <Summary>
      <SummaryForCollectable>
        heart pieces:&nbsp;
        <span>
          {collectedLocationHeartPieces.length}/{location.heartPieceIds.length}
        </span>
      </SummaryForCollectable>
      <SummaryForCollectable>
        gold skulltulas:&nbsp;
        <span>
          {collectedLocationGoldSkulltulas.length}/
          {location.goldSkulltulaIds.length}
        </span>
      </SummaryForCollectable>
      <SummaryForCollectable>
        soft soil locations:&nbsp;
        <span>
          {collectedLocationSoftSoilLocations.length}/
          {location.softSoilLocationIds.length}
        </span>
      </SummaryForCollectable>
    </Summary>
  );
};

export default LocationCollectableSummary;
