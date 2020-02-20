const fetchHeartPieces = require("./fetchHeartPieces");
const fetchGoldSkulltulas = require("./fetchGoldSkulltulas");

const run = async () => {
  await fetchHeartPieces();
  await fetchGoldSkulltulas();
  console.log("done.");
};

run();
