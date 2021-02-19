import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "components/layout/Container";
import BackLink from "components/BackLink";

const Wrapper = styled.div`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background.color.secondary};

  h1 {
    margin: 0;
  }
`;

const BackLinkWrapper = styled.div`
  margin: 0 0 1rem;
`;

interface Props {
  children: ReactNode;
  backLink?: string;
}

const Hero = ({ children, backLink }: Props) => {
  return (
    <Wrapper>
      <Container>
        {backLink && (
          <BackLinkWrapper>
            <BackLink to={backLink} />
          </BackLinkWrapper>
        )}
        {children}
      </Container>
    </Wrapper>
  );
};

export default Hero;
