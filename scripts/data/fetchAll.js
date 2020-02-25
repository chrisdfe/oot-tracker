const fetchHeartPieces = require("./fetchHeartPieces");
const fetchGoldSkulltulas = require("./fetchGoldSkulltulas");
const extractLocations = require("./extractLocations");

const run = async () => {
  // const heartPieces = await fetchHeartPieces();
  const goldSkulltulas = await fetchGoldSkulltulas();
  // await extractLocations(heartPieces, goldSkulltulas);
  console.log("done.");
};

run();
