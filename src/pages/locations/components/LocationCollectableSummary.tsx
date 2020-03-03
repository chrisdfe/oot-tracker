import React, { ReactNode } from "react";
import styled from "styled-components";

const Summary = styled.h4`
  margin: 0;

  span {
    display: inline-block;
    margin-right: 1rem;
    &:after {
      content: '|'
      display: inline-block;
      padding: 0 0.5rem;
    }

    &:last-child: {
      &:after {
        content: '';
        padding: 0;
      }
    }
  }
`;

interface Props {
  location: any;
}

const LocationCollectableSummary = ({ location }: Props) => {
  return (
    <Summary>
      {/*@ts-ignore*/}
      <span>heart pieces:&nbsp;{location.heartPieceIds.length}</span>
      <span>
        gold skulltulas:&nbsp;
        {/* @ts-ignore */}
        {location.goldSkulltulaIds.length}
      </span>
      <span>
        soft soil locations:&nbsp;
        {/* @ts-ignore */}
        {location.softSoilLocationIds.length}
      </span>
    </Summary>
  );
};

export default LocationCollectableSummary;
