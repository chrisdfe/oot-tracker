const { outputJSONToFile } = require("./utils");

const slugify = str =>
  str
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[']/g, "");

const getLocations = (heartPieces, goldSkulltulas, softSoilLocations) => {
  // Build an array of location names from input lists
  return (
    [heartPieces, goldSkulltulas, softSoilLocations]
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
      //
      .map(location => {
        const heartPieceIds = heartPieces
          .filter(heartPiece => heartPiece.location === location.title)
          .map(location => location.number);
        const goldSkulltulaIds = goldSkulltulas
          .filter(goldSkulltula => goldSkulltula.location === location.title)
          .map(location => location.number);
        const softSoilLocationIds = softSoilLocations
          .filter(
            softSoilLocation => softSoilLocation.location === location.title
          )
          .map(location => location.number);

        return {
          ...location,
          heartPieceIds,
          goldSkulltulaIds,
          softSoilLocationIds
        };
      })
  );
};

const run = async (heartPieces, goldSkulltulas, softSoilLocations) => {
  const allLocations = getLocations(
    heartPieces,
    goldSkulltulas,
    softSoilLocations
  );

  await outputJSONToFile("locations.json", allLocations);

  return allLocations;
};

module.exports = run;
