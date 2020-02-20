import React from "react";
import styled from "styled-components";

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

  > div {
    display: flex;
    flex-direction: row;

    div {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
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

  return (
    <div className="container">
      <Wrapper>
        <h3>Filters</h3>
        <h4>Location</h4>
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
        <div>
          {heartPieceLocationsColumns.map((locations, index) => (
            <div key={`location-column-${index}`}>
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
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default FiltersBar;
