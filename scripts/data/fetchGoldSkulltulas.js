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
  getImagesThatNeedFetching,
  fetchImages
} = require("./utils");

const GOLD_SKULLTULA_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Gold_Skulltulas`;
const GOLD_SKULLTULAS_BASE_PATH = "gold-skulltulas";
const GOLD_SKULLTULAS_JSON_FILENAME = "goldSkulltulas.json";

const fetchGoldSkulltulaData = async () => {
  const { document } = await fetchFromURLOrCache(
    GOLD_SKULLTULA_URL,
    "gold-skulltulas.html"
  );
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

    const fileName = `gold-skulltula-${number}.jpg`;
    const sourceImageUrl = box.querySelector("img").src;
    const localImageUrl = path.join(GOLD_SKULLTULAS_BASE_PATH, fileName);

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

const fetchGoldSkulltulaImages = async data => {
  console.log("fetching gold skulltula images");

  const images = data.map(({ number, sourceImageUrl, localImageUrl }) => ({
    name: `Gold Skulltula #${number}`,
    sourceImageUrl,
    localImageUrl
  }));

  await fetchImages(path.join(IMAGES_PATH, GOLD_SKULLTULAS_BASE_PATH), images);
};

// const getRewards = async document => {
//   const table = document.querySelector(".wikitable");

//   // Leave out the header tr
//   const [, ...rows] = table.querySelectorAll("tr");
//   return Array.from(rows)
//     .map(tr => {
//       const cells = tr.querySelectorAll("td");
//       const [name, tokenCount] = Array.from(cells).map(td => td.textContent);
//       // tokenCount comes with a \n at the end
//       const cleanedTokenCount = tokenCount.trim();
//       return { name, tokenCount: cleanedTokenCount };
//     })
//     .map(data => {
//       // This field ends up being "Shard of Agony (3DS)Stone of Agony (N64) 20"
//       if (data.name.includes("Stone of Agony")) {
//         return { ...data, name: "Stone of Agony" };
//       }
//       return data;
//     });
// };

const run = async () => {
  console.log("fetching gold skulltula data");
  const data = await fetchGoldSkulltulaData();
  await outputJSONToFile(GOLD_SKULLTULAS_JSON_FILENAME, data);
  await fetchGoldSkulltulaImages(data);
  console.log("done collecting gold skulltulas.");
  return data;
};

module.exports = run;
