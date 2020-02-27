import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border.color.primary};
  padding: 0.5rem 0;
  text-align: center;

  button {
    font-size: 0.7em;
  }
`;

const ContentWrapper = styled.div``;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  display: block;
  margin: 0 1rem 0 0;
`;

const StickyInfoBar = () => {
  const appData = useContext(AppDataContext);
  const appState = useContext(AppStateContext);

  // @ts-ignore
  const { softSoilLocations } = appData;

  const {
    collectedSoftSoilLocations,
    setCollectedSoftSoilLocations,
    toggleCollectedSoftSoilLocation
    // @ts-ignore
  } = appState.softSoilLocations;

  return (
    <Wrapper>
      <div className="container">
        <ContentWrapper>
          <HeadingWrapper>
            <Heading>
              soft soil locations: {collectedSoftSoilLocations.length}/
              {softSoilLocations.length}
            </Heading>
          </HeadingWrapper>
          <button
            onClick={() => {
              setCollectedSoftSoilLocations(
                // @ts-ignore
                softSoilLocations.map(
                  // @ts-ignore
                  softSoilLocation => softSoilLocation.number
                )
              );
            }}
          >
            collect all
          </button>
          <button
            onClick={() => {
              setCollectedSoftSoilLocations([]);
            }}
          >
            uncollect all
          </button>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default StickyInfoBar;
