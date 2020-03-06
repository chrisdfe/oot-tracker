import React from "react";
import styled from "styled-components";

import { Region } from "data/types/Region";

import slugify from "utils/slugify";

import RegionSelector from "components/RegionSelector";

interface SectionHeadingProps {
  title?: string;
  showRegionSelector?: boolean;
  onRegionSelect: (region: Region) => void;
  currentRegionFilterId: string;
}

const SectionHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
  margin: 0 0 1rem;

  h2 {
    padding: 0;
    margin: 0;
  }
`;

const RegionSelectorWrapper = styled.div`
  margin-left: auto;
`;

const SectionHeading = ({
  title,
  showRegionSelector,
  onRegionSelect,
  currentRegionFilterId
}: SectionHeadingProps) => (
  <SectionHeadingWrapper>
    {title && <h2 id={slugify(title)}>{title}</h2>}
    {showRegionSelector && (
      <RegionSelectorWrapper>
        <RegionSelector
          onRegionSelect={onRegionSelect}
          currentRegionFilterId={currentRegionFilterId}
        />
      </RegionSelectorWrapper>
    )}
  </SectionHeadingWrapper>
);

SectionHeading.defaultProps = {
  showRegionSelector: true
};

export default SectionHeading;
