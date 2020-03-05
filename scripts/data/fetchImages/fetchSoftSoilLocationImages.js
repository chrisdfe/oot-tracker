const { fetchImages } = require("./utils");

const { SOFT_SOIL_LOCATIONS_BASE_PATH } = require("../constants");

const fetchSoftSoilLocationsImages = async ({ softSoilLocationData }) => {
  console.log("fetching soft soil location images");
  const allImages = softSoilLocationData.reduce(
    (acc, softSoilLocation, imageIndex) => {
      const softSoilLoctionImages = softSoilLocation.images.map(
        ({ name, sourceImageUrl, localImageUrl }, childIndex) => ({
          name,
          sourceImageUrl,
          localImageUrl
        })
      );
      return [...acc, ...softSoilLoctionImages];
    },
    []
  );

  return await fetchImages(SOFT_SOIL_LOCATIONS_BASE_PATH, allImages);
};

module.exports = fetchSoftSoilLocationsImages;
