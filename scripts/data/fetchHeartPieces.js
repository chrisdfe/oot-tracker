const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const jsdom = require("jsdom");
const Bottleneck = require("bottleneck");

const { JSDOM } = jsdom;

const { ZELDA_DUNGEON_BASE_URL, IMAGES_OUTPUT_PATH } = require("./constants");
const {
  fetchFromURLOrCache,
  outputJSONToFile,
  readJSONFromFile,
  downloadImage
} = require("./utils");

const HEART_PIECES_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;

const HEART_IMAGES_BASE_PATH = path.join(IMAGES_OUTPUT_PATH, "heart-pieces");

const HEART_PIECES_JSON_FILENAME = "heartPieces.json";

const fetchHeartPiecePageBody = async () => {
  return fetchFromURLOrCache(HEART_PIECES_URL, "hearts.html");
};

const fetchHeartPieceData = async () => {
  const data = await fetchHeartPiecePageBody();
  const { document } = new JSDOM(data).window;

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
    const sourceImageUrl = box.querySelector("img").src;
    const localImageUrl = path.join(
      HEART_IMAGES_BASE_PATH,
      `heart-piece-${number}.jpg`
    );

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      directions: cleanedDirections,
      sourceImageUrl,
      localImageUrl
    };
  });

  return sections;
};

const loadHeartPieceDataFromFile = async () =>
  await readJSONFromFile(HEART_PIECES_JSON_FILENAME);

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
  console.log(`fetching image for heart #${number}`);
  const fullImageUrl = `${ZELDA_DUNGEON_BASE_URL}${sourceImageUrl}`;
  await downloadImage(fullImageUrl, localImageUrl);
};

const getImagesThatNeedFetching = async data => {
  const imageExistenceArray = await Promise.all(
    data.map(heartPiece => fs.pathExists(heartPiece.localImageUrl))
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
  await fs.mkdirp(HEART_IMAGES_BASE_PATH);

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
  const data = await fetchAndWriteHeartPieceData();
  await fetchHeartPieceImages(data);
  console.log("done collecting heart pieces.");

  // console.log("testing");
  // const parsedJSON = await loadHeartPieceDataFromFile();
  // console.log("data", parsedJSON);
};

module.exports = run;
