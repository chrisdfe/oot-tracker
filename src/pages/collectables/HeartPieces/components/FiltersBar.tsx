import React, { useState } from "react";
import styled, { css } from "styled-components";

import Container from "../../../../components/layout/Container";

interface Props {
  onFilterToggle: (filter: string) => void;
  onLocationsClearAll: () => void;
  onLocationsSelectAll: () => void;
  allLocations: HeartPieceLocations;
  selectedLocations: HeartPieceLocations;
}

const Wrapper = styled.div`
  text-align: left;

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin: 0;
  }

  label {
    display: block;
  }
`;

const FilterSection = styled.div``;

const FilterSectionTopBar = styled.div`
  display: flex;
`;

const FilterSectionBody = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    overflow: hidden;
    height: ${isOpen ? "auto" : "0"};
  `}
`;

const FilterSectionColumns = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterSectionColumn = styled.div`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const FiltersBar = ({
  onFilterToggle,
  onLocationsClearAll,
  onLocationsSelectAll,
  allLocations,
  selectedLocations
}: Props) => {
  const heartPieceLocationsColumns = [
    allLocations.slice(0, Math.floor(allLocations.length / 2)),
    allLocations.slice(Math.floor(allLocations.length / 2))
  ];

  const [locationsIsOpen, setLocationsIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <h3>Filters</h3>
        <FilterSection>
          <FilterSectionTopBar>
            <h4>Location</h4>
            <button
              onClick={() => {
                setLocationsIsOpen(!locationsIsOpen);
              }}
            >
              {locationsIsOpen ? "close" : "open"}
            </button>
          </FilterSectionTopBar>
          <FilterSectionBody isOpen={locationsIsOpen}>
            <div>
              <button
                onClick={() => {
                  onLocationsClearAll();
                }}
              >
                clear all
              </button>
              <button
                onClick={() => {
                  onLocationsSelectAll();
                }}
              >
                select all
              </button>
            </div>
            <FilterSectionColumns>
              {heartPieceLocationsColumns.map((locations, index) => (
                <FilterSectionColumn key={`location-column-${index}`}>
                  {locations.map(location => (
                    <label key={location} htmlFor={`filter-${location}`}>
                      <input
                        id={`filter-${location}`}
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => {
                          onFilterToggle(location);
                        }}
                      />
                      {location}
                    </label>
                  ))}
                </FilterSectionColumn>
              ))}
            </FilterSectionColumns>
          </FilterSectionBody>
        </FilterSection>
      </Wrapper>
    </Container>
  );
};

export default FiltersBar;
