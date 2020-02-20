const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const { ZELDA_DUNGEON_BASE_URL } = require("./constants");
const { fetchFromURLOrCache, outputJSONToFile } = require("./utils");

const GOLD_SKULLTULA_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Gold_Skulltulas`;

const getGoldSkulltulaPageBody = async () => {
  return fetchFromURLOrCache(GOLD_SKULLTULA_URL, "gold-skulltulas.html");
};

const fetchHeartPieceData = async () => {
  const data = await getGoldSkulltulaPageBody();
  const { document } = new JSDOM(data).window;

  const boxes = document.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [location, conditions, ...directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const cleanedLocation = location.replace(/^Location: /, "");
    const cleanedConditions = conditions.replace(/^Conditions: /, "");
    const [, number] = /^Gold Skulltula #(\d+) - /.exec(directions);
    const [, cleanedDirections] = directions
      .join("\n")
      .split(/^Gold Skulltula #[\d]+ - /);
    const imageUrl = box.querySelector("img").src;

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      directions: cleanedDirections,
      imageUrl
    };
  });

  return sections;
};

const fetchAndWriteHeartPieceData = async () => {
  const data = await fetchHeartPieceData();
  await outputJSONToFile("goldSkulltulas.json", data);
};

module.exports = fetchAndWriteHeartPieceData;
