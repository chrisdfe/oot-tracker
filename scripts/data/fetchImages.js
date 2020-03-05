const fetchHeartPieceImages = require("./fetchImages/fetchHeartPieceImages");
const fetchGoldSkulltulaImages = require("./fetchImages/fetchGoldSkulltulaImages");
const fetchSoftSoilLocationImages = require("./fetchImages/fetchSoftSoilLocationImages");
const fetchGreatFairyFountainImages = require("./fetchImages/fetchGreatFairyFountainImages");

const fetchImages = async payload => {
  console.log("Fetching Images");

  await fetchHeartPieceImages(payload);
  await fetchGoldSkulltulaImages(payload);
  await fetchSoftSoilLocationImages(payload);
  await fetchGreatFairyFountainImages(payload);
  console.log("done.");

  return payload;
};

module.exports = fetchImages;
