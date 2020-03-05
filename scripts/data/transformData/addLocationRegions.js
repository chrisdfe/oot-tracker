const { outputJSONToFile } = require("../utils");

const regions = ["Default", "Kokiri", "Goron", "Zora", "Shadow", "Gerudo"].map(
  (title, index) => ({
    id: index + 1,
    title,
    slug: title.toLowerCase()
  })
);

const getRegionIdFromTitle = title => {
  const region = regions.find(r => r.title === title);
  if (!region) return null;
  return region.id;
};

const titleIncludes = (title, regionPatterns) => {
  return !!regionPatterns.find(pattern => title.includes(pattern));
};

const getRegionTitleFromLocation = ({ title }) => {
  if (
    titleIncludes(title, ["Kokiri", "Lost Woods", "Sacred", "Forest", "Deku"])
  ) {
    return "Kokiri";
  }

  if (titleIncludes(title, ["Goron", "Death", "Dodongo", "Fire"])) {
    return "Goron";
  }

  if (titleIncludes(title, ["Zora", "Jabu", "Hylia", "Ice", "Water"])) {
    return "Zora";
  }

  if (titleIncludes(title, ["Shadow", "Shadow", "Bottom of"])) {
    return "Shadow";
  }

  if (
    titleIncludes(title, ["Gerudo", "Haunted Wasteland", "Spirit", "Desert"])
  ) {
    return "Gerudo";
  }

  return "Default";
};

const run = async payload => {
  const { locations } = payload;

  await outputJSONToFile("regions.json", regions);

  const locationsWithRegions = locations.map(location => {
    const regionTitle = getRegionTitleFromLocation(location);
    const regionId = getRegionIdFromTitle(regionTitle);

    return { ...location, regionId };
  });

  await outputJSONToFile("locations.json", locationsWithRegions);

  return { ...payload, locations: locationsWithRegions };
};

module.exports = run;
