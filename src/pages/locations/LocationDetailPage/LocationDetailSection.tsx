import React, { ReactNode, useContext } from "react";
import styled from "styled-components";

import Container from "../../../components/layout/Container";

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

const Wrapper = styled.section`
  h2 {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
    margin: 0;
    background-color: ${({ theme }) => theme.background.color.primary};
  }
`;

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

const LocationDetailSection = ({ title, children, isEmpty }: Props) => {
  return (
    <Wrapper>
      <StickyHeaderWrapper>
        <Container>
          <h2>{title}</h2>
        </Container>
      </StickyHeaderWrapper>
      <Container>{isEmpty ? <EmptyList /> : children}</Container>
    </Wrapper>
  );
};

export default LocationDetailSection;
