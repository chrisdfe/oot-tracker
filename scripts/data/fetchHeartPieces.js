const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const Bottleneck = require("bottleneck");

const {
  PROJECT_ROOT_PATH,
  ZELDA_DUNGEON_BASE_URL,
  IMAGES_PATH
} = require("./constants");

const {
  fetchFromURLOrCache,
  outputJSONToFile,
  readJSONFromFile,
  downloadImage
} = require("./utils");

const HEART_PIECES_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;
const HEART_IMAGES_BASE_PATH = "heart-pieces";
const HEART_PIECES_JSON_FILENAME = "heartPieces.json";

const fetchHeartPiecePageBody = async () => {
  return fetchFromURLOrCache(HEART_PIECES_URL, "hearts.html");
};

const fetchHeartPieceData = async () => {
  const { document } = await fetchHeartPiecePageBody();

  const boxes = document.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [location, conditions, ...directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const cleanedLocation = location.replace(/^Location: /, "");
    const cleanedConditions = conditions.replace(/^Conditions: /, "");
    const [, number] = /^Heart Piece #(\d+) - /.exec(directions);
    const [, cleanedDirections] = directions
      .join("\n")
      .split(/^Heart Piece #[\d]+ - /);
    const fileName = `heart-piece-${number}.jpg`;
    const sourceImageUrl = box.querySelector("img").src;
    const localImageUrl = path.join(HEART_IMAGES_BASE_PATH, fileName);

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      directions: cleanedDirections,
      fileName,
      sourceImageUrl,
      localImageUrl
    };
  });

  return sections;
};

const writeHeartPieceData = async data =>
  await outputJSONToFile(HEART_PIECES_JSON_FILENAME, data);

const fetchAndWriteHeartPieceData = async () => {
  const data = await fetchHeartPieceData();
  await writeHeartPieceData(data);
  return data;
};

const fetchHeartPieceImage = async ({
  number,
  sourceImageUrl,
  localImageUrl
}) => {
  console.log(`fetching heart piece #${number}`);
  const fullImageUrl = `${ZELDA_DUNGEON_BASE_URL}${sourceImageUrl}`;
  await downloadImage(fullImageUrl, path.join(IMAGES_PATH, localImageUrl));
};

const getImagesThatNeedFetching = async data => {
  const imageExistenceArray = await Promise.all(
    data.map(heartPiece =>
      fs.pathExists(path.join(IMAGES_PATH, heartPiece.localImageUrl))
    )
  );

  return imageExistenceArray
    .map((exists, index) => {
      if (!exists) {
        return data[index];
      }
      return null;
    })
    .filter(val => !!val);
};

const fetchHeartPieceImages = async data => {
  console.log("fetching heart piece images");
  await fs.mkdirp(path.join(IMAGES_PATH, HEART_IMAGES_BASE_PATH));

  const imagesThatNeedFetching = await getImagesThatNeedFetching(data);

  // Don't get rate limited again!
  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 5000
  });

  if (imagesThatNeedFetching.length) {
    console.log(`fetching ${imagesThatNeedFetching.length} images`);
    const allTasks = imagesThatNeedFetching.map(async heartPiece =>
      limiter.schedule(async () => await fetchHeartPieceImage(heartPiece))
    );
    return Promise.all(allTasks);
  }
};

const run = async () => {
  console.log("fetching heart piece data");
  const data = await fetchAndWriteHeartPieceData();
  await fetchHeartPieceImages(data);
  console.log("done collecting heart pieces.");
  return data;
};

module.exports = run;
