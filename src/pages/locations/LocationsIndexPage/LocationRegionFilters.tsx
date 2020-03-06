import React from "react";
import styled from "styled-components";

import { Region } from "data/types/Region";

import hexToRGB from "utils/hexToRGB";

import RegionSelector from "components/RegionSelector";

interface Props {
  regions: Region[];
  onRegionSelect: (region: Region) => void;
  currentRegionFilterId: string;
}

const Wrapper = styled.div`
  margin-bottom: 1rem;

  h4 {
    color: ${({ theme }) => theme.text.color.primary};
    margin: 0 0 1rem;
  }
`;

const LocationRegionFilters = ({
  regions,
  onRegionSelect,
  currentRegionFilterId
}: Props) => {
  return (
    <Wrapper>
      <h4>Filter regions</h4>
      <RegionSelector
        onRegionSelect={onRegionSelect}
        currentRegionFilterId={currentRegionFilterId}
      />
    </Wrapper>
  );
};

export default LocationRegionFilters;
