import { FetchedImage } from "data/types/FetchedImage";
import { RenderedImage } from "data/types/RenderedImage";
const fetchedImagesToRenderedImages = (
  images: FetchedImage[]
): RenderedImage[] =>
  images.map(image => {
    return {
      alt: image.name,
      src: require(`../images/build/${image.localImageUrl}`)
    };
  });

export default fetchedImagesToRenderedImages;
