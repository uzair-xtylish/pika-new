const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "friends",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Auto bestie frame when 'friend' + 2 mentions",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 5,
  dependencies: { "axios": "", "fs-extra": "", "path": "", "jimp": "" }
};

module.exports.onLoad = () => {
  if (module.exports.config.credits !== "uzairrajput") {
    console.log("⛔ Credit tampering detected. Script will now crash.");
    process.exit(1);
  }

  const dir = path.join(__dirname, "uzair", "mtx");
  const framePath = path.join(dir, "mtxfrnd.jpg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(framePath)) {
    axios.get("https://i.ibb.co/bRJ04NvS/9a59babdfbfa6d19ef94ad52cbef75a4.jpg", { responseType: 'arraybuffer' })
      .then(res => fs.writeFileSync(framePath, Buffer.from(res.data)))
      .catch(err => console.log("❌ Frame download failed", err));
  }
};

async function makeImage({ one, two, three }) {
  const __root = path.join(__dirname, "uzair", "mtx");
  const frame = await jimp.read(path.join(__root, "mtxfrnd.jpg"));

  const finalPath = path.join(__root, `bestie_${one}_${two}_${three}.png`);
  const avt1 = path.join(__root, `avt_${one}.png`);
  const avt2 = path.join(__root, `avt_${two}.png`);
  const avt3 = path.join(__root, `avt_${three}.png`);

  const getAvt = async (uid, filepath) => {
    const res = await axios.get(`https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' });
    fs.writeFileSync(filepath, Buffer.from(res.data));
  };

  await getAvt(one, avt1);
  await getAvt(two, avt2);
  await getAvt(three, avt3);

  const circled = async (img) => (await jimp.read(img)).circle().getBufferAsync("image/png");
  const [circle1, circle2, circle3] = await Promise.all([
    jimp.read(await circled(avt1)),
    jimp.read(await circled(avt2)),
    jimp.read(await circled(avt3)),
  ]);

  frame.composite(circle2.resize(160, 160), 31, 177);//left
  frame.composite(circle1.resize(172, 172), 266, 31);//center 
  frame.composite(circle3.resize(159, 159), 535, 174);//friends 

  const buffer = await frame.getBufferAsync("image/png");
  fs.writeFileSync(finalPath, buffer);

  fs.unlinkSync(avt1);
  fs.unlinkSync(avt2);
  fs.unlinkSync(avt3);

  return finalPath;
}

module.exports.handleEvent = async ({ event, api }) => {
  const { threadID, messageID, mentions, senderID, body } = event;
  if (!body) return;

  const content = body.toLowerCase();
  if (!content.includes("friends")) return;

  const mentionIDs = Object.keys(mentions);
  if (mentionIDs.length < 2) return;

  const [left, right] = mentionIDs;

  const senderInfo = await api.getUserInfo(senderID);
  const senderName = senderInfo[senderID]?.name || "You";

  const leftName = mentions[left];
  const rightName = mentions[right];

  return makeImage({ one: senderID, two: left, three: right }).then(imgPath =>
    api.sendMessage({
      body: `🔥『 𝘿𝙀𝙎𝙄 𝘿𝙐𝙍𝘿𝙀 𝘿𝙊𝙎𝙏 』🔥
● ──────────────────── ●

👑 𝙆𝙞𝙣𝙜/𝙌𝙪𝙚𝙚𝙣: ${senderName}
👯‍♀️ 𝘽𝙚𝙨𝙩𝙞𝙚𝙨: ${leftName} 💖 ${rightName}

● ──────────────────── ●
💫 𝘿𝙤𝙨𝙩𝙞 = 𝙈𝙖𝙨𝙩𝙞 + 𝙋𝙞𝙮𝙖𝙧 + 𝙏𝙧𝙪𝙨𝙩 💫
📸 𝙎𝙝𝙖𝙧𝙚 𝙩𝙝𝙞𝙨 𝙢𝙤𝙢𝙚𝙣𝙩!

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
      attachment: fs.createReadStream(imgPath)
    }, threadID, () => fs.unlinkSync(imgPath), messageID)
  );
};

module.exports.run = () => {};
