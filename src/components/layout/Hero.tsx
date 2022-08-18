import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "components/layout/Container";
import BackLink from "components/BackLink";

interface Props {
  heading?: string;
  subheading?: string;
  backLink?: string;
  children?: ReactNode;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.secondary};
  
  h1 {
    margin: 0;
  }
`;

const Inner = styled.div`
  position: relative;
  padding: 4rem 0 5rem;
`;

const SubheadingWrapper = styled.div`
  height: 1rem;

  h4 {
    margin-bottom: 0;
  }
`;

const BackLinkWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;

  height: 2rem;
  margin-bottom: 1rem;
`;

const Hero = ({ children, backLink, subheading, heading }: Props) => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <BackLinkWrapper>
            {backLink && (
              <BackLink to={backLink} />
            )}
          </BackLinkWrapper>

          <SubheadingWrapper>
            {subheading && <h4>{subheading}</h4>}
          </SubheadingWrapper>

          <h1>{heading}</h1>

          {children}
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Hero;
