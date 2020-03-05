const path = require("path");

const ZELDA_DUNGEON_BASE_URL = "http://www.zeldadungeon.net";

const PROJECT_ROOT_PATH = path.join(__dirname, "..", "..");

const SCRIPTS_PATH = path.join(PROJECT_ROOT_PATH, "scripts");
const CACHE_PATH = path.join(SCRIPTS_PATH, ".cache");

const SOURCE_PATH = path.join(PROJECT_ROOT_PATH, "src");
const DATA_PATH = path.join(SOURCE_PATH, "data", "build");
const IMAGES_PATH = path.join(SOURCE_PATH, "images", "build");

const HEART_PIECES_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;
const HEART_IMAGES_BASE_PATH = "heart-pieces";
const HEART_PIECES_JSON_FILENAME = "heartPieces.json";

const GOLD_SKULLTULA_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Gold_Skulltulas`;
const GOLD_SKULLTULAS_BASE_PATH = "gold-skulltulas";
const GOLD_SKULLTULAS_JSON_FILENAME = "goldSkulltulas.json";

const SOFT_SOIL_LOCATIONS_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Soft_Soil_Locations`;
const SOFT_SOIL_LOCATIONS_BASE_PATH = "soft-soil-locations";
const SOFT_SOIL_LOCATIONS_JSON_FILENAME = "softSoilLocations.json";

module.exports = {
  ZELDA_DUNGEON_BASE_URL,

  PROJECT_ROOT_PATH,
  SCRIPTS_PATH,
  CACHE_PATH,

  SOURCE_PATH,
  DATA_PATH,
  IMAGES_PATH,

  HEART_PIECES_URL,
  HEART_IMAGES_BASE_PATH,
  HEART_PIECES_JSON_FILENAME,

  GOLD_SKULLTULA_URL,
  GOLD_SKULLTULAS_BASE_PATH,
  GOLD_SKULLTULAS_JSON_FILENAME,

  SOFT_SOIL_LOCATIONS_URL,
  SOFT_SOIL_LOCATIONS_BASE_PATH,
  SOFT_SOIL_LOCATIONS_JSON_FILENAME
};
