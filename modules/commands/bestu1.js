const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bestu1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish bestu1 image with one mention",
  commandCategory: "image",
  usages: "bestu1 @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "mtxbestu1.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/Ld4q7VLK/mtxbestu1.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "mtxbestu1.jpg"));
  const pathFinal = path.join(basePath, `bestu1_${one}_${two}.png`);
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

  bg.composite(circle1.resize(865, 865), 405, 521);
  bg.composite(circle2.resize(858, 858), 1995, 534);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;
  if (!body.toLowerCase().startsWith("bestu1")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`👯‍♂️ 𝑩𝒆𝒔𝒕𝒖 𝑽𝒊𝒃𝒆𝒔 𝑨𝒍𝒆𝒓𝒕 💥
\n● ──────────────────── ●\n
👑 𝑴𝒚 𝑩𝒆𝒔𝒕𝒖: ${nameOne}
💖 𝑾𝒊𝒕𝒉 𝑴𝒆: ${nameTwo}
\n● ──────────────────── ●\n
💬 "𝑩𝒆𝒔𝒕𝒖 𝒘𝒐 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊 𝒋𝒐...
𝒉𝒂𝒔𝒂𝒕𝒂 𝒃𝒉𝒊 𝒉𝒂𝒊, 𝒓𝒖𝒍𝒂𝒕𝒂 𝒃𝒉𝒊 𝒉𝒂𝒊,
𝒑𝒆𝒓 𝒄𝒉𝒐𝒅 𝒌𝒆 𝒌𝒂𝒃𝒉𝒊 𝒏𝒂𝒉𝒊 𝒋𝒂𝒕𝒂" 💌

✨ 𝑻𝒉𝒂𝒏𝒌𝒔 𝒇𝒐𝒓 𝒃𝒆𝒊𝒏𝒈 𝒎𝒚 𝒃𝒆𝒔𝒕 𝒗𝒊𝒃𝒆 💞

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
