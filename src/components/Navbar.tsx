import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AppDataContext } from "../AppData";
import { AppStateContext } from "../AppState";

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
      // background: ${({ theme }) => theme.rawColors.white};
      background: rgba(255, 255, 255, 0.7);
    }

    span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 0.7em;
    }
  }
`;

const Navbar = () => {
  // @ts-ignore
  const { heartPieces, goldSkulltulas } = useContext(AppDataContext);

  const appState = useContext(AppStateContext);

  const {
    collectedHearts
    // @ts-ignore
  } = appState.heartPieces;

  const {
    collectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  return (
    <StyledNavbar>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/heart-pieces">
                Heart Pieces
                <span>
                  {collectedHearts.length}/{heartPieces.length}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/gold-skulltulas">
                Gold Skulltulas
                <span>
                  {collectedGoldSkulltulas.length}/{goldSkulltulas.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
