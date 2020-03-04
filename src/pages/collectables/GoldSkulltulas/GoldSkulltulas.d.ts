type GoldSkulltulaData = {
  number: string;
  location: string;
  conditions: string;
  directions: string;
  images: [
    {
      fileName: string;
      sourceImageUrl: string;
      localImageUrl: string;
    }
  ];
};

type GoldSkulltulaLocations = string[];
