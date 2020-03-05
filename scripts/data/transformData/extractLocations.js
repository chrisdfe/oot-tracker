const { outputJSONToFile } = require("../utils");

const slugify = str =>
  str
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[']/g, "");

const getLocations = payload => {
  const {
    heartPieceData,
    goldSkulltulaData,
    softSoilLocationData,
    greatFairyFountainData
  } = payload;

  // Build an array of location names from input lists
  return (
    [
      heartPieceData,
      goldSkulltulaData,
      softSoilLocationData,
      greatFairyFountainData
    ]
      // combine 'location' field from each list into 1 array + dedupe
      .reduce((acc, list) => {
        const listLocations = list.map(({ location }) => location);
        const result = [...acc];
        listLocations.forEach(location => {
          if (!result.includes(location)) {
            result.push(location);
          }
        });
        return result;
      }, [])
      // Alphebetize
      .sort((a, b) => a.localeCompare(b))
      // Map to an object, so we can add more data
      .map(title => {
        const slug = slugify(title);
        return { slug, title };
      })
      // Create associtiations between location + the original list
      .map(location => {
        const heartPieceIds = heartPieceData
          .filter(heartPiece => heartPiece.location === location.title)
          .map(location => location.number);

        const goldSkulltulaIds = goldSkulltulaData
          .filter(goldSkulltula => goldSkulltula.location === location.title)
          .map(location => location.number);

        const softSoilLocationIds = softSoilLocationData
          .filter(
            softSoilLocation => softSoilLocation.location === location.title
          )
          .map(location => location.number);

        const greatFairyFountainIds = greatFairyFountainData
          .filter(
            greatFairyFountain => greatFairyFountain.location === location.title
          )
          .map(location => location.number);

        return {
          ...location,
          heartPieceIds,
          goldSkulltulaIds,
          softSoilLocationIds,
          greatFairyFountainIds
        };
      })
  );
};

const run = async payload => {
  const locations = getLocations(payload);

  await outputJSONToFile("locations.json", locations);

  return { ...payload, locations };
};

module.exports = run;
