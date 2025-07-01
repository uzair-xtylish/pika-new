const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bestie5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish bestie image with one mention",
  commandCategory: "image",
  usages: "bestie5 @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "mtxbsti.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/xqmB942k/mtxbsti.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "mtxbsti.jpg"));
  const pathFinal = path.join(basePath, `bestie_${one}_${two}.png`);
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

  bg.composite(circle1.resize(190, 190), 71, 104);
  bg.composite(circle2.resize(190, 190), 330, 104);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;
  if (!body.toLowerCase().startsWith("bestie5")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`👭✨ 𝐁𝐄𝐒𝐓𝐈𝐄 𝐌𝐎𝐌𝐄𝐍𝐓 ✨👭
━ ━━━━━━━━━━━━━━━━━━━━ ━

👑 𝑴𝒚 𝑩𝒆𝒔𝒕𝒊𝒆: ${nameOne} ❤️
👑 𝑨𝒍𝒘𝒂𝒚𝒔 𝑾𝒊𝒕𝒉: ${nameTwo} 💖

💫 𝑩𝒆𝒔𝒕𝒊𝒆 𝒘𝒐 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊 𝒋𝒐...
    𝒕𝒖𝒎𝒉𝒂𝒓𝒆 𝒂𝒏𝒌𝒉𝒐𝒏 𝒔𝒆 𝒈𝒉𝒂𝒎 𝒄𝒉𝒖𝒓𝒂 𝒍𝒆 💫

💌 𝑱𝒐 𝒉𝒂𝒔𝒔𝒂𝒕𝒂 𝒃𝒉𝒊 𝒉𝒂𝒊,
    𝒓𝒐𝒕𝒆 𝒘𝒂𝒒𝒕 𝒃𝒉𝒊 𝒔𝒂𝒂𝒕𝒉 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊...

🫂 𝑩𝒆𝒔𝒕𝒊𝒆 𝒔𝒊𝒓𝒇 𝒅𝒐𝒔𝒕 𝒏𝒂𝒉𝒊...
    𝒆𝒌 𝒓𝒖𝒉 𝒌𝒂 𝒔𝒂𝒉𝒂𝒓𝒂 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊 💘

━ ━━━━━━━━━━━━━━━━━━━━ ━
✨ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭 𝐌𝐓𝐗 ✨`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

module.exports.run = () => {};
