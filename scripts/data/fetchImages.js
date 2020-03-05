const fetchHeartPieceImages = require("./fetchImages/fetchHeartPieceImages");
const fetchGoldSkulltulaImages = require("./fetchImages/fetchGoldSkulltulaImages");
const fetchSoftSoilLocationImages = require("./fetchImages/fetchSoftSoilLocationImages");

const fetchImages = async payload => {
  console.log("Fetching Images");
  const { heartPieceData, goldSkulltulaData, softSoilLocationData } = payload;

  await fetchHeartPieceImages(heartPieceData);
  await fetchGoldSkulltulaImages(goldSkulltulaData);
  await fetchSoftSoilLocationImages(softSoilLocationData);
  console.log("done.");

  return payload;
};

module.exports = fetchImages;
