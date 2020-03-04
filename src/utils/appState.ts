// TODO - memoize
export const filterCollectablesByLocation = (
  collectableList: any[],
  location: any
) => {
  return collectableList.filter(
    collectable => collectable.location === location.title
  );
};

export const getCollectablesByIds = (
  fullCollectableList: any[],
  numbers: string[]
) =>
  numbers.map(number =>
    fullCollectableList.find(collectable => collectable.number === number)
  );
