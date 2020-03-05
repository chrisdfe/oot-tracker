const { fetchImages } = require("./utils");

const {
  SOFT_SOIL_LOCATIONS_URL,
  SOFT_SOIL_LOCATIONS_BASE_PATH,
  SOFT_SOIL_LOCATIONS_JSON_FILENAME
} = require("../constants");

const fetchSoftSoilLocationsImages = async data => {
  console.log("fetching soft soil location images");
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

module.exports = fetchSoftSoilLocationsImages;
