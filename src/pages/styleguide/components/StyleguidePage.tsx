import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  padding-bottom: 8rem;
`;

const StyleguidePage = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default StyleguidePage;
