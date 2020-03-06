import React from "react";
import styled from "styled-components";

import ThemeRegion from "App/ThemeRegion";

import StyleguideSubpageHero from "./components/StyleguideSubpageHero";
import StyleguideSection from "./components/StyleguideSection";

const RegionSection = styled.div`
  padding: 3rem;
  background-color: ${props => props.theme.background.color.primary};
`;

const RegionHeading = styled.h2`
  color: ${props => props.theme.text.color.primary};
`;

const RegionTestContent = () => (
  <RegionSection>
    <RegionHeading>Heading</RegionHeading>
  </RegionSection>
);

const StyleguideRegionsPage = () => {
  return (
    <div className="StyleguideRegionsPage">
      <StyleguideSubpageHero title="Regions" />

      <StyleguideSection title="Theme regions">
        <h3>Default</h3>
        <ThemeRegion regionSlug="default">
          <RegionTestContent />
        </ThemeRegion>

        <h3>Kokiri</h3>
        <ThemeRegion regionSlug="kokiri">
          <RegionTestContent />
        </ThemeRegion>

        <h3>Goron</h3>
        <ThemeRegion regionSlug="goron">
          <RegionTestContent />
        </ThemeRegion>

        <h3>Zora</h3>
        <ThemeRegion regionSlug="zora">
          <RegionTestContent />
        </ThemeRegion>

        <h3>Shadow</h3>
        <ThemeRegion regionSlug="shadow">
          <RegionTestContent />
        </ThemeRegion>

        <h3>Gerudo</h3>
        <ThemeRegion regionSlug="gerudo">
          <RegionTestContent />
        </ThemeRegion>
      </StyleguideSection>
    </div>
  );
};

export default StyleguideRegionsPage;
