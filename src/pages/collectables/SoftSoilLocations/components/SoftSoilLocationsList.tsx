import React from "react";
import styled from "styled-components";

import { SoftSoilLocation } from "data/types/SoftSoilLocation";

import SoftSoilLocationsListItem from "./SoftSoilLocationsListItem";

interface Props {
  softSoilLocations: SoftSoilLocation[];
}

const SoftSoilLocationsListWrapper = styled.div``;

const SoftSoilLocationsList = ({ softSoilLocations }: Props) => {
  return (
    <SoftSoilLocationsListWrapper>
      {softSoilLocations.map(softSoilLocation => (
        <SoftSoilLocationsListItem
          key={softSoilLocation.number}
          softSoilLocation={softSoilLocation}
        />
      ))}
    </SoftSoilLocationsListWrapper>
  );
};

export default SoftSoilLocationsList;
