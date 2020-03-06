import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "components/layout/Container";

import SectionHeading from "./SectionHeading";

const StyleguideSectionWrapper = styled.div``;

interface SectionProps {
  title?: string;
  children: ReactNode;
}

const StyleguideSection = ({ title, children }: SectionProps) => {
  return (
    <StyleguideSectionWrapper>
      <Container>
        {title && <SectionHeading title={title} />}
        <div>{children}</div>
      </Container>
    </StyleguideSectionWrapper>
  );
};

export default StyleguideSection;
