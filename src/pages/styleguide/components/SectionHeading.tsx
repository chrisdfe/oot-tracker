import React from "react";
import styled from "styled-components";

import slugify from "utils/slugify";

interface SectionHeadingProps {
  title: string;
}

const SectionHeadingWrapper = styled.div`
  h2 {
    padding-bottom: 1rem;
    border-bottom: 2px solid #fff;
  }
`;

const SectionHeading = ({ title }: SectionHeadingProps) => (
  <SectionHeadingWrapper>
    <h2 id={slugify(title)}>{title}</h2>
  </SectionHeadingWrapper>
);

export default SectionHeading;
