const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const fs = require("fs-extra");

const { JSDOM } = jsdom;

const BASE_URL = "http://www.zeldadungeon.net";

const HEART_PIECES_URL = `${BASE_URL}/wiki/Ocarina_of_Time_Heart_Pieces`;

const OUTPUT_PATH = path.resolve(__dirname, "..", "data");

const writeJSONToFile = async (outputPath, data) => {
  await fs.mkdirp(OUTPUT_PATH);
  await fs.writeFile(
    path.join(OUTPUT_PATH, outputPath),
    JSON.stringify(data, null, 4)
  );
};

const getHeartPiecePageBody = async () => {
  try {
    const data = await fs.readFile(path.join(OUTPUT_PATH, "hearts.html"));
    console.log("Using cached response");
    return data;
  } catch (e) {
    console.log("No cached response found - fetching");
    const response = await axios.get(HEART_PIECES_URL);
    await fs.writeFile(path.join(OUTPUT_PATH, "hearts.html"), response.data);
    return response.data;
  }
};

const scrape = async () => {
  const data = await getHeartPiecePageBody();
  const { document } = new JSDOM(data).window;

  const boxes = document.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [title, conditions, directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const [, number] = /^Heart Piece #(\d+) - /.exec(directions);
    const [, cleanedDirections] = directions.split(/^Heart Piece #[\d]+ - /);
    const image = box.querySelector("img").src;

    return {
      title,
      number: index + 1,
      conditions,
      image,
      directions: cleanedDirections
    };
  });

  return sections;
};

const run = async () => {
  const data = await scrape();
  await writeJSONToFile("./heart_pieces.json", data);
  console.log("done.");
};

run();
