import React from "react";
import styled from "styled-components";

import getPercentage from "utils/getPercentage";
import hexToRGB from "utils/hexToRGB";

interface Props {
  currentAmount: number;
  totalAmount: number;
  showPercentage?: boolean;
}

const HEIGHT = 8;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BarOuterWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  border: 2px solid ${({ theme }) => hexToRGB(theme.border.color.primary)};
  border-radius: 40rem;
  height: ${HEIGHT}px;
  padding: 2px;
`;

const BarInnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 40rem;
  // background-color: ${({ theme }) =>
    hexToRGB(theme.border.color.primary, 0.2)};
`;

interface BarProps {
  percentage: number;
}

const Bar = styled.div<BarProps>`
  border-radius: 40rem;
  width: ${({ percentage }) => `${percentage}%`};
  transition: width 0.2s;
  // TODO - this shouldn't be border color!!!
  background-color: ${({ theme }) => hexToRGB(theme.border.color.primary)};
`;

const PercentageText = styled.div`
  padding-left: 0.5rem;
  width: 2rem;
  // text-align: right;
`;

const ProgressBar = ({ currentAmount, totalAmount, showPercentage }: Props) => {
  const percentage = getPercentage(currentAmount, totalAmount);

  return (
    <Wrapper>
      <BarOuterWrapper>
        <BarInnerWrapper>
          <Bar percentage={percentage} />
        </BarInnerWrapper>
      </BarOuterWrapper>
      {showPercentage && (
        <PercentageText>
          <strong>{percentage}%</strong>
        </PercentageText>
      )}
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  showPercentage: true,
};

export default ProgressBar;
