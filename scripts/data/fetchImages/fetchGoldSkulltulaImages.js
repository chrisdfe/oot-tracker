const { fetchImages } = require("./utils");

const { GOLD_SKULLTULAS_BASE_PATH } = require("../constants");

const fetchGoldSkulltulaImages = async data => {
  console.log("fetching gold skulltula images");
  const images = data.reduce((acc, goldSkulltula) => {
    const heartPieceImages = goldSkulltula.images.map(
      ({ sourceImageUrl, localImageUrl }) => {
        return {
          name: `Gold Skulltula #${goldSkulltula.number}`,
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
