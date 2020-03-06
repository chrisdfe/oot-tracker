import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Checkbox from "./Checkbox";

import { RenderedImage } from "../data/types/RenderedImage";

interface Props {
  heading: ReactNode;
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
  padding: 1.5rem 0;
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
  ${({ isOpen }) =>
    isOpen
      ? css`
          max-height: 100em;
        `
      : ""}
`;

const BodyContentInner = styled.div`
  padding: 1.5rem 0;
`;

const renderThumbnails = (thumbnails?: RenderedImage[]) => {
  if (!thumbnails || !thumbnails.length) {
    return null;
  }

  return (
    <>
      {thumbnails.map(thumbnail => (
        <ThumbWrapper key={thumbnail.src}>
          <img src={thumbnail.src} alt={thumbnail.alt} />
        </ThumbWrapper>
      ))}
    </>
  );
};

const renderImages = (images?: RenderedImage[]) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <>
      {images.map(image => (
        <ImageWrapper key={image.src}>
          <img src={image.src} alt={image.alt} />
        </ImageWrapper>
      ))}
    </>
  );
};

const CollectableDetail = ({
  heading,
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
        </HeadingWrapper>
        <ThumbCheckboxWrapper>
          {renderThumbnails(thumbnails)}
          <Checkbox
            isSelected={hasBeenCollected}
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
