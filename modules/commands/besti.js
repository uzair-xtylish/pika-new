module.exports.config = {
  name: "bestie",
  version: "7.3.1",
  hasPermssion: 0,
  credits: " uzairrajput", 
  description: "Get Pair From Mention",
  commandCategory: "png",
  usages: "[@mention]",
  cooldowns: 5, 
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};

module.exports.onLoad = async() => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/uzair/mtx/`;
  const path = resolve(__dirname, 'uzair/mtx', 'mtxbestu.png');
  if (!existsSync(dirMaterial + "mtx")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.imgur.com/RloX16v.jpg", path); 
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "uzair", "mtx");

  let batgiam_img = await jimp.read(__root + "/mtxbestu.png");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(191, 191), 93, 111).composite(circleTwo.resize(190, 190), 434, 107);

  let raw = await batgiam_img.getBufferAsync("image/png");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("Kisi 1 ko mantion tw kr tootiye 😅", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "✧•❁𝐅𝐫𝐢𝐞𝐧𝐝𝐬𝐡𝐢𝐩❁•✧\n\n╔═══❖••° °••❖═══╗\n\n   𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐏𝐚𝐢𝐫𝐢𝐧𝐠\n\n╚═══❖••° °••❖═══╝\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶\n\n       👑𝐘𝐄 𝐋𝐄 𝐌𝐈𝐋 𝐆𝐀𝐈 ❤\n\n𝐓𝐄𝐑𝐈 𝐁𝐄𝐒𝐓𝐈𝐄 🩷\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
    const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bestie",
  version: "7.3.3",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish bestie image when user mentions one person",
  commandCategory: "image",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: { axios: "", "fs-extra": "", path: "", jimp: "" }
};

module.exports.onLoad = async () => {
  const dir = __dirname + `/uzair/mtx/`;
  const imgPath = path.join(dir, "mtxbestie.jpg");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const img = (await axios.get("https://i.ibb.co/jvM9DhL1/mtxbestie.jpg", { responseType: "arraybuffer" })).data;
    fs.writeFileSync(imgPath, Buffer.from(img));
  }
};

async function circle(imagePath) {
  const img = await jimp.read(imagePath);
  img.circle();
  return await img.getBufferAsync("image/png");
}

async function makeImage({ one, two }) {
  const basePath = path.resolve(__dirname, "uzair", "mtx");
  const bg = await jimp.read(path.join(basePath, "mtxbestie.jpg"));
  const pathFinal = path.join(basePath, `bestie_${one}_${two}.png`);
  const pathOne = path.join(basePath, `avt_${one}.png`);
  const pathTwo = path.join(basePath, `avt_${two}.png`);

  const avatar1 = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
  const avatar2 = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;

  fs.writeFileSync(pathOne, Buffer.from(avatar1));
  fs.writeFileSync(pathTwo, Buffer.from(avatar2));

  const circle1 = await jimp.read(await circle(pathOne));
  const circle2 = await jimp.read(await circle(pathTwo));

  bg.composite(circle1.resize(388, 388), 613, 826);
  bg.composite(circle2.resize(390, 390), 1324, 826);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);

  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  const mentionIDs = Object.keys(mentions || {});
  if (mentionIDs.length !== 1 || !body) return;

  const one = senderID;
  const two = mentionIDs[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`┏━━━━༺🖤༻━━━━┓ 🖤 ✧ 𝐁𝐄𝐒𝐓𝐈𝐄 𝐕𝐈𝐁𝐄𝐒 ✧ 🖤
┗━━━━༺🖤༻━━━━┛
\n● ──────────────────── ●\n
👑 ${nameOne} ❤️ ${nameTwo}
\n● ──────────────────── ●\n
💖 𝐘𝐞 𝐥𝐨 𝐛𝐚𝐛𝐲 ~ 𝐌𝐢𝐥 𝐠𝐚𝐲𝐢 𝐓𝐄𝐑𝐈 𝐁𝐄𝐒𝐓𝐈𝐄 ✨

🫶 𝐃𝐨𝐬𝐭𝐢 𝐡𝐨 𝐭𝐨𝐡 𝐚𝐢𝐬𝐢 — 𝐣𝐨 𝐝𝐢𝐥 𝐬𝐞 𝐧𝐢𝐛𝐡𝐞 💞

\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

module.exports.run = () => {};
