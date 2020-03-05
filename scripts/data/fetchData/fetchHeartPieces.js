const path = require("path");

const { outputJSONToFile, readJSONFromFile } = require("../utils");

const { fetchFromURLOrCache, cleanLocations } = require("./utils");

const {
  PROJECT_ROOT_PATH,
  ZELDA_DUNGEON_BASE_URL,
  IMAGES_PATH,

  HEART_PIECES_URL,
  HEART_IMAGES_BASE_PATH,
  HEART_PIECES_JSON_FILENAME
} = require("../constants");

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

    const images = [{ fileName, sourceImageUrl, localImageUrl }];

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      directions: cleanedDirections,
      images
    };
  });

  return sections;
};

const run = async () => {
  console.log("fetching heart piece data");
  const data = await fetchHeartPieceData();
  const cleanedData = cleanLocations(data);
  await outputJSONToFile(HEART_PIECES_JSON_FILENAME, cleanedData);
  console.log("done collecting heart pieces.");
  return cleanedData;
};

module.exports = run;
