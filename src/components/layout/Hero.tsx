import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "components/layout/Container";
import BackLink from "components/BackLink";

const Wrapper = styled.div`
  padding: 4rem 0 6rem;
  background-color: ${({ theme }) => theme.background.color.secondary};

  h1 {
    margin: 0;
  }
`;

const BackLinkWrapper = styled.div`
  height: 2rem;
`;

interface Props {
  children: ReactNode;
  backLink?: string;
}

const Hero = ({ children, backLink }: Props) => {
  return (
    <Wrapper>
      <Container>
        <BackLinkWrapper>
          {backLink && (
            <BackLink to={backLink} />
          )}
        </BackLinkWrapper>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Hero;
