import React, { ReactNode } from "react";
import styled from "styled-components";

const BORDER_HEIGHT = 6;

const Wrapper = styled.div`
  display: inline-block;

  a {
    text-decoration: none;
    position: relative;
    font-weight: bold;
    line-height: 1.8em;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 110%;
      left: 0;
      height: 0;
      border-bottom: ${BORDER_HEIGHT}px solid
        ${({ theme }) => theme.border.color.secondary};
      transition: all 0.2s;
    }

    &:hover {
      &:before {
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
