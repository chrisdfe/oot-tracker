import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../AppData";
import { AppStateContext } from "../../../AppState";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #333;
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
  const { goldSkulltulas } = appData;

  const {
    collectedGoldSkulltulas,
    setCollectedGoldSkulltulas,
    toggleCollectedGoldSkulltula
    // @ts-ignore
  } = appState.goldSkulltulas;

  return (
    <Wrapper>
      <div className="container">
        <ContentWrapper>
          <HeadingWrapper>
            <Heading>
              gold skulltulas: {collectedGoldSkulltulas.length}/
              {goldSkulltulas.length}
            </Heading>
          </HeadingWrapper>
          <button
            onClick={() => {
              setCollectedGoldSkulltulas(
                // @ts-ignore
                goldSkulltulas.map(goldSkulltula => goldSkulltula.number)
              );
            }}
          >
            collect all
          </button>
          <button
            onClick={() => {
              setCollectedGoldSkulltulas([]);
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
