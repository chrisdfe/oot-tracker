import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-weight: 800;
  margin: 0.1rem 0;
  width: 21%;
  flex-shrink: 0;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const Paragraphs = styled.div`
  ${Paragraph} {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface Props {
  title: string;
  paragraphs: ReactNode[];
}

const TitledParagraph = ({ title, paragraphs }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraphs>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={`paragraph-${index}`}>{paragraph}</Paragraph>
        ))}
      </Paragraphs>
    </Wrapper>
  );
};

export default TitledParagraph;
