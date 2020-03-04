import type { FetchedImage } from './FetchedImage';

export type HeartPiece = {
  number: string;
  location: string;
  conditions: string;
  directions: string;
  images: FetchedImage[];
};

