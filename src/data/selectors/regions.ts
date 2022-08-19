import { RegionKey, Region } from "data/types/Region";
import { AppData } from "../../App/AppData";

export const getRegionById = (appData: AppData, regionId: RegionKey): Region => {
  const { regions } = appData;
  return regions.find(({ id }) => id === regionId) || regions[0];
};
