import type { FetchedImage } from './FetchedImage';

export type SoftSoilLocation = {
  number: string;
  location: string;
  directions: string;
  rewards: string;
  images: FetchedImage[];
};

