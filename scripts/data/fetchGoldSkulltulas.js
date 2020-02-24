const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const { ZELDA_DUNGEON_BASE_URL } = require("./constants");
const { fetchFromURLOrCache, outputJSONToFile } = require("./utils");

const GOLD_SKULLTULA_URL = `${ZELDA_DUNGEON_BASE_URL}/wiki/Ocarina_of_Time_Gold_Skulltulas`;

const fetchGoldSkulltulaPageBody = async () =>
  fetchFromURLOrCache(GOLD_SKULLTULA_URL, "gold-skulltulas.html");

const getList = async document => {
  const boxes = document.querySelectorAll("li.gallerybox");

  const sections = Array.from(boxes).map((box, index) => {
    const [location, conditions, ...directions] = box.textContent
      .split("\n")
      .filter(line => !!line);

    const cleanedLocation = location.replace(/^Location: /, "");
    const cleanedConditions = conditions.replace(/^Conditions: /, "");
    const [, number] = /^Gold Skulltula #(\d+) - /.exec(directions);
    const [, cleanedDirections] = directions
      .join("\n")
      .split(/^Gold Skulltula #[\d]+ - /);
    const imageUrl = box.querySelector("img").src;

    return {
      number,
      location: cleanedLocation,
      conditions: cleanedConditions,
      directions: cleanedDirections,
      imageUrl
    };
  });

  return sections;
};

const getRewards = async document => {
  const table = document.querySelector(".wikitable");

  // Leave out the header tr
  const [, ...rows] = table.querySelectorAll("tr");
  return Array.from(rows)
    .map(tr => {
      const cells = tr.querySelectorAll("td");
      const [name, tokenCount] = Array.from(cells).map(td => td.textContent);
      // tokenCount comes with a \n at the end
      const cleanedTokenCount = tokenCount.trim();
      return { name, tokenCount: cleanedTokenCount };
    })
    .map(data => {
      // This field ends up being "Shard of Agony (3DS)Stone of Agony (N64) 20"
      if (data.name.includes("Stone of Agony")) {
        return { ...data, name: "Stone of Agony" };
      }
      return data;
    });
};

const fetchAndWriteGoldSkulltulaData = async () => {
  const { document } = await fetchGoldSkulltulaPageBody();
  console.log("document,", document);

  const data = await getList(document);
  // const rewards = await getRewards(document);

  // const data = {
  //   list,
  //   rewards
  // };

  await outputJSONToFile("goldSkulltulas.json", data);
  console.log("done collecting gold skulltulas.");

  return data;
};

module.exports = fetchAndWriteGoldSkulltulaData;
