import React from "react";
import styled from "styled-components";

import ThemeRegion from "App/ThemeRegion";

import { Region } from "data/types/Region";

interface Props {
  region?: Region;
}

const Wrapper = styled.div`
  margin-bottom: 1rem;

  h4 {
    margin: 0;
  }
`;

const RegionName = styled.span`
  color: ${({ theme }) => theme.text.color.primary};
`;

const ListTitle = ({ region }: Props) => {
  const regionName = region ? region.title : "All";

  return (
    <Wrapper>
      <h4>
        <ThemeRegion regionKey={region && region.key}>
          <RegionName>{regionName}</RegionName>
        </ThemeRegion>{" "}
        locations
      </h4>
    </Wrapper>
  );
};

export default ListTitle;
