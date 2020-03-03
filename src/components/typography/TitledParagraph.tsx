import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-weight: 800;
  margin-bottom: 0.5rem;
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

interface Props {
  title: string;
  paragraphs: ReactNode[];
}

const TitledParagraph = ({ title, paragraphs }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraphs>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={`paragraph-${index}`}>{paragraph}</Paragraph>
        ))}
      </Paragraphs>
    </>
  );
};

export default TitledParagraph;
