import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const StyledPageSection = styled.div`
  margin: 3rem 0;
`;

const PageSection = ({ children }: Props) => {
  return <StyledPageSection>{children}</StyledPageSection>;
};

export default PageSection;
