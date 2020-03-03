import React, { ReactNode } from "react";
import styled from "styled-components";

const BORDER_HEIGHT = 10;

const Wrapper = styled.div`
  display: inline-block;

  a {
    text-decoration: none;
    position: relative;

    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      border-bottom: ${BORDER_HEIGHT}px solid rgba(255, 255, 255, 1);
      transition: all 0.2s;
    }

    &:hover {
      &:before {
        // top: calc(50% + 4px);
        border-bottom-color: rgba(255, 255, 255, 0);
      }
    }
  }
`;

interface Props {
  children: ReactNode;
}

const FancyLink = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FancyLink;
