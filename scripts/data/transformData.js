const extractLocations = require("./transformData/extractLocations");

const transformData = async payload => {
  console.log("Transforming data");
  const modifiedPayload = await extractLocations(payload);
  console.log("done.");
  return modifiedPayload;
};

module.exports = transformData;
