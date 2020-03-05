const { fetchImages } = require("./utils");

const { GREAT_FAIRY_FOUNTAINS_BASE_PATH } = require("../constants");

const fetchSoftSoilLocationsImages = async ({ greatFairyFountainData }) => {
  console.log("fetching great fairy fountain images");
  const allImages = greatFairyFountainData.reduce(
    (acc, greatFairyFountain, imageIndex) => {
      const greatFairyFountainImages = greatFairyFountain.images.map(
        ({ name, sourceImageUrl, localImageUrl }, childIndex) => ({
          name,
          sourceImageUrl,
          localImageUrl
        })
      );
      return [...acc, ...greatFairyFountainImages];
    },
    []
  );

  return await fetchImages(GREAT_FAIRY_FOUNTAINS_BASE_PATH, allImages);
};

module.exports = fetchSoftSoilLocationsImages;
