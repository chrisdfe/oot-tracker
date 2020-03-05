const fetchHeartPieces = require("./fetchData/fetchHeartPieces");
const fetchGoldSkulltulas = require("./fetchData/fetchGoldSkulltulas");
const fetchSoftSoilLocations = require("./fetchData/fetchSoftSoilLocations");
const fetchGreatFairyFountainData = require("./fetchData/fetchGreatFairyFountains");

const fetchData = async () => {
  console.log("Fetching data");

  const heartPieceData = await fetchHeartPieces();
  const goldSkulltulaData = await fetchGoldSkulltulas();
  const softSoilLocationData = await fetchSoftSoilLocations();
  const greatFairyFountainData = await fetchGreatFairyFountainData();

  console.log("done.");
  return {
    heartPieceData,
    goldSkulltulaData,
    softSoilLocationData,
    greatFairyFountainData
  };
};

module.exports = fetchData;
