type SoftSoilLocationImage = {
  fileName: string;
  sourceImageUrl: string;
  localImageUrl: string;
};

type SoftSoilLocationData = {
  number: string;
  location: string;
  directions: string;
  rewards: string;
  images: SoftSoilLocationImage[];
};

type GoldSkulltulaLocations = string[];
