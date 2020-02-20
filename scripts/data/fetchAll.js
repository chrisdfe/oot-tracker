const fetchHeartPieces = require("./fetchHeartPieces");

const run = async () => {
  await fetchHeartPieces();
  console.log("done.");
};

run();
