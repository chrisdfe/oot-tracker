import { GameLocation } from "data/types/GameLocation";
import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { AppDataContext } from "App/AppData";
import { AppStateContext } from "App/AppState";

import ProgressBar from "components/ProgressBar";

import {
  filterCollectablesByLocation,
  getCollectablesByIds,
} from "../../../utils/appState";

const Summary = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: stretch;

  h3 {
    margin: 0 0 0.5rem;
    font-family: ${({ theme }) => theme.rawFonts.spaceMono};
    font-weight: 600;
    color: ${({ theme }) => theme.text.color.primary};
  }

  span {
    display: block;
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.text.color.primary};
    font-size: 13px;
    text-align: center;
  }
`;

interface SummaryForCollectableProps {
  total: number;
}

const SummaryForCollectable = styled.div<SummaryForCollectableProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 25%;
  margin: 1rem 0;

  ${({ total }) =>
    total === 0 &&
    css`
      opacity: 0.5;
    `}
`;

const ProgressBarWrapper = styled.div`
  margin-top: auto;
  padding: 0 0.5rem;
`;

interface Props {
  location?: GameLocation;
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

  // TODO - this is very messy and unperformant code right here
  let totalHeartPieces;
  let currentCollectedHeartPieces;

  let totalGoldSkulltulas;
  let currentCollectedGoldSkulltulas;

  let totalSoftSoilLocations;
  let currentCollectedSoftSoilLocations;

  let totalGreatFairyFountains;
  let currentCollectedGreatFairyFountains;

  if (location) {
    totalHeartPieces = location.heartPieceIds.length;
    currentCollectedHeartPieces = filterCollectablesByLocation(
      getCollectablesByIds(heartPieces, collectedHearts),
      location
    ).length;

    totalGoldSkulltulas = location.goldSkulltulaIds.length;
    currentCollectedGoldSkulltulas = filterCollectablesByLocation(
      getCollectablesByIds(goldSkulltulas, collectedGoldSkulltulas),
      location
    ).length;

    totalSoftSoilLocations = location.softSoilLocationIds.length;
    currentCollectedSoftSoilLocations = filterCollectablesByLocation(
      getCollectablesByIds(softSoilLocations, collectedSoftSoilLocations),
      location
    ).length;

    totalGreatFairyFountains = location.greatFairyFountainIds.length;
    currentCollectedGreatFairyFountains = filterCollectablesByLocation(
      getCollectablesByIds(greatFairyFountains, collectedGreatFairyFountains),
      location
    ).length;
  } else {
    currentCollectedHeartPieces = collectedHearts.length;
    totalHeartPieces = heartPieces.length;

    totalGoldSkulltulas = goldSkulltulas.length;
    currentCollectedGoldSkulltulas = collectedGoldSkulltulas.length;

    totalSoftSoilLocations = softSoilLocations.length;
    currentCollectedSoftSoilLocations = collectedSoftSoilLocations.length;

    totalGreatFairyFountains = greatFairyFountains.length;
    currentCollectedGreatFairyFountains = collectedGreatFairyFountains.length;
  }

  return (
    <Summary>
      <SummaryForCollectable total={totalHeartPieces}>
        <h3>
          {currentCollectedHeartPieces}/{totalHeartPieces}
        </h3>

        <span>heart pieces</span>

        <ProgressBarWrapper>
          <ProgressBar
            currentAmount={currentCollectedHeartPieces}
            totalAmount={totalHeartPieces}
            showPercentage={false}
          />
        </ProgressBarWrapper>
      </SummaryForCollectable>

      <SummaryForCollectable total={totalGoldSkulltulas}>
        <h3>
          {currentCollectedGoldSkulltulas}/{totalGoldSkulltulas}
        </h3>

        <span>gold skulltulas</span>

        <ProgressBarWrapper>
          <ProgressBar
            currentAmount={currentCollectedGoldSkulltulas}
            totalAmount={totalGoldSkulltulas}
            showPercentage={false}
          />
        </ProgressBarWrapper>
      </SummaryForCollectable>

      <SummaryForCollectable total={totalSoftSoilLocations}>
        <h3>
          {currentCollectedSoftSoilLocations}/{totalSoftSoilLocations}
        </h3>

        <span>soft soil locations</span>

        <ProgressBarWrapper>
          <ProgressBar
            currentAmount={currentCollectedSoftSoilLocations}
            totalAmount={totalSoftSoilLocations}
            showPercentage={false}
          />
        </ProgressBarWrapper>
      </SummaryForCollectable>

      <SummaryForCollectable total={totalGreatFairyFountains}>
        <h3>
          {currentCollectedGreatFairyFountains}/{totalGreatFairyFountains}
        </h3>

        <span>great fairy fountains</span>

        <ProgressBarWrapper>
          <ProgressBar
            currentAmount={currentCollectedGreatFairyFountains}
            totalAmount={totalGreatFairyFountains}
            showPercentage={false}
          />
        </ProgressBarWrapper>
      </SummaryForCollectable>
    </Summary>
  );
};

export default LocationCollectableSummary;
