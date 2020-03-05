const fs = require("fs-extra");
const path = require("path");
const Bottleneck = require("bottleneck");

const { IMAGES_PATH } = require("../constants");

const getImagesThatNeedFetching = async data => {
  const imageExistenceArray = await Promise.all(
    data.map(imageData =>
      fs.pathExists(path.join(IMAGES_PATH, imageData.localImageUrl))
    )
  );

  const imagesThatNeedFetching = imageExistenceArray
    .map((exists, index) => {
      if (!exists) {
        return data[index];
      }
      return null;
    })
    .filter(val => !!val);

  return imagesThatNeedFetching;
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

const fetchImage = async ({ name, sourceImageUrl, localImageUrl }) => {
  console.log(localImageUrl);
  console.log(`fetching image: ${name}`);
  const fullImageUrl = `${ZELDA_DUNGEON_BASE_URL}${sourceImageUrl}`;
  console.log(fullImageUrl);
  await downloadImage(fullImageUrl, path.join(IMAGES_PATH, localImageUrl));
};

const fetchImages = async (outputPath, data) => {
  await fs.mkdirp(path.join(IMAGES_PATH, outputPath));

  const imagesThatNeedFetching = await getImagesThatNeedFetching(data);

  // Don't get rate limited again.
  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 5000
  });

  if (imagesThatNeedFetching.length) {
    const allTasks = imagesThatNeedFetching.map(async imageData =>
      limiter.schedule(async () => await fetchImage(imageData))
    );
    return Promise.all(allTasks);
  }
};

module.exports = {
  getImagesThatNeedFetching,
  downloadImage,
  fetchImage,
  fetchImages
};
