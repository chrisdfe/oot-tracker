import React from "react";
import styled from "styled-components";

import { GoldSkulltula } from "data/types/GoldSkulltula";

import GoldSkulltulaListItem from "./GoldSkulltulaListItem";

interface Props {
  goldSkulltulas: GoldSkulltula[];
}

const GoldSkulltulaListWrapper = styled.div``;

const HeartPieceList = ({ goldSkulltulas }: Props) => {
  return (
    <GoldSkulltulaListWrapper>
      {goldSkulltulas.map(goldSkulltula => (
        <GoldSkulltulaListItem
          key={goldSkulltula.number}
          goldSkulltula={goldSkulltula}
        />
      ))}
    </GoldSkulltulaListWrapper>
  );
};

export default HeartPieceList;
