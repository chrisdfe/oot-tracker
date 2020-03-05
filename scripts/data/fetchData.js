const fetchHeartPieces = require("./fetchData/fetchHeartPieces");
const fetchGoldSkulltulas = require("./fetchData/fetchGoldSkulltulas");
const fetchSoftSoilLocations = require("./fetchData/fetchSoftSoilLocations");

const fetchData = async () => {
  console.log("Fetching data");

  const heartPieceData = await fetchHeartPieces();
  const goldSkulltulaData = await fetchGoldSkulltulas();
  const softSoilLocationData = await fetchSoftSoilLocations();

  console.log("done.");
  return {
    heartPieceData,
    goldSkulltulaData,
    softSoilLocationData
  };
  // await extractLocations(heartPieces, goldSkulltulas, softSoilLocations);
};

module.exports = fetchData;
