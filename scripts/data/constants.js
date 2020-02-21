const path = require("path");

const ZELDA_DUNGEON_BASE_URL = "http://www.zeldadungeon.net";

const CACHE_PATH = path.resolve(__dirname, "..", ".cache");
const OUTPUT_PATH = path.resolve(__dirname, "..", "..", "src", "data");
const IMAGES_OUTPUT_PATH = path.join(OUTPUT_PATH, "images");

module.exports = {
  ZELDA_DUNGEON_BASE_URL,
  CACHE_PATH,
  OUTPUT_PATH,
  IMAGES_OUTPUT_PATH
};
