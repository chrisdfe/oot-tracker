export enum RegionKey {
  overworld = 'overworld',
  kokiri = 'kokiri',
  goron = 'goron',
  zora = 'zora',
  shadow = 'shadow',
  gerudo = 'gerudo'
};

export type Region = {
  id: string;
  title: string;
  key: RegionKey;
};

