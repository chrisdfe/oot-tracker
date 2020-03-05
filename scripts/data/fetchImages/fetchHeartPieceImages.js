const { fetchImages } = require("./utils");

const { HEART_IMAGES_BASE_PATH } = require("../constants");

const fetchHeartPieceImages = async ({ heartPieceData }) => {
  console.log("fetching heart piece images");
  const images = heartPieceData.reduce((acc, heartPiece) => {
    const heartPieceImages = heartPiece.images.map(
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

  return await fetchImages(HEART_IMAGES_BASE_PATH, images);
};

module.exports = fetchHeartPieceImages;
