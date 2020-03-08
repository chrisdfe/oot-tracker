import React from "react";
import styled from "styled-components";

import { Region } from "data/types/Region";

import RegionSelector from "components/RegionSelector";
import StickySectionHeader from "components/StickySectionHeader";

interface SectionHeadingProps {
  title?: string;
  showRegionSelector?: boolean;
  onRegionSelect: (region: Region) => void;
  currentRegionFilterId: string;
}

const SectionHeadingWrapper = styled.div``;

const RegionSelectorWrapper = styled.div`
  margin-left: auto;
`;

const SectionHeading = ({
  title,
  showRegionSelector,
  onRegionSelect,
  currentRegionFilterId
}: SectionHeadingProps) => (
  <StickySectionHeader title={title}>
    {showRegionSelector && (
      <RegionSelectorWrapper>
        <RegionSelector
          onRegionSelect={onRegionSelect}
          currentRegionFilterId={currentRegionFilterId}
        />
      </RegionSelectorWrapper>
    )}
  </StickySectionHeader>
);

SectionHeading.defaultProps = {
  showRegionSelector: true
};

export default SectionHeading;
