const path = require("path");

const { outputJSONToFile, readJSONFromFile } = require("../utils");

const { fetchFromURLOrCache, cleanLocations } = require("./utils");

const {
  FAIRY_FOUNTAINS_URL,
  GREAT_FAIRY_FOUNTAINS_BASE_PATH,
  GREAT_FAIRY_FOUNTAINS_JSON_FILENAME
} = require("../constants");

const fetchGreatFairyFountainData = async () => {
  const { document } = await fetchFromURLOrCache(
    FAIRY_FOUNTAINS_URL,
    "fairy-fountains.html"
  );

  // The first .gallery element is empty
  // The second .gallery element is great fairy fountains
  // The third .gallery is the rest of the fairy fountains
  const greatFairyFountainList = document.querySelectorAll("ul.gallery")[1];
  const boxes = greatFairyFountainList.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [location, conditions, reward, ...directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const number = `${index + 1}`;
    const cleanedLocation = location.replace(/^Location: /, "");
    const cleanedConditions = conditions.replace(/^Conditions: /, "");
    const cleanedReward = reward.replace(/^Reward: /, "");
    const cleanedDirections = directions.join("\n");

    const fileName = `great-fairy-fountain-${number}.jpg`;
    const sourceImageUrl = box.querySelector("img").src;
    const localImageUrl = path.join(GREAT_FAIRY_FOUNTAINS_BASE_PATH, fileName);

    const images = [
      {
        name: `Great Fairy Fountain #${number}`,
        fileName,
        sourceImageUrl,
        localImageUrl
      }
    ];

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      reward: cleanedReward,
      directions: cleanedDirections,
      images
    };
  });

  return sections;
};

const run = async () => {
  console.log("fetching great fairy fountain data");
  const data = await fetchGreatFairyFountainData();
  const cleanedData = cleanLocations(data);
  await outputJSONToFile(GREAT_FAIRY_FOUNTAINS_JSON_FILENAME, cleanedData);
  console.log("done collecting great fairy fountain data.");
  return cleanedData;
};

module.exports = run;
