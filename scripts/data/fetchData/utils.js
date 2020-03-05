const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const {
  ZELDA_DUNGEON_BASE_URL,
  IMAGES_PATH,
  DATA_PATH,
  CACHE_PATH
} = require("../constants");

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

const LOCATION_NAMES_MAP = {
  "Kakariko Graveyard": "Kakariko Village Graveyard",
  "Castle Town": "Castle Town Market",
  Market: "Castle Town Market"
};

// There's some weird duplicate locations in the list
const cleanLocations = list => {
  return list.map(item => {
    if (LOCATION_NAMES_MAP[item.location]) {
      const correctLocationName = LOCATION_NAMES_MAP[item.location];
      return {
        ...item,
        location: correctLocationName
      };
    }

    return item;
  });
};

module.exports = {
  fetchFromURLOrCache,
  cleanLocations
};
