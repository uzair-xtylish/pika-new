const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "brother",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Create stylish brother image with one mention",
  commandCategory: "image",
  usages: "@mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "bro.jpeg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/ZpnnTP1F/bro.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "bro.jpeg"));
  const pathFinal = path.join(basePath, `bro_${one}_${two}.png`);
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

  bg.composite(circle1.resize(371, 371), 113, 190);
  bg.composite(circle2.resize(374, 374), 784, 194);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;

  // ✅ Check if body starts with "bro"
  if (!body.toLowerCase().startsWith("bro")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Friend";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`🌸💞 𝑩𝑹𝑶𝑻𝑯𝑬𝑹 𝑽𝑰𝑩𝑬𝑺 💞🌸
● ──────────────────── ●

╔═════════════╗
👑 𝑴𝒚 𝑩𝒓𝒐𝒕𝒉𝒆𝒓:    ${nameOne}  ❤️
👑           ${nameTwo}           ❤️
╚═════════════╝

● ──────────────────── ●

🤍 𝐌𝐞𝐫𝐞 𝐁𝐡𝐚𝐢 𝐊𝐞 𝐋𝐢𝐲𝐞 🤍

𝐋𝐚𝐳𝐦𝐢 𝐧𝐚𝐡𝐢 𝐤𝐞 𝐳𝐢𝐧𝐝𝐚𝐠𝐢 🌍
𝐃𝐚𝐮𝐥𝐚𝐭 𝐬𝐞 𝐡𝐢 𝐦𝐚𝐚𝐥𝐚 𝐦𝐚𝐚𝐥 𝐡𝐨 💰
𝐊𝐚𝐛𝐡𝐢 𝐤𝐚𝐛𝐡𝐢 𝐚𝐤 "𝐁𝐡𝐚𝐢" 𝐚𝐢𝐬𝐚 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢 🤝
𝐉𝐨 𝐬𝐚𝐚𝐫𝐢 𝐝𝐮𝐧𝐢𝐲𝐚 𝐦𝐞 𝐛𝐞 𝐦𝐢𝐬𝐚𝐚𝐥 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢 👑

𝐍𝐚 𝐤𝐨𝐢 𝐬𝐡𝐚𝐫𝐭, 𝐧𝐚 𝐤𝐨𝐢 𝐰𝐚𝐚𝐝𝐚 ✋
𝐁𝐚𝐬 𝐬𝐚𝐚𝐭𝐡 𝐡𝐨 𝐭𝐨 𝐬𝐚𝐛 𝐤𝐮𝐜𝐡 𝐥𝐚𝐠𝐞 𝐳𝐲𝐚𝐝𝐚 💯
𝐆𝐡𝐚𝐦 𝐡𝐨 𝐲𝐚 𝐤𝐡𝐮𝐬𝐡𝐢, 𝐰𝐨𝐡𝐢 𝐦𝐞𝐑𝐞 𝐤𝐡𝐚𝐫𝐚 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢 💪
𝐉𝐨 𝐛𝐡𝐚𝐢 𝐤𝐞𝐡𝐥𝐚𝐚𝐭𝐚 𝐡𝐚𝐢, 𝐰𝐨 𝐝𝐢𝐥 𝐬𝐞 𝐧𝐢𝐛𝐡𝐚𝐚𝐭𝐚 𝐡𝐚𝐢 ❤️

𝐍𝐚 𝐰𝐚𝐪𝐭 𝐝𝐞𝐤𝐡𝐭𝐚 𝐡𝐚𝐢, 𝐧𝐚 𝐚𝐩𝐧𝐚 𝐟𝐚𝐢𝐝𝐚 𝐬𝐨𝐜𝐡𝐭𝐚 𝐡𝐚𝐢 🕰️
𝐁𝐚𝐬 𝐛𝐡𝐚𝐚𝐠 𝐤𝐞 𝐚𝐚𝐭𝐚 𝐡𝐚𝐢, 𝐣𝐚𝐛 𝐝𝐚𝐫𝐝 𝐦𝐮𝐣𝐡𝐞 𝐜𝐡𝐨𝐨𝐭𝐚 𝐡𝐚𝐢 😔
𝐘𝐞 𝐫𝐢𝐬𝐡𝐭𝐚 𝐤𝐡𝐨𝐨𝐧 𝐤𝐚 𝐡𝐨 𝐲𝐚 𝐧𝐚 𝐡𝐨 —
𝐌𝐚𝐠𝐚𝐫 𝐁𝐡𝐚𝐢, 𝐁𝐡𝐚𝐢 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢… 𝐬𝐚𝐜𝐡𝐚 𝐨𝐫 𝐛𝐞-𝐥𝐨𝐚𝐬 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢 🤲

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

module.exports.run = () => {};
