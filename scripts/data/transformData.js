const extractLocations = require("./transformData/extractLocations");
const addLocationRegions = require("./transformData/addLocationRegions");

const transformData = async payload => {
  console.log("Transforming data");
  const transformedPayload = await Promise.resolve()
    .then(() => extractLocations(payload))
    .then(payload => addLocationRegions(payload));

  return transformedPayload;
};

module.exports = transformData;
