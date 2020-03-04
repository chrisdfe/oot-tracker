const fetchHeartPieces = require("./fetchHeartPieces");
const fetchGoldSkulltulas = require("./fetchGoldSkulltulas");
const fetchSoftSoilLocations = require("./fetchSoftSoilLocations");
const extractLocations = require("./extractLocations");

const run = async () => {
  const heartPieces = await fetchHeartPieces();
  const goldSkulltulas = await fetchGoldSkulltulas();
  const softSoilLocations = await fetchSoftSoilLocations();

  await extractLocations(heartPieces, goldSkulltulas, softSoilLocations);
  console.log("done.");
};

run();
