const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "bro", // 🔐 Sirf is command se chalega
  version: "7.3.3",
  hasPermssion: 0,
  credits: "uzairrajput", // 🔒 Lock yahi hai
  description: "Create stylish bestie image when user mentions one person",
  commandCategory: "image",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: { axios: "", "fs-extra": "", path: "", jimp: "" }
};

// 📂 Jab command load ho to image folder ready ho jaye
module.exports.onLoad = async () => {
  const dir = __dirname + `/uzair/mtx/`;
  const imgPath = path.join(dir, "mtxbestie.jpg");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(imgPath)) {
    const img = (await axios.get("https://i.ibb.co/JRF2J9yx/brother.jpg", { responseType: "arraybuffer" })).data;
    fs.writeFileSync(imgPath, Buffer.from(img));
  }
};

// 👑 DP ko circle me convert karega
async function circle(imagePath) {
  const img = await jimp.read(imagePath);
  img.circle();
  return await img.getBufferAsync("image/png");
}

// 💞 Final image banane ka kaam yahan hota hai
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

// 💌 Jab koi message bheje jisme ek mention ho aur "bro" likha ho
module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions, body } = event;
  const mentionIDs = Object.keys(mentions || {});
  if (mentionIDs.length !== 1 || !body) return;

  // ✅ Sirf tab chalega jab exact "bro" likha ho (na jyada na kam)
  const exactMatch = body.toLowerCase().split(/\s+/).includes("bro");
  if (!exactMatch) return;

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

// 🔕 Command run part empty hi rahega
module.exports.run = () => {};
