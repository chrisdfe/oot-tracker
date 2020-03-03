import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import Hero from "../../components/layout/Hero";

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
    <h2>{title}</h2>
  </SectionHeadingWrapper>
);

const StyleguidePage = () => {
  return (
    <div className="StyleguidePage">
      <Hero>
        <Container>
          <h1>Styleguide</h1>
        </Container>
      </Hero>
      <Container>
        <SectionHeading title="Typography" />

        <h1>h1. Lorem ipsum dolor sit amet</h1>
        <h2>h2. Lorem ipsum dolor sit amet</h2>
        <h3>h3. Lorem ipsum dolor sit amet</h3>
        <h4>h4. Lorem ipsum dolor sit amet</h4>
        <h5>h5. Lorem ipsum dolor sit amet</h5>
        <h6>h6. Lorem ipsum dolor sit amet</h6>
        <LoremParagraph />
        <LoremParagraph />
      </Container>
    </div>
  );
};

export default StyleguidePage;
