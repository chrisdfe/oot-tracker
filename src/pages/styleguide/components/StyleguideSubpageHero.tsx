import React from "react";
import styled from "styled-components";

import Hero from "components/layout/Hero";
import Container from "components/layout/Container";

import BackLink from "components/BackLink";

interface Props {
  title: string;
}

const Wrapper = styled.div`
  h3 {
    padding: 0;
    margin: 0 0 1rem;
  }
`;

const BackLinkWrapper = styled.div`
  padding: 2rem 0;
`;

const StyleguideSubpageHero = ({ title }: Props) => (
  <Wrapper>
    <Hero>
      <Container>
        <h3>Styleguide</h3>
        <h1>{title}</h1>
        <BackLinkWrapper>
          <BackLink to="/styleguide" />
        </BackLinkWrapper>
      </Container>
    </Hero>
  </Wrapper>
);

export default StyleguideSubpageHero;
