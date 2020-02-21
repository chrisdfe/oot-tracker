import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  // border-bottom: 1px solid #333;
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

interface Props {
  collectedHearts: string[];
  allHeartPieces: HeartPiece[];
  setCollectedHearts: (heartNumbers: string[]) => void;
}

const StickyInfoBar = ({
  collectedHearts,
  allHeartPieces,
  setCollectedHearts
}: Props) => (
  <Wrapper>
    <div className="container">
      <ContentWrapper>
        <HeadingWrapper>
          <Heading>
            heart pieces: {collectedHearts.length}/{allHeartPieces.length}
          </Heading>
        </HeadingWrapper>
        <button
          onClick={() => {
            setCollectedHearts(
              allHeartPieces.map(heartPiece => heartPiece.number)
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

export default StickyInfoBar;
