import React from "react";
import styled, { css, StyledComponent } from "styled-components";

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
`;

const Heading = styled.h4`
  margin: 0;
  font-weight: normal;
`;

const Paragraph = styled.p`
  line-height: 1.7em;
  margin: 0 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DescriptionParagraph = styled(Paragraph)`
  margin-top: 1rem;
`;

const Checkbox = styled.button`
  border: 2px solid #333;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  // border-radius: 3px;
  color: #333;
  cursor: pointer;
  font-weight: bold;
`;

interface BodyContentProps {
  hasBeenCollected: boolean;
}

const BodyContent = styled.div<BodyContentProps>`
  overflow: hidden;
  ${({ hasBeenCollected }) => css`
    height: ${hasBeenCollected ? "0" : "auto"};
  `}
`;

const padNumber = (num: string) => (num.length === 2 ? num : `0${num}`);

const HeartPieceListItem = ({
  heartPiece,
  hasBeenCollected,
  onToggleCollected
}: Props) => {
  return (
    <Wrapper>
      <HeaderBar>
        <HeadingWrapper>
          <Heading>
            <strong>#{padNumber(heartPiece.number)}</strong>&nbsp;
            {heartPiece.location}
          </Heading>
        </HeadingWrapper>
        <Checkbox
          onClick={() => {
            onToggleCollected(heartPiece);
          }}
        >
          {hasBeenCollected ? "y" : " "}
        </Checkbox>
      </HeaderBar>

      {/*<BodyContent hasBeenCollected={hasBeenCollected}>
        <Paragraph>
          <strong>location:</strong> {heartPiece.location}
        </Paragraph>

        <Paragraph>
          <strong>conditions:</strong> {heartPiece.conditions}
        </Paragraph>

        {heartPiece.directions.split("\n").map((paragraph, index) => (
          <DescriptionParagraph key={`paragraph-${index}`}>
            {paragraph}
          </DescriptionParagraph>
        ))}
      </BodyContent>*/}
    </Wrapper>
  );
};

export default HeartPieceListItem;
