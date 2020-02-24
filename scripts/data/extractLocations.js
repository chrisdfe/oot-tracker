const { outputJSONToFile } = require("./utils");

const slugify = str =>
  str
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[']/g, "");

const getLocations = (heartPieces, goldSkulltulas) =>
  [heartPieces, goldSkulltulas]
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
    // Map to an object
    .map(title => {
      const slug = slugify(title);
      return { slug, title };
    })
    .map(location => {
      const heartPieceIds = heartPieces
        .filter(heartPiece => heartPiece.location === location.title)
        .map(location => location.number);
      const goldSkulltulaIds = goldSkulltulas
        .filter(goldSkulltula => goldSkulltula.location === location.title)
        .map(location => location.number);
      return { ...location, heartPieceIds, goldSkulltulaIds };
    });

const run = async (heartPieces, goldSkulltulas) => {
  const allLocations = getLocations(heartPieces, goldSkulltulas);

  await outputJSONToFile("locations.json", allLocations);

  return allLocations;
};

module.exports = run;
