import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Checkbox from "./Checkbox";

import { RenderedImage } from "../data/types/RenderedImage";

interface Props {
  heading: ReactNode;
  headingExtraContent?: ReactNode;
  thumbnails?: RenderedImage[];
  images?: RenderedImage[];
  hasBeenCollected: boolean;
  onToggleCollected: () => void;
  children: ReactNode;
}

const Wrapper = styled.div`
  padding: 0;
  border-bottom: 2px solid ${({ theme }) => theme.border.color.primary};
  text-align: left;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
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

const ThumbnailListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbWrapper = styled.div`
  height: 30px;

  img {
    height: 100%;
    width: auto;
  }
`;

const ImageListWrapper = styled.div`
  display: flex;
  margin: 0 -1% 1rem;
  text-align: center;

  img {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 48%;
  width: 48%;
  margin: 1%;
`;

const ThumbCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
`;

interface BodyContentProps {
  isOpen: boolean;
}

const BodyContent = styled.div<BodyContentProps>`
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  /* background-color: ${({ theme }) => theme.background.color.secondary}; */

  ${({ isOpen }) =>
    isOpen
      ? css`
          max-height: 100em;
        `
      : ""}
`;

const BodyContentInner = styled.div`
  padding: 0 0 1.5rem;
`;

const renderThumbnails = (thumbnails?: RenderedImage[]) => {
  if (!thumbnails || !thumbnails.length) {
    return null;
  }

  return (
    <ThumbnailListWrapper>
      {thumbnails.map(thumbnail => (
        <ThumbWrapper key={thumbnail.src}>
          <img src={thumbnail.src} alt={thumbnail.alt} />
        </ThumbWrapper>
      ))}
    </ThumbnailListWrapper>
  );
};

const renderImages = (images?: RenderedImage[]) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <ImageListWrapper>
      {images.map(image => (
        <ImageWrapper key={image.src}>
          <img src={image.src} alt={image.alt} />
        </ImageWrapper>
      ))}
    </ImageListWrapper>
  );
};

const CollectableDetail = ({
  heading,
  headingExtraContent,
  thumbnails,
  images,
  hasBeenCollected,
  onToggleCollected,
  children
}: Props) => {
  return (
    <Wrapper>
      <HeaderBar>
        <HeadingWrapper>
          <Heading>{heading}</Heading>
          {headingExtraContent}
        </HeadingWrapper>
        <ThumbCheckboxWrapper>
          {renderThumbnails(thumbnails)}
          <Checkbox
            isChecked={hasBeenCollected}
            onClick={() => {
              onToggleCollected();
            }}
          />
        </ThumbCheckboxWrapper>
      </HeaderBar>

      <BodyContent isOpen={!hasBeenCollected}>
        <BodyContentInner>
          {renderImages(images)}
          {children}
        </BodyContentInner>
      </BodyContent>
    </Wrapper>
  );
};

export default CollectableDetail;
