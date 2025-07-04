const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
const jimp = require("jimp");

module.exports.config = {
  name: "bro",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Get Pair From Mention",
  commandCategory: "png",
  usages: "[@mention]",
  cooldowns: 5,
  usePrefix: false
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "brother.jpg");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!fs.existsSync(imgPath)) {
    const response = await axios.get("https://i.ibb.co/hxgfXxbg/brother.jpg", { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, Buffer.from(response.data));
  }
};

async function circle(imagePath) {
  const image = await jimp.read(imagePath);
  image.circle();
  return await image.getBufferAsync("image/png");
}

async function makeImage({ one, two }) {
  const dir = path.join(__dirname, "uzair", "mtx");
  const bg = await jimp.read(path.join(dir, "brother.jpg"));

  const pathImg = path.join(dir, `bro_${one}_${two}.png`);
  const avatarOnePath = path.join(dir, `avt_${one}.png`);
  const avatarTwoPath = path.join(dir, `avt_${two}.png`);

  const avatarOneData = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(avatarOnePath, Buffer.from(avatarOneData));

  const avatarTwoData = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(avatarTwoPath, Buffer.from(avatarTwoData));

  const circleOne = await jimp.read(await circle(avatarOnePath));
  const circleTwo = await jimp.read(await circle(avatarTwoPath));

  bg.composite(circleOne.resize(191, 191), 93, 111)
    .composite(circleTwo.resize(190, 190), 434, 107);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathImg, buffer);

  fs.unlinkSync(avatarOnePath);
  fs.unlinkSync(avatarTwoPath);

  return pathImg;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, body, mentions } = event;

  if (!body) return;
  const lower = body.toLowerCase();
  const mentionIDs = Object.keys(mentions);

  if (lower.includes("bro") && mentionIDs.length > 0) {
    const one = senderID;
    const two = mentionIDs[0];

    try {
      const imagePath = await makeImage({ one, two });
      return api.sendMessage({
        body: "✧•❁𝐁𝐡𝐚𝐢-𝐁𝐚𝐡𝐚𝐧❁•✧\n\n╔═══❖••° °••❖═══╗\n\n   𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐏𝐚𝐢𝐫𝐢𝐧𝐠\n\n╚═══❖••° °••❖═══╝\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶\n\n       👑𝐘𝐄 𝐋𝐄 𝐌𝐈𝐋 𝐆𝐘𝐀❤\n\n𝐓𝐄𝐑𝐀 𝐁𝐑𝐎𝐓𝐇𝐄𝐑 🩷\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶",
        attachment: fs.createReadStream(imagePath)
      }, threadID, () => fs.unlinkSync(imagePath), messageID);
    } catch (e) {
      console.log("BRO ERROR:", e);
      return api.sendMessage("⚠️ Image generate karte waqt error aaya.", threadID, messageID);
    }
  }
};

module.exports.run = () => {}; // No prefix command handler
