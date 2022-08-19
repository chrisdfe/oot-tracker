import React, { ReactNode } from "react";
import styled from "styled-components";

import slugify from "utils/slugify";

import Container from "./layout/Container";

interface Props {
  title?: string;
  children?: ReactNode;
  stickyTopOffset?: number;
}

const StickyHeaderWrapper = styled.div<{ stickyTopOffset: number; }>`
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
  display: flex;
  align-items: center;

  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
`;

const StickySectionHeader = ({ title, children, stickyTopOffset = 0 }: Props) => {
  return (
    <StickyHeaderWrapper stickyTopOffset={stickyTopOffset} style={{ top: stickyTopOffset }}>
      <Container>
        <Inner>
          {title && <h2 id={slugify(title)}>{title}</h2>}
          {children}
        </Inner>
      </Container>
    </StickyHeaderWrapper>
  );
};

export default StickySectionHeader;
