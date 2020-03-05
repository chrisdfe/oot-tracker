import React from "react";
import styled from "styled-components";

import GreatFairyFountainListItem from "./GreatFairyFountainListItem";

import { GreatFairyFountain } from "../../../../data/types/GreatFairyFountain";

interface Props {
  greatFairyFountains: GreatFairyFountain[];
}

const GreatFairyFountainListWrapper = styled.div``;

const GreatFairyFountainList = ({ greatFairyFountains }: Props) => {
  return (
    <GreatFairyFountainListWrapper>
      {greatFairyFountains.map(greatFairyFountain => (
        <GreatFairyFountainListItem
          key={greatFairyFountain.number}
          greatFairyFountain={greatFairyFountain}
        />
      ))}
    </GreatFairyFountainListWrapper>
  );
};

export default GreatFairyFountainList;
