import React, { ReactNode } from "react";
import styled from "styled-components";

import slugify from "utils/slugify";

import Container from "./layout/Container";

import hexToRGB from 'utils/hexToRGB';

interface Props {
  title?: ReactNode;
  children?: ReactNode;
  stickyTopOffset?: number;
}

const StickyHeaderWrapper = styled.div<{ stickyTopOffset: number; }>`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => hexToRGB(theme.background.color.primary, 1)};
  z-index: 1;

  h3 {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.rawFonts.spaceMono};
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
          {title && <h3 id={slugify(title.toString())}>{title}</h3>}
          {children}
        </Inner>
      </Container>
    </StickyHeaderWrapper>
  );
};

export default StickySectionHeader;
