const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs-extra");

const BASE_URL = "http://www.zeldadungeon.net";

const HEART_PIECES_URL = `${BASE_URL}/Zelda05-ocarina-of-time-pieces-of-heart.php`;

const writeJSONToFile = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data, null, 4), err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

const scrape = async () => {
  request(HEART_PIECES_URL, (error, response, body) => {
    const $ = cheerio.load(body);

    const $bodyContent = $("#body_content");
    const $boxes = $bodyContent.find(".box1");

    const sections = $boxes
      .map((box, index) => {
        const $box = $(box);
        const $cells = $box.find("tr td");

        const title = $box.find(".title_section").text();

        const pieces = $cells
          .map(cell => {
            const $cell = $(cell);

            // Look for a cell with title/image/directions
            const $piece = $cell.find(".box2");

            if ($piece.length === 0) {
              return null;
            }

            const number = parseInt(
              $piece
                .find("b")
                .text()
                .split("#")[1]
                .trim()
                .trimLeft()
            );
            const img = $piece.find("img").attr("src");
            const directions = $piece.find(".pad.font_tiny").text();

            return {
              number,
              img,
              directions
            };
          })
          .filter(cell => !!cell);

        const section = {
          title,
          pieces
        };
        // TODO: Look for a cell with just an img
        // TODO: Look for a cell with just a video
      })
      .filter(val => !!val);
  });
};

const run = async () => {
  const data = await scape();
  await writeJSONToFile("./heart_pieces.json", data);
  console.log("done.");
};

module.exports = run;
