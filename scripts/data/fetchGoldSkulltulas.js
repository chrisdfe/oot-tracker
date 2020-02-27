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
  // getImagesThatNeedFetching,
  // fetchImage,
  downloadImage
} = require("./utils");

const GOLD_SKULLTULA_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Gold_Skulltulas`;
const GOLD_SKULLTULAS_BASE_PATH = "gold-skulltulas";
const GOLD_SKULLTULAS_JSON_FILENAME = "goldSkulltulas.json";

const fetchGoldSkulltulaPageBody = async () =>
  fetchFromURLOrCache(GOLD_SKULLTULA_URL, "gold-skulltulas.html");

const fetchGoldSkulltulaData = async () => {
  const { document } = await fetchGoldSkulltulaPageBody();
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

const writeGoldSkulltulasData = async data =>
  await outputJSONToFile(GOLD_SKULLTULAS_JSON_FILENAME, data);

const fetchAndWriteGoldSkulltulaData = async () => {
  const data = await fetchGoldSkulltulaData();
  await writeGoldSkulltulasData(data);
  return data;
};

const fetchGoldSkulltulaImage = async ({
  number,
  sourceImageUrl,
  localImageUrl
}) => {
  console.log(`fetching gold skulltula #${number}`);
  const fullImageUrl = `${ZELDA_DUNGEON_BASE_URL}${sourceImageUrl}`;
  await downloadImage(fullImageUrl, path.join(IMAGES_PATH, localImageUrl));
};

const getImagesThatNeedFetching = async data => {
  const imageExistenceArray = await Promise.all(
    data.map(goldSkulltula =>
      fs.pathExists(path.join(IMAGES_PATH, goldSkulltula.localImageUrl))
    )
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

const fetchGoldSkulltulaImages = async data => {
  console.log("fetching gold skulltula images");
  await fs.mkdirp(path.join(IMAGES_PATH, GOLD_SKULLTULAS_BASE_PATH));

  const imagesThatNeedFetching = await getImagesThatNeedFetching(data);

  // Don't get rate limited again!
  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 5000
  });

  console.log("imagesThatNeedFetching.length", imagesThatNeedFetching.length);

  const imageFetchList = imagesThatNeedFetching.map(
    ({ number, sourceImageUrl, localImageUrl }) => ({
      name: `Gold Skulltula #${number}`,
      sourceImageUrl,
      localImageUrl
    })
  );

  if (imagesThatNeedFetching.length) {
    console.log(`fetching ${imagesThatNeedFetching.length} images`);
    const allTasks = imagesThatNeedFetching.map(async goldSkulltula =>
      limiter.schedule(async () => await fetchGoldSkulltulaImage(goldSkulltula))
    );
    return Promise.all(allTasks);
  }
};

const run = async () => {
  console.log("fetching gold skulltula data");
  const data = await fetchAndWriteGoldSkulltulaData();
  await fetchGoldSkulltulaImages(data);
  console.log("done collecting gold skulltulas.");
  return data;
};

module.exports = run;

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
