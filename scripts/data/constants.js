const path = require("path");

const ZELDA_DUNGEON_BASE_URL = "http://www.zeldadungeon.net";

const PROJECT_ROOT_PATH = path.join(__dirname, "..", "..");

const SCRIPTS_PATH = path.join(PROJECT_ROOT_PATH, "scripts");
const CACHE_PATH = path.join(SCRIPTS_PATH, ".cache");

const SOURCE_PATH = path.join(PROJECT_ROOT_PATH, "src");
const DATA_PATH = path.join(SOURCE_PATH, "data", "build");
const IMAGES_PATH = path.join(SOURCE_PATH, "images", "build");

module.exports = {
  ZELDA_DUNGEON_BASE_URL,

  PROJECT_ROOT_PATH,
  SCRIPTS_PATH,
  CACHE_PATH,

  SOURCE_PATH,
  DATA_PATH,
  IMAGES_PATH
};
