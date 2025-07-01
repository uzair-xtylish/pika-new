const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bestie4",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish bestie image with one mention",
  commandCategory: "image",
  usages: "bestie4 @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "mtxbesti.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/N2GF9Jst/mtxbesti.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "mtxbesti.jpg"));
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

  bg.composite(circle1.resize(192, 192), 52, 113);
  bg.composite(circle2.resize(191, 191), 406, 113);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;

  // ✅ Trigger ONLY when message starts with "bestie4"
  if (!body.toLowerCase().startsWith("bestie4")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`🌸💞 𝐁𝐄𝐒𝐓𝐈𝐄 𝐕𝐈𝐁𝐄𝐒 💞🌸
● ──────────────────── ●

╔═════════════╗
👑    𝑴𝒚 𝑩𝒆𝒔𝒕𝒊𝒆:    ${nameOne}  ❤️
👑           ${nameTwo}           ❤️
╚═════════════╝

● ──────────────────── ●

🫂 𝑫𝒐𝒔𝒕𝒊 𝒔𝒊𝒓𝒇 𝒆𝒌 𝒓𝒊𝒔𝒉𝒕𝒂 𝒏𝒂𝒉𝒊 𝒉𝒐𝒕𝒂...
    𝑾𝒐 𝒅𝒊𝒍 𝒔𝒆 𝒋𝒖𝒓𝒕𝒂 𝒆𝒌 𝒏𝒂𝒔𝒉𝒂 𝒉𝒐𝒕𝒂 💘

✨ 𝑱𝒐 𝒉𝒂𝒓 𝒌𝒉𝒖𝒔𝒉𝒊 𝒎𝒆 𝒔𝒂𝒂𝒕𝒉 𝒄𝒉𝒂𝒍𝒆...
    𝑯𝒂𝒓 𝒈𝒉𝒂𝒎 𝒎𝒆 𝒆𝒌 𝒉𝒂𝒖𝒏𝒔𝒍𝒂 𝒃𝒂𝒏 𝒋𝒂𝒚𝒆 💫

🎀 𝑵𝒂 𝒋𝒂𝒂𝒏𝒆 𝒌𝒊𝒕𝒏𝒊 𝒚𝒂𝒂𝒅𝒆𝒊𝒏 𝒃𝒖𝒏𝒕𝒊 𝒉𝒂𝒊...
    𝑱𝒂𝒃 𝒃𝒆𝒔𝒕𝒊𝒆 𝒔𝒂𝒂𝒕𝒉 𝒉𝒐 – 𝒚𝒆 𝒅𝒖𝒏𝒊𝒚𝒂 𝒃𝒉𝒊 𝒉𝒂𝒔𝒆𝒆𝒏 𝒍𝒂𝒈𝒕𝒊 𝒉𝒂𝒊 💖

● ━━━━━━━━━━━━━━━━━━━━ ●
𒁍⃝ 𝑴𝑨𝑫𝑬 𝑩𝒀 𝐔ʑʌī𝐑 ┼•__🦋•`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

// Empty run for no-prefix command
module.exports.run = () => {};
