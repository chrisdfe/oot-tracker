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
  border-bottom: 1px solid #333;
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
  font-size: 14px;
`;

const ThumbWrapper = styled.div`
  height: 30px;

  img {
    height: 100%;
    width: auto;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.7em;
  font-size: 14px;
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

const ThumbCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
`;

interface CheckboxProps {
  isSelected: boolean;
}

const Checkbox = styled.button<CheckboxProps>`
  border: 2px solid #333;
  // border-radius: 3px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #333;
  cursor: pointer;
  font-weight: bold;

  &:focus {
    outline: 0 none;
    // This is a good color:
    box-shadow: 0 0 0 2px #22d07a;
  }
`;
// ${({ isSelected }) =>
//   isSelected
//     ? css`
//         // background-color: #b6eac8;
//         // background-color: #c9ede1;
//       `
//     : ""}

interface BodyContentProps {
  isOpen: boolean;
}

const BodyContent = styled.div<BodyContentProps>`
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen
      ? css`
          max-height: 40em;
        `
      : ""}
`;

const BodyContentInner = styled.div`
  padding: 1.5rem 0;
`;

const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({
  heartPiece,
  hasBeenCollected,
  onToggleCollected
}: Props) => {
  const imageSrc = require(`../../../data/images/${heartPiece.localImageUrl}`);

  return (
    <Wrapper>
      <HeaderBar>
        <HeadingWrapper>
          <Heading>
            <strong>#{padNumber(heartPiece.number)}</strong>&nbsp;
            {heartPiece.location}
          </Heading>
        </HeadingWrapper>
        <ThumbCheckboxWrapper>
          <ThumbWrapper>
            <img src={imageSrc} />
          </ThumbWrapper>
          <Checkbox
            isSelected={hasBeenCollected}
            onClick={() => {
              onToggleCollected(heartPiece);
            }}
          >
            {hasBeenCollected ? "x" : ""}
          </Checkbox>
        </ThumbCheckboxWrapper>
      </HeaderBar>

      <BodyContent isOpen={!hasBeenCollected}>
        <BodyContentInner>
          <ImageWrapper>
            <img src={imageSrc} />
          </ImageWrapper>
          <ConditionsParagraph>
            <strong>conditions:</strong> {heartPiece.conditions}
          </ConditionsParagraph>

          {heartPiece.directions.split("\n").map((paragraph, index) => (
            <DescriptionParagraph key={`paragraph-${index}`}>
              {paragraph}
            </DescriptionParagraph>
          ))}
        </BodyContentInner>
      </BodyContent>
    </Wrapper>
  );
};

export default HeartPieceListItem;
