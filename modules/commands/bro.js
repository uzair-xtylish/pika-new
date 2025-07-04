const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bro",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish bro image when user mentions one person",
  commandCategory: "image",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: {
    axios: "",
    "fs-extra": "",
    path: "",
    jimp: ""
  }
};

// 🔄 Preload image when bot starts
module.exports.onLoad = async () => {
  const dir = __dirname + `/uzair/mtx/`;
  const imgPath = path.join(dir, "mtxbro.jpg");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const img = (await axios.get("https://i.ibb.co/vx9YVgr9/4b49b9f2dc03a541149d834f0ca787d4-1.jpg", { responseType: "arraybuffer" })).data;
    fs.writeFileSync(imgPath, Buffer.from(img));
  }
};

// 👤 Convert avatar to circle
async function circle(imagePath) {
  const img = await jimp.read(imagePath);
  img.circle();
  return await img.getBufferAsync("image/png");
}

// 🖼️ Generate final image
async function makeImage({ one, two }) {
  const basePath = path.resolve(__dirname, "uzair", "mtx");
  const bg = await jimp.read(path.join(basePath, "mtxbro.jpg"));
  const pathFinal = path.join(basePath, `bro_${one}_${two}.png`);
  const pathOne = path.join(basePath, `avt_${one}.png`);
  const pathTwo = path.join(basePath, `avt_${two}.png`);

  const avatar1 = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
  const avatar2 = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;

  fs.writeFileSync(pathOne, Buffer.from(avatar1));
  fs.writeFileSync(pathTwo, Buffer.from(avatar2));

  const circle1 = await jimp.read(await circle(pathOne));
  const circle2 = await jimp.read(await circle(pathTwo));

  bg.composite(circle1.resize(390, 390), 210, 820); // Adjust X/Y
  bg.composite(circle2.resize(390, 390), 1320, 820);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);

  return pathFinal;
}

// 📩 Handle message trigger
module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  const mentionIDs = Object.keys(mentions || {});
  if (mentionIDs.length !== 1 || !body) return;

  const exactMatch = body.toLowerCase().split(/\s+/).includes("bro");
  if (!exactMatch) return;

  const one = senderID;
  const two = mentionIDs[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Brother";

  const img = await makeImage({ one, two });

  const msg = {
    body: `💙 𝗕𝗥𝗢𝗧𝗛𝗘𝗥𝗛𝗢𝗢𝗗 💙\n\n👑 ${nameOne} 🤝 ${nameTwo}\n\n🖤 𝗣𝘂𝗿𝗲 𝗕𝗿𝗼 𝗩𝗶𝗯𝗲𝘀 ✨\n\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

// 🔕 Manual command use disabled
module.exports.run = () => {};
