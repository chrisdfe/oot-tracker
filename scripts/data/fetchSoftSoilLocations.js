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

const SOFT_SOIL_LOCATIONS_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Soft_Soil_Locations`;
const SOFT_SOIL_LOCATIONS_BASE_PATH = "soft-soil-locations";
const SOFT_SOIL_LOCATIONS_JSON_FILENAME = "softSoilLocations.json";

const fetchSoftSoilLocationsPageBody = async () =>
  fetchFromURLOrCache(SOFT_SOIL_LOCATIONS_URL, "soft-soil-locations.html");

const fetchSoftSoilLocationsData = async () => {
  const { document } = await fetchSoftSoilLocationsPageBody();
  const content = document.querySelector(".mw-parser-output");
  const contentChildren = Array.from(content.children);
  // Skip over the introductory content
  const titleIndex = contentChildren.findIndex(child => child.tagName === "H2");
  console.log("titleIndex", titleIndex);

  const soilBeanLocationElements = contentChildren
    .slice(titleIndex + 1)
    // there are a bunch of hidden divs, which I think are useless
    .filter(element => {
      return (
        element.tagName !== "div" &&
        !(
          element.attributes.style &&
          element.attributes.style.value.includes("display: none")
        )
      );
    });

  // Group the child elements into related content
  let currentGroup = [];
  const elementGroups = [];
  Array.from(soilBeanLocationElements).forEach(child => {
    // I'm assuming <ul /> is always going to be the images at the bottom,
    // indicating the end of the current section
    currentGroup.push(child);
    if (child.tagName === "UL") {
      elementGroups.push(currentGroup);
      currentGroup = [];
    }
  });

  // Turn grouped html elements into json data
  const sections = elementGroups.map((section, sectionIndex) => {
    // this might be a little naiive, but it seems to be the way the html is structure
    const [directionsElement, rewardElement, imagesUL] = section;
    const directions = directionsElement.textContent
      .replace(/^Location #[\d]+ - /, "")
      .trimRight();

    // TODO
    // The location seems to consistently be the first link in the "locations" sentence/discription
    const location = directionsElement.querySelector("a").textContent;

    const rewards = rewardElement.textContent
      .replace(/^Reward - /, "")
      .trimRight();

    const images = Array.from(imagesUL.children).map((child, childIndex) => {
      const imgTag = child.querySelector("img");
      const sourceImageUrl = imgTag.attributes.src.value;
      const fileName = `soft-soil-location-${sectionIndex +
        1}-img-${childIndex + 1}.jpg`;
      const localImageUrl = path.join(SOFT_SOIL_LOCATIONS_BASE_PATH, fileName);

      return {
        fileName,
        sourceImageUrl,
        localImageUrl
      };
    });

    return {
      number: `${sectionIndex + 1}`,
      location,
      directions,
      rewards,
      images
    };
  });

  // console.log("sections", sections);
  return sections;
};

const writeSoftSoilLocationsData = async data =>
  await outputJSONToFile(SOFT_SOIL_LOCATIONS_JSON_FILENAME, data);

const fetchAndWriteSoftSoilLocationsData = async () => {
  const data = await fetchSoftSoilLocationsData();
  await writeSoftSoilLocationsData(data);
  return data;
};

const fetchSoftSoilLocationsImage = async ({
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
    data.map(SoftSoilLocations =>
      fs.pathExists(path.join(IMAGES_PATH, SoftSoilLocations.localImageUrl))
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

const fetchSoftSoilLocationsImages = async data => {
  console.log("fetching gold skulltula images");
  await fs.mkdirp(path.join(IMAGES_PATH, SOFT_SOIL_LOCATIONS_BASE_PATH));

  const imagesThatNeedFetching = await getImagesThatNeedFetching(data);

  // Don't get rate limited again!
  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 5000
  });

  console.log("imagesThatNeedFetching.length", imagesThatNeedFetching.length);

  const imageFetchList = imagesThatNeedFetching.map(
    ({ number, sourceImageUrl, localImageUrl }) => ({
      name: `Soft Soil Location #${number}`,
      sourceImageUrl,
      localImageUrl
    })
  );

  if (imagesThatNeedFetching.length) {
    console.log(`fetching ${imagesThatNeedFetching.length} images`);
    const allTasks = imagesThatNeedFetching.map(async softSoilLocation =>
      limiter.schedule(
        async () => await fetchSoftSoilLocationsImage(softSoilLocation)
      )
    );
    return Promise.all(allTasks);
  }
};

const run = async () => {
  console.log("fetching gold skulltula data");
  const data = await fetchAndWriteSoftSoilLocationsData();
  // await fetchSoftSoilLocationsImages(data);
  console.log("done collecting soft soil locations.", data.length);
  return data;
};

module.exports = run;
