import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.border.color.primary};
  color: ${({ theme }) => theme.text.color.primary};
  padding: 0.2rem 0.4rem;
  background: transparent;
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: 700;
  cursor: pointer;
`;

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <StyledButton
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
