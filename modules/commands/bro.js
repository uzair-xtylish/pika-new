const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bro",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Stylish bro image with one mention",
  commandCategory: "image",
  usages: "bro @mention",
  cooldowns: 5
};

module.exports.onLoad = async () => {
  const dir = path.join(__dirname, "uzair", "mtx");
  const imgPath = path.join(dir, "mtxbro.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const imgData = (await axios.get("https://i.ibb.co/1fdP0LGh/mtxbro.jpg", { responseType: "arraybuffer" })).data;
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
  const bg = await jimp.read(path.join(basePath, "mtxbro.jpg"));
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

  bg.composite(circle1.resize(885, 885), 471, 731);
  bg.composite(circle2.resize(888, 888), 1980, 734);

  const buffer = await bg.getBufferAsync("image/png");
  fs.writeFileSync(pathFinal, buffer);
  fs.unlinkSync(pathOne);
  fs.unlinkSync(pathTwo);
  return pathFinal;
}

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  if (!body || !mentions || Object.keys(mentions).length !== 1) return;
  if (!body.toLowerCase().startsWith("bro")) return;

  const one = senderID;
  const two = Object.keys(mentions)[0];
  const userInfo = await api.getUserInfo([one, two]);

  const nameOne = userInfo[one]?.name || "You";
  const nameTwo = userInfo[two]?.name || "Bro";

  const img = await makeImage({ one, two });

  const msg = {
    body:
`🤜 𝐁𝐑𝐎 𝐌𝐎𝐌𝐄𝐍𝐓 🤛

👑 𝑴𝒂𝒊 𝑯𝒖: ${nameOne}
👑 𝑴𝒆𝒓𝒂 𝑩𝒓𝒐: ${nameTwo}

🫂 𝑩𝒉𝒂𝒊 𝒔𝒊𝒓𝒇 𝒓𝒊𝒔𝒉𝒕𝒂 𝒏𝒂𝒉𝒊...
    𝒀𝒂𝒂𝒓𝒐𝒏 𝒔𝒆 𝒛𝒚𝒂𝒅𝒂 𝒗𝒂𝒇𝒂𝒅𝒂𝒓 𝒉𝒐𝒕𝒂 𝒉𝒂𝒊 💯

🔥 𝑱𝒊𝒔𝒌𝒆 𝒔𝒂𝒂𝒕𝒉 𝒉𝒖𝒎 𝒉𝒂𝒔𝒕𝒆 𝒉𝒂𝒊...
    𝒖𝒔𝒊 𝒌𝒐 𝒅𝒆𝒌𝒉 𝒌𝒆 𝒈𝒉𝒂𝒎 𝒃𝒉𝒊 𝒃𝒉𝒂𝒈 𝒋𝒂𝒕𝒆 𝒉𝒂𝒊 💘

━━━━━━━━━━━━━━━━━━━━━━━
💎 𝑴𝒂𝒅𝒆 𝒃𝒚 𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕 𝑴𝑻𝑿`,
    attachment: fs.createReadStream(img),
    mentions: [
      { tag: nameOne, id: one },
      { tag: nameTwo, id: two }
    ]
  };

  return api.sendMessage(msg, threadID, () => fs.unlinkSync(img), messageID);
};

module.exports.run = () => {};
