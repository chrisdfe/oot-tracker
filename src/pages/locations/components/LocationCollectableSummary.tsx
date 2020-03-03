import React, { useContext, ReactNode } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

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

  const {
    // @ts-ignore
    heartPieces,
    // @ts-ignore
    goldSkulltulas,
    // @ts-ignore
    softSoilLocations
  } = appData;

  const {
    collectedHearts
    // @ts-ignore
  } = appState.heartPieces;

  const {
    collectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  const {
    collectedSoftSoilLocations
    // @ts-ignore
  } = appState.softSoilLocations;

  const locationHeartPieces = filterCollectablesByLocation(
    heartPieces,
    location
  );
  const collectedLocationHeartPieces = filterCollectablesByLocation(
    getCollectablesByIds(heartPieces, collectedHearts),
    location
  );

  const locationGoldSkulltulas = filterCollectablesByLocation(
    goldSkulltulas,
    location
  );
  const collectedLocationGoldSkulltulas = filterCollectablesByLocation(
    getCollectablesByIds(goldSkulltulas, collectedGoldSkulltulas),
    location
  );

  const locationSoftSoilLocations = filterCollectablesByLocation(
    softSoilLocations,
    location
  );
  const collectedLocationSoftSoilLocations = filterCollectablesByLocation(
    getCollectablesByIds(softSoilLocations, collectedSoftSoilLocations),
    location
  );

  return (
    <Summary>
      {/*@ts-ignore*/}
      <SummaryForCollectable>
        heart pieces:&nbsp;
        <span>
          {collectedLocationHeartPieces.length}/{location.heartPieceIds.length}
        </span>
      </SummaryForCollectable>
      <SummaryForCollectable>
        gold skulltulas:&nbsp;
        {/* @ts-ignore */}
        <span>
          {collectedLocationGoldSkulltulas.length}/
          {location.goldSkulltulaIds.length}
        </span>
      </SummaryForCollectable>
      <SummaryForCollectable>
        soft soil locations:&nbsp;
        {/* @ts-ignore */}
        <span>
          {collectedLocationSoftSoilLocations.length}/
          {location.softSoilLocationIds.length}
        </span>
      </SummaryForCollectable>
    </Summary>
  );
};

export default LocationCollectableSummary;
