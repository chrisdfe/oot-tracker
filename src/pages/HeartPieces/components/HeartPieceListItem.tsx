import React, { useState } from "react";
import styled, { css } from "styled-components";

export interface Props {
  heartPiece: HeartPiece;
  hasBeenCollected: boolean;
  onToggleCollected: (heartPiece: HeartPiece) => void;
}

const Wrapper = styled.div`
  padding: 0rem;
  text-align: left;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  button {
    font-size: 0.7em;
  }
`;

const Heading = styled.h4`
  margin: 0 0.4rem 0 0;
  font-weight: normal;
`;

const Paragraph = styled.p`
  line-height: 1.7em;
  margin: 0 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ConditionsParagraph = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;

const DescriptionParagraph = styled(Paragraph)`
  font-size: 14px;
`;

const Checkbox = styled.button`
  border: 2px solid #333;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #333;
  cursor: pointer;
  font-weight: bold;
`;

interface BodyContentProps {
  isOpen: boolean;
}

const BodyContent = styled.div<BodyContentProps>`
  overflow: hidden;
  height: 0;
  ${({ isOpen }) =>
    isOpen
      ? css`
          padding: 1.5rem 0;
          height: auto;
        `
      : ""}
`;

const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({
  heartPiece,
  hasBeenCollected,
  onToggleCollected
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderBar>
        <HeadingWrapper>
          <Heading>
            <strong>#{padNumber(heartPiece.number)}</strong>&nbsp;
            {heartPiece.location}
          </Heading>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "close" : "open"}
          </button>
        </HeadingWrapper>
        <Checkbox
          onClick={() => {
            onToggleCollected(heartPiece);
          }}
        >
          {hasBeenCollected ? "y" : " "}
        </Checkbox>
      </HeaderBar>

      <BodyContent isOpen={isOpen}>
        <ConditionsParagraph>
          <strong>conditions:</strong> {heartPiece.conditions}
        </ConditionsParagraph>

        {heartPiece.directions.split("\n").map((paragraph, index) => (
          <DescriptionParagraph key={`paragraph-${index}`}>
            {paragraph}
          </DescriptionParagraph>
        ))}
      </BodyContent>
    </Wrapper>
  );
};

export default HeartPieceListItem;
