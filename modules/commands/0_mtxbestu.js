const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bestu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Best friend image with mention",
  commandCategory: "image",
  usages: "bestu @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "mtxbestu.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/Q75FLMB7/mtxbestu.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "mtxbestu.jpg"));
  const pathFinal = path.join(basePath, `bestu_${one}_${two}.png`);
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
  if (!body.toLowerCase().startsWith("bestu")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`👬💫 𝐁𝐄𝐒𝐓𝐔 𝐁𝐎𝐍𝐃 💫👬
━━━━━━━━━━━━━━━━━━━━━━

🌟 𝐌𝐲 𝐁𝐞𝐬𝐭𝐮: ${nameOne}
🌟 𝐖𝐢𝐭𝐡 𝐌𝐞: ${nameTwo}

🫂 𝑲𝒉𝒖𝒔𝒉𝒏𝒂𝒔𝒊𝒃 𝒉𝒐𝒕𝒆 𝒉𝒂𝒊 𝒘𝒐 𝒍𝒐𝒈,
     𝒋𝒊𝒏𝒌𝒐 𝒃𝒆𝒔𝒕𝒖 𝒋𝒂𝒊𝒔𝒂 𝒅𝒐𝒔𝒕 𝒎𝒊𝒍𝒕𝒂 🥹

😂 𝑱𝒐 𝒉𝒂𝒓 𝒃𝒂𝒓 𝒎𝒂𝒛𝒂𝒌 𝒌𝒂 𝒌𝒖𝒓𝒃𝒂𝒏𝒊 𝒃𝒂𝒏𝒕𝒂 𝒉𝒂𝒊
💘 𝑳𝒆𝒌𝒊𝒏 𝒉𝒂𝒓 𝒅𝒂𝒇𝒂 𝒎𝒆𝒓𝒂 𝒔𝒂𝒂𝒕𝒉 𝒏𝒊𝒃𝒉𝒂𝒕𝒂 𝒉𝒂𝒊

━ ━━━━━━━━━━━━━━━━━━━━ ━
👑 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔𝐳𝐚𝐢𝐫 𝐌𝐓𝐗`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

module.exports.run = () => {};
