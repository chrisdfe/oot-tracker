import { AppData } from "../../App/AppData";

export const getRegionById = (appData: AppData, regionId: string) => {
  const { regions } = appData;
  return regions.find(({ id }) => id === regionId);
};
