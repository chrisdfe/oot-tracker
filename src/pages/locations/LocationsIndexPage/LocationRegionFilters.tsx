import React from "react";
import styled, { css } from "styled-components";

import ThemeRegion from "../../../App/ThemeRegion";

import { Region } from "../../../data/types/Region";

import hexToRGB from "../../../utils/hexToRGB";

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

const ListWrapper = styled.div`
  display: flex;
`;

interface ListItemButtonProps {
  isActive: boolean;
}

const ListItemButton = styled.button<ListItemButtonProps>`
  display: block;
  padding: 0.3rem 0.5rem;
  // border: 2px solid ${({ theme }) => theme.border.color.primary};
  border: 0 none;
  border-bottom: 2px solid transparent;
  background-color: ${({ theme }) => theme.background.color.primary};
  color: ${({ theme }) => theme.text.color.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;

  margin-right: 0.5rem;
  border-radius: 3px;

  transition: opacity 0.2s;
  ${({ theme, isActive }) =>
    isActive
      ? css`
          // box-shadow: 0 0 0 3px ${theme.border.color.primary};
          // border-bottom: 2px solid ${theme.border.color.primary};
          background-color: ${({ theme }) => theme.background.color.primary};
        `
      : ""}


  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 0 none;
    background-color: ${({ theme, isActive }) =>
      hexToRGB(theme.background.color.primary, isActive ? 1 : 0.5)};
  }

  &:last-child {
    margin-right: 0;
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
      <ListWrapper>
        {regions.map(region => (
          <ThemeRegion key={region.slug} regionSlug={region.slug}>
            <ListItemButton
              isActive={currentRegionFilterId === region.id}
              onClick={() => {
                onRegionSelect(region);
              }}
            >
              {region.title}
            </ListItemButton>
          </ThemeRegion>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default LocationRegionFilters;
