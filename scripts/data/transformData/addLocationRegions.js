const { outputJSONToFile } = require("../utils");

const titleIncludes = (title, regionPatterns) => {
  return !!regionPatterns.find(pattern => title.includes(pattern));
};

// TODO - hardcode in location data instead of this
const getRegionFromTitle = title => {
  if (titleIncludes(title, ["Goron", "Death", "Dodongo", "Fire"])) {
    return "goron";
  }

  if (titleIncludes(title, ["Zora", "Jabu", "Hylia", "Ice", "Water"])) {
    return "zora";
  }

  if (
    titleIncludes(title, ["Kokiri", "Lost Woods", "Sacred", "Forest", "Deku"])
  ) {
    return "kokiri";
  }

  if (titleIncludes(title, ["Shadow", "Shadow", "Bottom of"])) {
    return "shadow";
  }

  if (
    titleIncludes(title, ["Gerudo", "Haunted Wasteland", "Spirit", "Desert"])
  ) {
    return "gerudo";
  }

  return "default";
};

const run = async payload => {
  const { locations } = payload;

  const locationsWithRegions = locations.map(location => {
    const region = getRegionFromTitle(location.title);

    return { ...location, region };
  });

  await outputJSONToFile("locations.json", locationsWithRegions);

  return { ...payload, locations: locationsWithRegions };
};

module.exports = run;
