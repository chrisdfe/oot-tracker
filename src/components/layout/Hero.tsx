import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem 0;
`;

interface Props {
  children: ReactNode;
}

const Hero = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Hero;
