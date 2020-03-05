const fetchData = require("./fetchData");
const fetchImages = require("./fetchImages");
const transformData = require("./transformData");

const fetchAll = async () => {
  console.log("Fetching data");

  await fetchData()
    .then(payload => transformData(payload))
    .then(payload => fetchImages(payload));

  console.log("done.");
};

module.exports = fetchAll;
