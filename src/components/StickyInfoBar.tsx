import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "./layout/Container";

interface Props {
  children: ReactNode;
  headingText?: string;
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
  padding: 1.4rem 0;
  text-align: center;

  button {
    font-size: 0.7em;
  }
`;

const ContentWrapper = styled.div``;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  display: block;
  margin: 0 1rem 1rem 0;
`;

const renderHeading = (headingText?: string) => {
  if (!headingText) return null;
  return (
    <HeadingWrapper>
      <Heading>{headingText}</Heading>
    </HeadingWrapper>
  );
};

const StickyInfoBar = ({ headingText, children }: Props) => {
  return (
    <Wrapper>
      <Container>
        {renderHeading(headingText)}
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default StickyInfoBar;
