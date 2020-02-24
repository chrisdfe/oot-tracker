import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./layout/Container";

const StyledNavbar = styled.div`
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
    padding: 15px;
    text-decoration: none;

    &:hover {
      background: #edeeef;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/gold-skulltulas">Gold Skulltulas</Link>
            </li>
            <li>
              <Link to="/heart-pieces">Heart Pieces</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
