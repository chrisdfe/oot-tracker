import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { AppDataContext } from "../../../App/AppData";
import { AppStateContext } from "../../../App/AppState";

import {
  filterCollectablesByLocation,
  getCollectablesByIds,
} from "../../../utils/appState";

const Summary = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;

  span {
    margin: 0;
    color: ${({ theme }) => theme.text.color.primary};
  }

  h4 {
    margin: 0 0 0.4rem;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme.text.color.primary};
  }
`;

interface SummaryForCollectableProps {
  total: number;
}

const SummaryForCollectable = styled.div<SummaryForCollectableProps>`
  margin-right: 1.5rem;

  ${({ total }) =>
    total === 0 &&
    css`
      opacity: 0.1;
    `}
`;

interface Props {
  location: any;
}

const LocationCollectableSummary = ({ location }: Props) => {
  const appState = useContext(AppStateContext);
  const appData = useContext(AppDataContext);

  const {
    heartPieces,
    goldSkulltulas,
    softSoilLocations,
    greatFairyFountains,
  } = appData;

  const { collectedHearts } = appState.heartPieces;
  const { collectedGoldSkulltulas } = appState.goldSkulltulas;
  const { collectedSoftSoilLocations } = appState.softSoilLocations;
  const { collectedGreatFairyFountains } = appState.greatFairyFountains;

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

  const collectedLocationGreatFairyFountains = filterCollectablesByLocation(
    getCollectablesByIds(greatFairyFountains, collectedGreatFairyFountains),
    location
  );

  return (
    <Summary>
      <SummaryForCollectable total={location.heartPieceIds.length}>
        <h4>
          {collectedLocationHeartPieces.length}/{location.heartPieceIds.length}
        </h4>
        <span>heart pieces</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.goldSkulltulaIds.length}>
        <h4>
          {collectedLocationGoldSkulltulas.length}/
          {location.goldSkulltulaIds.length}
        </h4>
        <span>gold skulltulas</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.softSoilLocationIds.length}>
        <h4>
          {collectedLocationSoftSoilLocations.length}/
          {location.softSoilLocationIds.length}
        </h4>
        <span>soft soil locations</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.greatFairyFountainIds.length}>
        <h4>
          {collectedLocationGreatFairyFountains.length}/
          {location.greatFairyFountainIds.length}
        </h4>
        <span>great fairy fountains</span>
      </SummaryForCollectable>
    </Summary>
  );
};

export default LocationCollectableSummary;
