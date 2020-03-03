import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AppDataContext } from "../AppData";
import { AppStateContext } from "../AppState";

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
      border-bottom-color: #fff;
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
  // @ts-ignore
  const { heartPieces, goldSkulltulas, softSoilLocations } = useContext(
    AppDataContext
  );

  const appState = useContext(AppStateContext);

  const {
    collectedHearts
    // @ts-ignore
  } = appState.heartPieces;

  const {
    collectedGoldSkulltulas
    // @ts-ignore
  } = appState.goldSkulltulas;

  const {
    collectedSoftSoilLocations
    // @ts-ignore
  } = appState.softSoilLocations;

  return (
    <StyledNavbar>
      <NavbarInner>
        {/*<Container>*/}
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
            <li>
              <Link to="/soft-soil-locations">
                Soft Soil Locations
                <span>
                  {collectedSoftSoilLocations.length}/{softSoilLocations.length}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/styleguide">Styleguide</Link>
            </li>
          </ul>
        </nav>
        {/*</Container>*/}
      </NavbarInner>
    </StyledNavbar>
  );
};

export default Navbar;
