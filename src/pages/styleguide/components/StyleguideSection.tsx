import React, { ReactNode, useCallback, useState, useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "App/AppData";
import ThemeRegion from "App/ThemeRegion";
import { Region } from "data/types/Region";

import Container from "components/layout/Container";

import SectionHeading from "./SectionHeading";

const StyleguideSectionWrapper = styled.div`
  margin-bottom: 5rem;
`;

const StyleguideSectionContent = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.background.color.primary};
`;

interface Props {
  title?: string;
  showRegionSelector?: boolean;
  children: ReactNode;
}

const StyleguideSection = ({ title, showRegionSelector, children }: Props) => {
  const { regions } = useContext(AppDataContext);
  const [currentRegion, setCurrentRegion] = useState<Region>(regions[0]);

  const onRegionSelect = useCallback(
    region => {
      setCurrentRegion(region);
    },
    [currentRegion]
  );

  return (
    <StyleguideSectionWrapper>
      <Container>
        {(title || showRegionSelector) && (
          <SectionHeading
            title={title}
            showRegionSelector={showRegionSelector}
            onRegionSelect={onRegionSelect}
            currentRegionFilterId={currentRegion.id}
          />
        )}
        <ThemeRegion regionSlug={currentRegion.slug}>
          <StyleguideSectionContent>{children}</StyleguideSectionContent>
        </ThemeRegion>
      </Container>
    </StyleguideSectionWrapper>
  );
};

export default StyleguideSection;
