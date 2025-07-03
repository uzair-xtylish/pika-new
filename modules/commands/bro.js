const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bro",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Bro bond image with mention",
  commandCategory: "image",
  usages: "bro @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "brother.png");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/tM2wxFPb/brother.png", { responseType: "arraybuffer" })).data;
    fs.writeFileSync(imgPath, imgData);
  }
};

async function circle(imagePath) {
  const img = await jimp.read(imagePath);
  img.circle();
  return await img.getBufferAsync("image/png");
}

async function makeImage({ one, two }) {
  const basePath = path.join(__dirname, "uzair", "mtx");
  const bg = await jimp.read(path.join(basePath, "brother.png"));
  const pathFinal = path.join(basePath, `brother_${one}_${two}.png`);
  const pathOne = path.join(basePath, `avt_${one}.png`);
  const pathTwo = path.join(basePath, `avt_${two}.png`);

  const getAvatar = async (uid, filePath) => {
    const avatar = (await axios.get(`https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(filePath, avatar);
  };

  await Promise.all([
    getAvatar(one, pathOne),
    getAvatar(two, pathTwo)
  ]);

  const circle1 = await jimp.read(await circle(pathOne));
  const circle2 = await jimp.read(await circle(pathTwo));

  bg.composite(circle1.resize(885, 885), 415, 530);
  bg.composite(circle2.resize(888, 888), 1994, 530);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;
  if (body.trim().toLowerCase() !== "bro") return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Bro";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`🤜🏻 𝐁𝐑𝐎 𝐁𝐎𝐍𝐃 🤛🏻
\n━━━━━━━━━━━━━━━━━━
👑 𝐌𝐚𝐢𝐧: ${nameOne}
💥 𝐌𝐞𝐫𝐚 𝐁𝐫𝐨: ${nameTwo}
━━━━━━━━━━━━━━━━━━
🩶 𝑩𝒓𝒐 𝒉𝒐 𝒕𝒐 𝒂𝒊𝒔𝒂,
𝒋𝒐 𝒉𝒉𝒉𝒉𝒉𝒉𝒉𝒉𝒉𝒉 𝒎𝒂𝒛𝒂𝒌 𝒌𝒂 𝒔𝒉𝒊𝒌𝒂𝒓 𝒃𝒉𝒊 𝒃𝒂𝒏𝒆
𝒍𝒆𝒌𝒊𝒏 𝒔𝒂𝒂𝒕𝒉 𝒃𝒉𝒊 𝒏𝒊𝒃𝒉𝒂𝒆 😎
━━━━━━━━━━━━━━━━━━
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

module.exports.run = () => {};
