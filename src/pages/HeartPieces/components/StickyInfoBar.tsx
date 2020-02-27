import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

import Button from "../../../components/Button";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border.color.primary};
  padding: 0.5rem 0;
  text-align: center;

  button {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ContentWrapper = styled.div``;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  display: block;
  margin: 0 1rem 1rem 0;
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
          <Button
            onClick={() => {
              setCollectedHearts(
                // @ts-ignore
                heartPieces.map(heartPiece => heartPiece.number)
              );
            }}
          >
            collect all
          </Button>
          <Button
            onClick={() => {
              setCollectedHearts([]);
            }}
          >
            uncollect all
          </Button>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default StickyInfoBar;
