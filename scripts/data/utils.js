const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const { IMAGES_PATH, DATA_PATH, CACHE_PATH } = require("./constants");

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

// const getImagesThatNeedFetching = async data => {
//   const imageExistenceArray = await Promise.all(
//     data.map(imageUrl => fs.pathExists(path.join(IMAGES_PATH, imageUrl)))
//   );

//   return imageExistenceArray
//     .map((exists, index) => {
//       if (!exists) {
//         return data[index];
//       }
//       return null;
//     })
//     .filter(val => !!val);
// };

// const fetchImage = async ({ name, sourceImageUrl, localImageUrl }) => {
//   console.log(`fetching image: ${name}`);
//   const fullImageUrl = `${ZELDA_DUNGEON_BASE_URL}${sourceImageUrl}`;
//   await downloadImage(fullImageUrl, path.join(IMAGES_PATH, localImageUrl));
// };

// const fetchImages = async (outputPath, data) => {
//   await fs.mkdirp(path.join(IMAGES_PATH, outputPath));

//   const imagesThatNeedFetching = await getImagesThatNeedFetching(data);

//   // Don't get rate limited again!
//   const limiter = new Bottleneck({
//     maxConcurrent: 1,
//     minTime: 5000
//   });

//   if (imagesThatNeedFetching.length) {
//     console.log(`fetching ${imagesThatNeedFetching.length} images`);
//     const allTasks = imagesThatNeedFetching.map(async imageData =>
//       limiter.schedule(async () => await fetchImage(imageData))
//     );
//     return Promise.all(allTasks);
//   }
// };

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
  // getImagesThatNeedFetching,
  downloadImage
};
