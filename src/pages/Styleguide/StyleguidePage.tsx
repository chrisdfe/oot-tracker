import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";

import ThemeRegion from "../../App/ThemeRegion";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/'/g, "");

const LoremParagraph = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

const SectionHeadingWrapper = styled.div`
  h2 {
    padding-bottom: 1rem;
    border-bottom: 2px solid #fff;
  }
`;

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => (
  <SectionHeadingWrapper>
    <h2 id={slugify(title)}>{title}</h2>
  </SectionHeadingWrapper>
);

const StyleguideSectionWrapper = styled.div`
  padding: 2rem 0;
`;

interface SectionProps {
  title: string;
  children: ReactNode;
}

const StyleguideSection = ({ title, children }: SectionProps) => {
  return (
    <StyleguideSectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <div>{children}</div>
      </Container>
    </StyleguideSectionWrapper>
  );
};

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

const StyleguidePage = () => {
  return (
    <div className="StyleguidePage">
      <Hero>
        <Container>
          <h1>Styleguide</h1>
        </Container>
      </Hero>

      <StyleguideSection title="Typography">
        <h1>h1. Lorem ipsum dolor sit amet</h1>
        <h2>h2. Lorem ipsum dolor sit amet</h2>
        <h3>h3. Lorem ipsum dolor sit amet</h3>
        <h4>h4. Lorem ipsum dolor sit amet</h4>
        <h5>h5. Lorem ipsum dolor sit amet</h5>
        <h6>h6. Lorem ipsum dolor sit amet</h6>
        <LoremParagraph />
        <LoremParagraph />
      </StyleguideSection>

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

export default StyleguidePage;
