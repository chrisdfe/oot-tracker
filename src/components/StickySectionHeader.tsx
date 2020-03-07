import React, { ReactNode } from "react";
import styled from "styled-components";

import Container from "./layout/Container";

interface Props {
  title: string;
  children?: ReactNode;
}

const StickyHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background.color.primary};
  z-index: 1;

  h2 {
    padding: 0;
    margin: 0;
  }
`;

const Inner = styled.div`
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
`;

const StickySectionHeader = ({ title, children }: Props) => {
  return (
    <StickyHeaderWrapper>
      <Container>
        <Inner>
          <h2>{title}</h2>
          {children}
        </Inner>
      </Container>
    </StickyHeaderWrapper>
  );
};

export default StickySectionHeader;
