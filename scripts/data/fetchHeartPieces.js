const path = require("path");

const {
  PROJECT_ROOT_PATH,
  ZELDA_DUNGEON_BASE_URL,
  IMAGES_PATH
} = require("./constants");

const {
  fetchFromURLOrCache,
  outputJSONToFile,
  readJSONFromFile,
  fetchImages
} = require("./utils");

const cleanLocations = require("./cleanLocations");

const HEART_PIECES_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;
const HEART_IMAGES_BASE_PATH = "heart-pieces";
const HEART_PIECES_JSON_FILENAME = "heartPieces.json";

const fetchHeartPieceData = async () => {
  const { document } = await fetchFromURLOrCache(
    HEART_PIECES_URL,
    "hearts.html"
  );

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

const fetchHeartPieceImages = async data => {
  const images = data.map(({ number, sourceImageUrl, localImageUrl }) => {
    return {
      name: `Heart piece #${number}`,
      sourceImageUrl,
      localImageUrl
    };
  });

  return await fetchImages(HEART_IMAGES_BASE_PATH, images);
};

const run = async () => {
  console.log("fetching heart piece data");
  const data = await fetchHeartPieceData();
  const cleanedData = cleanLocations(data);
  await outputJSONToFile(HEART_PIECES_JSON_FILENAME, cleanedData);
  await fetchHeartPieceImages(data);
  console.log("done collecting heart pieces.");
  return cleanedData;
};

module.exports = run;
