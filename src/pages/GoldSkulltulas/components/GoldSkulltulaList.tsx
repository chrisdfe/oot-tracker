import React from "react";
import styled from "styled-components";

import GoldSkulltulaListItem from "./GoldSkulltulaListItem";

interface Props {
  goldSkulltulas: GoldSkulltulaData[];
}

const HeartPieceListWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPieceList = ({ goldSkulltulas }: Props) => {
  return (
    <HeartPieceListWrapper>
      {goldSkulltulas.map(goldSkulltula => (
        <GoldSkulltulaListItem
          key={goldSkulltula.number}
          goldSkulltula={goldSkulltula}
        />
      ))}
    </HeartPieceListWrapper>
  );
};

export default HeartPieceList;
