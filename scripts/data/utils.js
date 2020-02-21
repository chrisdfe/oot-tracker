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

const readJSONFromFile = async filePath => {
  const fullPath = path.join(OUTPUT_PATH, filePath);
  const fileContents = await fs.readFile(fullPath);
  const parsedData = JSON.parse(fileContents);
  console.log("parsedData", parsedData);
  return parsedData;
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
