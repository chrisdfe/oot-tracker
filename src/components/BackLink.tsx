import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FancyLink from "./FancyLink";

interface Props {
  to: string;
}

const BackLinkWrapper = styled.div`
  &:before {
    content: "←";
    padding-right: 0.2rem;
    font-size: 1.2em;
  }

  &:hover {
    &:before {
      transform: translateX(-0.5rem);
    }
  }
`;

const BackLink = ({ to }: Props) => (
  <BackLinkWrapper>
    <FancyLink>
      <Link to={to}>back</Link>
    </FancyLink>
  </BackLinkWrapper>
);

export default BackLink;
