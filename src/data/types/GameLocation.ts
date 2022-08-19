import { RegionKey } from "./Region";

export type GameLocation = {
  slug: string;
  title: string;
  regionId: RegionKey;
  heartPieceIds: string[];
  goldSkulltulaIds: string[];
  softSoilLocationIds: string[];
  greatFairyFountainIds: string[];
};
