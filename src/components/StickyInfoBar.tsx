import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "./layout/Container";

interface Props {
  headingText?: string;
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
`;

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

const StickyInfoBar = ({ headingText }: Props) => {
  return (
    <Wrapper>
      <Container>{renderHeading(headingText)}</Container>
    </Wrapper>
  );
};

export default StickyInfoBar;
