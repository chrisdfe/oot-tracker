import React from "react";
import styled from "styled-components";

import SoftSoilLocationsListItem from "./SoftSoilLocationsListItem";

interface Props {
  softSoilLocations: SoftSoilLocationData[];
}

const SoftSoilLocationsListWrapper = styled.div`
  margin: 1rem 0;
`;

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
