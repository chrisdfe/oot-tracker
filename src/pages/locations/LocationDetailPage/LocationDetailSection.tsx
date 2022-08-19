import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import PageSection from "components/layout/PageSection";
import Container from "components/layout/Container";
import StickySectionHeader from "components/StickySectionHeader";

interface Props {
  title: string;
  children: ReactNode;
  isEmpty: boolean;
  stickyTopOffset?: number;
}

interface WrapperProps {
  isEmpty: boolean;
}

const EmptyListWrapper = styled.div`
  /* padding: 6rem 0;
  text-align: center;
  font-size: 2rem; */
`;

const EmptyList = () => <EmptyListWrapper />;

const Wrapper = styled.section<WrapperProps>`
  margin-bottom: 6rem;
  ${({ isEmpty }) => isEmpty && css`
    opacity: 0.3;
  `}
`;

const LocationDetailSection = ({ title, children, isEmpty, stickyTopOffset = 0 }: Props) => {
  return (
    <Wrapper isEmpty={isEmpty}>
      <PageSection>
        <StickySectionHeader title={title} stickyTopOffset={stickyTopOffset} />
        <Container>{isEmpty ? <EmptyList /> : children}</Container>
      </PageSection>
    </Wrapper>
  );
};

export default LocationDetailSection;
