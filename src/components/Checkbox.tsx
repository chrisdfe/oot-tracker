import React from "react";
import styled from "styled-components";

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

interface WrapperProps {
  isSelected: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  border: 2px solid ${({ theme }) => theme.border.color.primary};
  border-radius: 3px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.text.color.primary};
  cursor: pointer;
  font-weight: bold;
  line-height: 0;

  &:focus {
    outline: 0 none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.border.color.secondary};
  }
`;

const CheckWrapper = styled.div`
  line-height: 0;
  transform: translateY(2px);
  font-size: 1.5em;
`;

const Checkbox = ({ isSelected, onClick }: Props) => {
  return (
    <Wrapper
      isSelected={isSelected}
      onClick={() => {
        onClick();
      }}
    >
      {/*<CheckWrapper>{isSelected ? "≋" : ""}</CheckWrapper>*/}
      {<CheckWrapper>{isSelected ? "≜" : ""}</CheckWrapper>}
    </Wrapper>
  );
};

export default Checkbox;
