import React, { ReactNode } from "react";
import styled from "styled-components";

import PageSection from "components/layout/PageSection";
import Container from "components/layout/Container";
import StickySectionHeader from "components/StickySectionHeader";

interface Props {
  title: string;
  children: ReactNode;
  isEmpty: boolean;
}

const EmptyListWrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  font-size: 2rem;
`;

const EmptyList = () => <EmptyListWrapper>⦻</EmptyListWrapper>;

const Wrapper = styled.section``;

const LocationDetailSection = ({ title, children, isEmpty }: Props) => {
  return (
    <Wrapper>
      <PageSection>
        <StickySectionHeader title={title} />
        <Container>{isEmpty ? <EmptyList /> : children}</Container>
      </PageSection>
    </Wrapper>
  );
};

export default LocationDetailSection;
