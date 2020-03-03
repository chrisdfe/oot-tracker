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
`;

const ContentWrapper = styled.div``;

const Heading = styled.h2`
  display: block;
  padding: 1rem 0;
  margin: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
`;

const renderHeading = (headingText?: string) => {
  if (!headingText) return null;
  return <Heading>{headingText}</Heading>;
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
