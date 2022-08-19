import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { GameLocation } from 'data/types/GameLocation';

import LocationCollectableSummary from './LocationCollectableSummary';

import Container from 'components/layout/Container';
import hexToRGB from 'utils/hexToRGB';

interface Props {
  location?: GameLocation;
}

/* background-color: ${({ theme }) => hexToRGB(theme.background.color.primary, 0.8)}; */
const LocationCollectableSummaryBar = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => hexToRGB(theme.background.color.primary, 1)};
  z-index: 1000;
`;

const LocationCollectableSummarySticky =
  forwardRef<HTMLDivElement, Props>(
    ({ location }: Props, ref) => (
      <LocationCollectableSummaryBar ref={ref}>
        <Container>
          <LocationCollectableSummary location={location} />
        </Container>
      </LocationCollectableSummaryBar>
    )
  );

export default LocationCollectableSummarySticky;