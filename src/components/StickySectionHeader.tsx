import React from "react";
import styled from "styled-components";

import Container from "./layout/Container";

interface Props {
  title: string;
}

const StickyHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  z-index: 1;

  h2 {
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
    margin: 0;
  }
`;

const StickySectionHeader = ({ title }: Props) => {
  return (
    <StickyHeaderWrapper>
      <Container>
        <h2>{title}</h2>
      </Container>
    </StickyHeaderWrapper>
  );
};

export default StickySectionHeader;
