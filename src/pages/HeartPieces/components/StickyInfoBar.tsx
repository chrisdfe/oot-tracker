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
  const { heartPieces } = appData;

  const {
    collectedHearts,
    setCollectedHearts,
    toggleCollectedHeart
    // @ts-ignore
  } = appState.heartPieces;
  return (
    <Wrapper>
      <div className="container">
        <ContentWrapper>
          <HeadingWrapper>
            <Heading>
              heart pieces: {collectedHearts.length}/{heartPieces.length}
            </Heading>
          </HeadingWrapper>
          <button
            onClick={() => {
              setCollectedHearts(
                // @ts-ignore
                heartPieces.map(heartPiece => heartPiece.number)
              );
            }}
          >
            collect all
          </button>
          <button
            onClick={() => {
              setCollectedHearts([]);
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
