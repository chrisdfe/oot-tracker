import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { AppDataContext } from "App/AppData";
import ThemeRegion from "App/ThemeRegion";

import { Region } from "data/types/Region";

import hexToRGB from "utils/hexToRGB";

interface Props {
  onRegionSelect: (region: Region) => void;
  currentRegionFilterId: string;
}

const ListWrapper = styled.div`
  display: flex;
`;

interface ListItemButtonProps {
  isActive: boolean;
}

const ListItemButton = styled.button<ListItemButtonProps>`
  display: block;
  padding: 0.3rem 0.5rem;
  border: 2px solid ${({ theme }) => theme.rawColors.white};
  background-color: ${({ theme }) => theme.rawColors.white};
  color: ${({ theme }) => theme.text.color.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;

  margin-right: 0.5rem;
  border-radius: 3px;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) =>
      hexToRGB(theme.background.color.primary, 0.5)};
  }

  &:focus {
    outline: 0 none;
    background-color: ${({ theme, isActive }) =>
      hexToRGB(theme.background.color.primary, isActive ? 1 : 0.5)};
  }

  &:last-child {
    margin-right: 0;
  }

  ${({ theme, isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.background.color.primary};
          border-color: ${({ theme }) => theme.border.color.primary};
        `
      : ""}
`;

const LocationRegionFilters = ({
  onRegionSelect,
  currentRegionFilterId,
}: Props) => {
  const { regions } = useContext(AppDataContext);

  return (
    <ListWrapper>
      {regions.map((region) => (
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
  );
};

export default LocationRegionFilters;
