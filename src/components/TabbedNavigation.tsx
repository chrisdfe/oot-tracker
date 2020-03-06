import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./layout/Container";

type NavbarItem = {
  to: string;
  text: string;
  isActive?: boolean;
};

interface Props {
  items: NavbarItem[];
}

const StyledNavbar = styled.div`
  font-weight: bold;

  nav {
    display: flex;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 20px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

interface NavbarLinkWrapperProps {
  isActive: boolean;
  children: ReactNode;
}

const NavbarLinkWrapper = styled.div<NavbarLinkWrapperProps>`
  a {
    display: block;
    padding: 0.5rem 0.6rem;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.heading};
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.border.color.primary};
    }

    span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 0.7em;
      font-weight: normal;
    }
  }
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: space-around;
`;

const Navbar = ({ items }: Props) => {
  return (
    <StyledNavbar>
      <Container>
        <NavbarInner>
          {items.map(({ to, text, isActive = false }) => (
            <NavbarLinkWrapper isActive={isActive}>
              <Link to={to}>text</Link>
            </NavbarLinkWrapper>
          ))}
        </NavbarInner>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
