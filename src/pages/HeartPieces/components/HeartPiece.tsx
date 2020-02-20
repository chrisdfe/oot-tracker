import React from "react";
import styled, { css, StyledComponent } from "styled-components";

export interface Props {
  heartPiece: HeartPiece;
  hasBeenCollected: boolean;
  onToggleCollected: (heartPiece: HeartPiece) => void;
}

const Wrapper = styled.div`
  padding: 1rem;
  border: 1px solid #222;
  margin-bottom: 2rem;

  text-align: left;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0;
`;

const Heading = styled.h2`
  margin: 0;
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

const Button = styled.button`
  padding: 5px;
  border: 1px solid #333;
  background: transparent;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
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

const HeartPiece = ({
  heartPiece,
  hasBeenCollected,
  onToggleCollected
}: Props) => {
  return (
    <Wrapper>
      <HeaderBar>
        <Heading>Heart Piece #{heartPiece.number}</Heading>

        <Button
          onClick={() => {
            onToggleCollected(heartPiece);
          }}
        >
          {hasBeenCollected ? "uncollect" : "collect"}
        </Button>
      </HeaderBar>

      <BodyContent hasBeenCollected={hasBeenCollected}>
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
      </BodyContent>
    </Wrapper>
  );
};

export default HeartPiece;
