import React, { ReactNode } from "react";
import styled from "styled-components";

// position: sticky;
// top: 0;
const Wrapper = styled.div`
  background-color: #fff;
  // border-bottom: 1px solid #333;
  padding: 0.2rem 0;
`;

const ContentWrapper = styled.div``;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
            hearts collected: {collectedHearts.length}/{allHeartPieces.length}
          </Heading>
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
        </HeadingWrapper>
      </ContentWrapper>
    </div>
  </Wrapper>
);

export default StickyInfoBar;
