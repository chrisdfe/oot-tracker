import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AppDataContext } from "../App/AppData";
import { AppStateContext } from "../App/AppState";

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
    font-family: ${({ theme }) => theme.fonts.heading};
    border-bottom: 5px solid transparent;

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
  padding: 0 1rem;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarInner>
        <nav>
          <ul>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/collectables">Collectables</Link>
            </li>
            <li>
              <Link to="/styleguide">Styleguide</Link>
            </li>
          </ul>
        </nav>
      </NavbarInner>
    </StyledNavbar>
  );
};

export default Navbar;
