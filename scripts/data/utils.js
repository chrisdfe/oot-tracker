const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

const { OUTPUT_PATH, CACHE_PATH } = require("./constants");

const fetchFromURLOrCache = async (url, cacheFile) => {
  const cachePath = path.join(CACHE_PATH, cacheFile);
  try {
    const data = await fs.readFile(cachePath);
    console.log("Using cached response");
    return data;
  } catch (e) {
    console.log("No cached response found - fetching");
    const response = await axios.get(url);
    await fs.writeFile(cachePath, response.data);
    return response.data;
  }
};

const outputJSONToFile = async (outputPath, data) => {
  await fs.mkdirp(OUTPUT_PATH);
  await fs.writeFile(
    path.join(OUTPUT_PATH, outputPath),
    JSON.stringify(data, null, 4)
  );
};

module.exports = {
  fetchFromURLOrCache,
  outputJSONToFile
};
