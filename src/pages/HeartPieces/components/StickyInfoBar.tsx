import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #333;
  padding: 1rem 0;

  h2 {
    margin: 0;
  }
`;

const ContentWrapper = styled.div``;

interface Props {
  children: ReactNode;
}

const StickyInfoBar = ({ children }: Props) => (
  <Wrapper>
    <div className="container">
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  </Wrapper>
);

export default StickyInfoBar;
