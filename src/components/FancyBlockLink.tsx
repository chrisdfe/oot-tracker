import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import hexToRGB from "utils/hexToRGB";

interface Props {
  to: string;
  title: string;
  children: ReactNode;
}

const NextArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.text.color.primary};
  transition: transform 0.2s;

  &:after {
    content: "⇻";
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.text.color.primary};
  }

  a {
    position: relative;
    display: block;
    padding: 1.2rem 2rem;
    text-decoration: none;
    background-color: ${({ theme }) => theme.background.color.primary};
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) =>
        hexToRGB(theme.background.color.primary, 0.7)};

      ${NextArrow} {
        transform: translateX(5px);
      }
    }
  }
`;

const FancyBlockLink = ({ to, title, children }: Props) => {
  return (
    <Wrapper>
      <Link to={to}>
        <h2>{title}</h2>
        {children}

        <NextArrow />
      </Link>
    </Wrapper>
  );
};

export default FancyBlockLink;
