import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import get from "lodash-es/get";

import ThemeRegion from "App/ThemeRegion";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import BackLink from "components/BackLink";
import FancyBlockLink from "components/FancyBlockLink";

import StyleguidePage from "./components/StyleguidePage";
import StyleguideSubpageHero from "./components/StyleguideSubpageHero";
import StyleguideSection from "./components/StyleguideSection";

const RegionSection = styled.div`
  background-color: ${props => props.theme.background.color.primary};
`;

const SubSectionWrapper = styled.div``;

const SubSectionContent = styled.div`
  padding: 2rem 0;
`;

const SubSectionHeading = styled.h3`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.border.color.primary};
  color: ${({ theme }) => theme.text.color.primary};
  margin: 0 0 1rem;
`;

const SubSectionSubHeading = styled.h4`
  padding: 0;
  color: ${({ theme }) => theme.text.color.primary};
  margin: 0 0 1rem;
`;

interface SubSectionProps {
  title: string;
  children: ReactNode;
}

const SubSection = ({ title, children }: SubSectionProps) => (
  <SubSectionWrapper>
    <SubSectionHeading>{title}</SubSectionHeading>
    <SubSectionContent>{children}</SubSectionContent>
  </SubSectionWrapper>
);

const RegionHeading = styled.h2`
  color: ${props => props.theme.text.color.primary};
`;

const RegionParagraph = styled.p`
  color: ${props => props.theme.text.color.primary};
`;

const SwatchContainer = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

interface SwatchCellWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const SwatchCellWrapper = styled.div<SwatchCellWrapperProps>`
  height: 6rem;
  padding: 1rem;
  background-color: ${({ theme, backgroundColor }) =>
    get(theme, backgroundColor || "background.color.default")};
  color: ${({ theme, textColor }) =>
    get(theme, textColor || "text.color.default")};
  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 2px solid ${({ theme }) => get(theme, borderColor)};
    `}

  ${RegionParagraph} {
    padding: 0;
    margin: 0;
  }
`;

interface SwatchCellProps {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const SwatchCell = ({
  backgroundColor,
  textColor,
  borderColor
}: SwatchCellProps) => {
  return (
    <SwatchCellWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      {backgroundColor && (
        <RegionParagraph>
          bg: <strong>{backgroundColor}</strong>
        </RegionParagraph>
      )}
      {textColor && (
        <RegionParagraph>
          text: <strong>{textColor}</strong>
        </RegionParagraph>
      )}
      {borderColor && (
        <RegionParagraph>
          borderColor: <strong>{borderColor}</strong>
        </RegionParagraph>
      )}
    </SwatchCellWrapper>
  );
};

const StyleguideRegionsPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyleguidePage>
      <StyleguideSubpageHero title="Regions" />

      <StyleguideSection title="Regions">
        <RegionSection>
          <SubSection title="Typography">
            <RegionHeading>Heading</RegionHeading>

            <RegionParagraph>Paragraph</RegionParagraph>
          </SubSection>

          <SubSection title="Button">
            <Button onClick={() => {}}>Button</Button>
          </SubSection>

          <SubSection title="Checkbox">
            <Checkbox
              isChecked={isChecked}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            />
          </SubSection>

          <SubSection title="BackLink">
            <BackLink to="#" />
          </SubSection>

          <SubSection title="FancyBlockLink">
            <FancyBlockLink to="#" title="FancyBlockLink">
              <RegionParagraph>Content</RegionParagraph>
            </FancyBlockLink>
          </SubSection>
          <SubSection title="Colors">
            <SubSectionSubHeading>Background</SubSectionSubHeading>
            <SwatchContainer>
              <SwatchCell backgroundColor="background.color.primary" />
            </SwatchContainer>

            <SubSectionSubHeading>Text</SubSectionSubHeading>
            <SwatchContainer>
              <SwatchCell textColor="text.color.primary" />
            </SwatchContainer>

            <SubSectionSubHeading>Border</SubSectionSubHeading>
            <SwatchContainer>
              <SwatchCell borderColor="border.color.primary" />

              <SwatchCell borderColor="border.color.secondary" />
            </SwatchContainer>
          </SubSection>
        </RegionSection>
      </StyleguideSection>
    </StyleguidePage>
  );
};

export default StyleguideRegionsPage;
