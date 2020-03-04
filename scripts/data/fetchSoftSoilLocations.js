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
  fetchImages
} = require("./utils");

const cleanLocations = require("./cleanLocations");

const SOFT_SOIL_LOCATIONS_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Soft_Soil_Locations`;
const SOFT_SOIL_LOCATIONS_BASE_PATH = "soft-soil-locations";
const SOFT_SOIL_LOCATIONS_JSON_FILENAME = "softSoilLocations.json";

const fetchSoftSoilLocationsData = async () => {
  const { document } = await fetchFromURLOrCache(
    SOFT_SOIL_LOCATIONS_URL,
    "soft-soil-locations.html"
  );
  const content = document.querySelector(".mw-parser-output");
  const contentChildren = Array.from(content.children);
  // Skip over the introductory content
  const titleIndex = contentChildren.findIndex(child => child.tagName === "H2");

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

  return sections;
};

const fetchSoftSoilLocationsImages = async data => {
  const allImages = data.reduce((acc, softSoilLocation, imageIndex) => {
    const softSoilLoctionImages = softSoilLocation.images.map(
      ({ sourceImageUrl, localImageUrl }, childIndex) => ({
        name: `Soft soil location #${imageIndex + 1} img ${childIndex + 1}`,
        sourceImageUrl,
        localImageUrl
      })
    );
    return [...acc, ...softSoilLoctionImages];
  }, []);

  return await fetchImages(SOFT_SOIL_LOCATIONS_BASE_PATH, allImages);
};

const run = async () => {
  console.log("fetching soft soil location data");
  const data = await fetchSoftSoilLocationsData();
  const cleanedData = cleanLocations(data);
  await outputJSONToFile(SOFT_SOIL_LOCATIONS_JSON_FILENAME, cleanedData);
  await fetchSoftSoilLocationsImages(data);
  console.log("done collecting soft soil locations.");
  return cleanedData;
};

module.exports = run;
