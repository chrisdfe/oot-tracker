import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./layout/Container";

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

  a {
    display: block;
    padding: 1rem 0.6rem;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    font-size: 13px;
    font-weight: normal;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.border.color.primary};
    }

    span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 13px;
      font-weight: normal;
    }
  }
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: space-around;
`;

const NavbarLeft = styled.div``;
const NavbarRight = styled.div`
  margin-left: auto;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <NavbarInner>
          <NavbarLeft>
            <nav>
              <ul>
                <li>
                  <Link to="/collectables">Overview</Link>
                </li>
                <li>
                  <Link to="/locations">Locations</Link>
                </li>
              </ul>
            </nav>
          </NavbarLeft>

          <NavbarRight>
            <nav>
              <ul>
                <li>
                  <Link to="/styleguide">Styleguide</Link>
                </li>
              </ul>
            </nav>
          </NavbarRight>
        </NavbarInner>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
