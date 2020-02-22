const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const { DATA_PATH, CACHE_PATH } = require("./constants");

const fetchFromURLOrCache = async (url, cacheFile) => {
  const cachePath = path.join(CACHE_PATH, cacheFile);
  let data;
  try {
    data = await fs.readFile(cachePath);
    console.log("Using cached response");
  } catch (e) {
    console.log("No cached response found - fetching");
    const response = await axios.get(url);
    await fs.writeFile(cachePath, response.data);
    data = response.data;
  }
  return new JSDOM(data).window;
};

const outputJSONToFile = async (outputPath, data) => {
  await fs.mkdirp(DATA_PATH);
  await fs.writeFile(
    path.join(DATA_PATH, outputPath),
    JSON.stringify(data, null, 4)
  );
};

const readJSONFromFile = async filePath => {
  const fullPath = path.join(DATA_PATH, filePath);
  const fileContents = await fs.readFile(fullPath);
  return JSON.parse(fileContents);
};

const downloadImage = async (url, outputPath) => {
  const writer = fs.createWriteStream(outputPath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream"
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

module.exports = {
  fetchFromURLOrCache,
  outputJSONToFile,
  readJSONFromFile,
  downloadImage
};
