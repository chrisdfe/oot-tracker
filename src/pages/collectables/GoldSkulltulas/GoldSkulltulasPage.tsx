import React, { useContext } from "react";
import styled from "styled-components";

import { AppDataContext } from "../../../App/AppData";

import Container from "../../../components/layout/Container";
import BackLink from "../../../components/BackLink";

import GoldSkulltulaList from "./components/GoldSkulltulaList";
import StickyInfoBar from "./components/StickyInfoBar";

const BackLinkWrapper = styled.div`
  margin: 1rem 0;
`;

const GoldSkulltulasPage = () => {
  const appData = useContext(AppDataContext);

  // @ts-ignore
  const { goldSkulltulas } = appData;

  return (
    <div className="GoldSkulltulasPage">
      <Container>
        <BackLinkWrapper>
          <BackLink to="/collectables" />
        </BackLinkWrapper>
      </Container>

      <StickyInfoBar />

      <Container>
        <GoldSkulltulaList goldSkulltulas={goldSkulltulas} />
      </Container>
    </div>
  );
};

export default GoldSkulltulasPage;
