const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const { ZELDA_DUNGEON_BASE_URL } = require("./constants");
const { fetchFromURLOrCache, outputJSONToFile } = require("./utils");

const HEART_PIECES_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;

const getHeartPiecePageBody = async () => {
  return fetchFromURLOrCache(HEART_PIECES_URL, "hearts.html");
};

const fetchHeartPieceData = async () => {
  const data = await getHeartPiecePageBody();
  const { document } = new JSDOM(data).window;

  const boxes = document.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [location, conditions, ...directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const cleanedLocation = location.replace(/^Location: /, "");
    const cleanedConditions = conditions.replace(/^Conditions /, "");
    const [, number] = /^Heart Piece #(\d+) - /.exec(directions);
    const [, cleanedDirections] = directions
      .join("\n")
      .split(/^Heart Piece #[\d]+ - /);
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
  await outputJSONToFile("heartPieces.json", data);
};

module.exports = fetchAndWriteHeartPieceData;
