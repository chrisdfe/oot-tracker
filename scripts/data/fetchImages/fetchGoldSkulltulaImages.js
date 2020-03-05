const { fetchImages } = require("./utils");

const { GOLD_SKULLTULAS_BASE_PATH } = require("../constants");

const fetchGoldSkulltulaImages = async ({ goldSkulltulaData }) => {
  console.log("fetching gold skulltula images");
  const images = goldSkulltulaData.reduce((acc, goldSkulltula) => {
    const heartPieceImages = goldSkulltula.images.map(
      ({ name, sourceImageUrl, localImageUrl }) => {
        return {
          name,
          sourceImageUrl,
          localImageUrl
        };
      }
    );

    return [...acc, ...heartPieceImages];
  }, []);

  await fetchImages(GOLD_SKULLTULAS_BASE_PATH, images);
};

module.exports = fetchGoldSkulltulaImages;
