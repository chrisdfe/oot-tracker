const fs = require("fs-extra");
const path = require("path");

const { DATA_PATH } = require("./constants");

const outputJSONToFile = async (outputPath, data) => {
  await fs.mkdirp(DATA_PATH);
  await fs.writeFile(
    path.join(DATA_PATH, outputPath),
    JSON.stringify(data, null, 2)
  );
};

const readJSONFromFile = async filePath => {
  const fullPath = path.join(DATA_PATH, filePath);
  const fileContents = await fs.readFile(fullPath);
  return JSON.parse(fileContents);
};

module.exports = {
  outputJSONToFile,
  readJSONFromFile
};
