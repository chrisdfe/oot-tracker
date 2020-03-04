type HeartPiece = {
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

type HeartPieceLocations = string[];
