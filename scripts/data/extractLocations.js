const { outputJSONToFile } = require("./utils");

const getLocationsFromLists = lists =>
  lists
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
    .sort((a, b) => a.localeCompare(b));

const run = async (...data) => {
  const locations = getLocationsFromLists(data);
  await outputJSONToFile("locations.json", locations);
  return locations;
};

module.exports = run;
