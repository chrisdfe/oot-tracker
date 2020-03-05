const path = require("path");

const { outputJSONToFile, readJSONFromFile } = require("../utils");

const { fetchFromURLOrCache, cleanLocations } = require("./utils");

const {
  PROJECT_ROOT_PATH,
  ZELDA_DUNGEON_BASE_URL,
  IMAGES_PATH,
  GOLD_SKULLTULA_URL,
  GOLD_SKULLTULAS_BASE_PATH,
  GOLD_SKULLTULAS_JSON_FILENAME
} = require("../constants");

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
  const cleanedData = cleanLocations(data);
  await outputJSONToFile(GOLD_SKULLTULAS_JSON_FILENAME, cleanedData);
  console.log("done collecting gold skulltulas.");
  return cleanedData;
};

module.exports = run;
