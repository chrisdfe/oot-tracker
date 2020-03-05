export type RegionName =
  | "default"
  | "zora"
  | "kokiri"
  | "goron"
  | "shadow"
  | "gerudo";

export type GameLocation = {
  slug: string;
  title: string;
  region: RegionName;
  heartPieceIds: string[];
  goldSkulltulaIds: string[];
  softSoilLocationIds: string[];
};
