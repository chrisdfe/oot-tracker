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
    font-size: 14px;
  }

  h3 {
    margin: 1rem 0;
    font-family: ${({ theme }) => theme.rawFonts.spaceMono};
    font-weight: 600;
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
      opacity: 0.5;
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
        <h3>
          {collectedLocationHeartPieces.length}/{location.heartPieceIds.length}
        </h3>
        <span>heart pieces</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.goldSkulltulaIds.length}>
        <h3>
          {collectedLocationGoldSkulltulas.length}/
          {location.goldSkulltulaIds.length}
        </h3>
        <span>gold skulltulas</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.softSoilLocationIds.length}>
        <h3>
          {collectedLocationSoftSoilLocations.length}/
          {location.softSoilLocationIds.length}
        </h3>
        <span>soft soil locations</span>
      </SummaryForCollectable>

      <SummaryForCollectable total={location.greatFairyFountainIds.length}>
        <h3>
          {collectedLocationGreatFairyFountains.length}/
          {location.greatFairyFountainIds.length}
        </h3>
        <span>great fairy fountains</span>
      </SummaryForCollectable>
    </Summary>
  );
};

export default LocationCollectableSummary;
