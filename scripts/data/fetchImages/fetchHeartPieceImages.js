const { fetchImages } = require("./utils");

const {
  HEART_PIECES_URL,
  HEART_IMAGES_BASE_PATH,
  HEART_PIECES_JSON_FILENAME
} = require("../constants");

const fetchHeartPieceImages = async data => {
  console.log("fetching heart piece images");
  const images = data.reduce((acc, heartPiece) => {
    const heartPieceImages = heartPiece.images.map(
      ({ sourceImageUrl, localImageUrl }) => {
        return {
          name: `Heart piece #${heartPiece.number}`,
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
