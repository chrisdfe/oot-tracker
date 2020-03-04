const LOCATION_NAMES_MAP = {
  "Kakariko Graveyard": "Kakariko Village Graveyard",
  "Castle Town": "Castle Town Market",
  Market: "Castle Town Market"
};

// There's some weird duplicate locations in the list
const cleanLocations = list => {
  return list.map(item => {
    if (LOCATION_NAMES_MAP[item.location]) {
      const correctLocationName = LOCATION_NAMES_MAP[item.location];
      return {
        ...item,
        location: correctLocationName
      };
    }

    return item;
  });
};

module.exports = cleanLocations;
