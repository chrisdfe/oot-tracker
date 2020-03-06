import React from "react";
import styled from "styled-components";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";

import BackLink from "components/BackLink";

interface Props {
  title: string;
}

const BackLinkWrapper = styled.div`
  padding: 2rem 0;
`;

const StyleguideSubpageHero = ({ title }: Props) => (
  <Hero>
    <Container>
      <h2>Styleguide</h2>
      <h1>{title}</h1>
      <BackLinkWrapper>
        <BackLink to="/styleguide" />
      </BackLinkWrapper>
    </Container>
  </Hero>
);

export default StyleguideSubpageHero;
