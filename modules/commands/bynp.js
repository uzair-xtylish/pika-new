const fs = require("fs");

module.exports.config = {
  name: "bye",
  version: "2.1.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Just Respond",
  commandCategory: "no prefix",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ api, event, Users }) => {
  const name = await Users.getNameUser(event.senderID);
  const { threadID, messageID } = event;
  const react = event.body.toLowerCase();

  if (
    react.includes("bye") ||
    react.includes("baye") ||
    react.includes("by") ||
    react.includes("tc") ||
    react.includes("take care")
  ) {
    // 🟡 Array of possible goodbye messages
    const messages = [
      `𝐁𝐚𝐲𝐞${name} 𝐉𝐚𝐚𝐧𝐞 𝐬𝐞 𝐩𝐞𝐡𝐥𝐞 𝐞𝐤 𝐛𝐚𝐚𝐭 𝐛𝐚𝐭𝐚 𝐝𝐨… 𝐭𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐢𝐭𝐧𝐚 𝐜𝐮𝐭𝐞 𝐤𝐲𝐮𝐧 𝐥𝐚𝐠𝐭𝐢 𝐡𝐨? 😩❤️ 𝐖𝐚𝐢𝐬𝐞 ‘𝐛𝐚𝐲𝐞’ 𝐛𝐨𝐥𝐧𝐚 𝐭𝐡𝐚 𝐲𝐚 𝐛𝐚𝐬 𝐦𝐮𝐣𝐡𝐞 𝐣𝐞𝐚𝐥𝐨𝐮𝐬 𝐤𝐚𝐫𝐧𝐚 𝐭𝐡𝐚? 😏🔥`,
      `𝐁𝐚𝐲𝐞 ${name}... 𝐣𝐚𝐨, 𝐥𝐞𝐤𝐢𝐧 𝐚𝐠𝐚𝐫 𝐤𝐢𝐬𝐢 𝐨𝐫 𝐬𝐞 𝐛𝐡𝐢 𝐢𝐭𝐧𝐢 𝐩𝐲𝐚𝐚𝐫𝐢 𝐛𝐚𝐚𝐭 𝐤𝐢 𝐧𝐚, 𝐭𝐨𝐡 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐭𝐚𝐭𝐮𝐬 𝐩𝐞 𝐛𝐚𝐬 '𝐬𝐞𝐞𝐧' 𝐤𝐚𝐫 𝐤𝐞 𝐜𝐡𝐡𝐨𝐫 𝐝𝐮𝐧𝐠𝐚 😤👀🤣`,
      `𝐁𝐚𝐲𝐞 ? ${name} 𝐓𝐮𝐦 '𝐛𝐚𝐲𝐞' 𝐛𝐨𝐥𝐭𝐢 𝐡𝐨 𝐣𝐚𝐢𝐬𝐞 𝐤𝐨𝐢 𝐬𝐰𝐞𝐞𝐭 𝐩𝐨𝐢𝐬𝐨𝐧… 𝐬𝐮𝐧𝐭𝐞 𝐡𝐢 𝐜𝐮𝐭𝐞 𝐥𝐚𝐠𝐭𝐚 𝐡𝐚𝐢, 𝐥𝐞𝐤𝐢𝐧 𝐛𝐚𝐚𝐝 𝐦𝐞 𝐝𝐢𝐥 𝐡𝐚𝐥𝐤𝐚 𝐡𝐚𝐥𝐤𝐚 𝐭𝐨𝐨𝐭 𝐣𝐚𝐚𝐭𝐚 𝐡𝐚𝐢 🥲🍬💔`,
      `𝐁𝐚𝐲𝐞 ? ${name}  𝐀𝐜𝐡𝐚 𝐣𝐚𝐨… 𝐥𝐞𝐤𝐢𝐧 𝐰𝐚𝐩𝐚𝐬 𝐚𝐚𝐤𝐞 𝐧𝐚 𝐤𝐞𝐡𝐧𝐚 𝐤𝐢 ‘𝐦𝐮𝐣𝐡𝐞 𝐲𝐚𝐚𝐝 𝐤𝐢𝐲𝐚?’ 𝐤𝐲𝐮𝐧𝐤𝐢 𝐦𝐞  𝐭𝐰 𝐭𝐮𝐦𝐡𝐚𝐫𝐚 𝐧𝐚𝐚𝐦 𝐡𝐚𝐫 𝐬𝐧𝐞𝐞𝐳𝐞 𝐦𝐞𝐢𝐧 𝐛𝐡𝐢 𝐥𝐞 𝐫𝐚𝐡𝐚 𝐡𝐨𝐨𝐧... 𝐚𝐜𝐡𝐨𝐨-${name}! 😷❤️😂`,
      `𝐁𝐚𝐲𝐞? ${name}  𝐉𝐚 𝐫𝐚𝐡𝐢 𝐡𝐨? 𝐅𝐢𝐧𝐞. 𝐏𝐚𝐫 𝐲𝐚𝐚𝐝 𝐫𝐚𝐤𝐡𝐧𝐚, 𝐭𝐮𝐦 𝐠𝐚𝐲𝐢 𝐭𝐰 𝐦𝐞𝐫𝐢 𝐖𝐢𝐅𝐢 𝐤𝐢 𝐬𝐩𝐞𝐞𝐝 𝐛𝐡𝐢 𝐬𝐥𝐨𝐰 𝐡𝐨 𝐣𝐚𝐚𝐭𝐢 𝐡𝐚𝐢… 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐤𝐚𝐚𝐟𝐢 𝐬𝐭𝐫𝐨𝐧𝐠 𝐭𝐡𝐚 𝐧𝐚 𝐡𝐚𝐦𝐚𝐫𝐚 😉📶💘`,
      `𝐁𝐚𝐲𝐞 ? ${name}  𝐉𝐚 𝐫𝐚𝐡𝐢 𝐡𝐨 𝐭𝐨𝐡 𝐣𝐚𝐨… 𝐩𝐚𝐫 𝐲𝐚𝐝 𝐫𝐚𝐤𝐡𝐧𝐚, 𝐦𝐞 𝐲𝐚𝐡𝐚𝐧 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐛𝐢𝐧𝐚 𝐞𝐦𝐨𝐣𝐢-𝐥𝐞𝐬𝐬, 𝐦𝐞𝐦𝐞-𝐥𝐞𝐬𝐬 𝐨𝐫 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 ‘𝐡𝐦𝐦𝐦’ 𝐤𝐞 𝐛𝐢𝐧𝐚 𝐮𝐝𝐚𝐬𝐢 𝐦𝐞 𝐝𝐨𝐨𝐛𝐚 𝐡𝐮𝐚 𝐫𝐚𝐡𝐮𝐧𝐠𝐚 😩💔 — 𝐩𝐚𝐫 𝐡𝐚𝐚𝐧, 𝐣𝐚𝐚𝐭𝐞 𝐣𝐚𝐚𝐭𝐞 𝐞𝐤 𝐯𝐢𝐫𝐭𝐮𝐚𝐥 𝐣𝐡𝐚𝐩𝐩𝐢 𝐝𝐞 𝐝𝐨, 𝐰𝐚𝐫𝐧𝐚 𝐧𝐞𝐞𝐧𝐝 𝐧𝐚𝐡𝐢 𝐚𝐚𝐲𝐞𝐠𝐢 🥺🫂💤`,
      
      `${name} , 𝐭𝐮𝐦 𝐠𝐚𝐲𝐢 𝐭𝐨𝐡 𝐬𝐚𝐛 𝐤𝐮𝐜𝐡 𝐭𝐡𝐨𝐫𝐚 𝐛𝐨𝐫𝐢𝐧𝐠 𝐡𝐨 𝐣𝐚𝐚𝐭𝐚 𝐡𝐚𝐢… 𝐦𝐞𝐦𝐞𝐬 𝐦𝐞𝐢𝐧 𝐦𝐚𝐳𝐚 𝐧𝐚𝐡𝐢, 𝐟𝐨𝐨𝐝 𝐦𝐞𝐢𝐧 𝐭𝐚𝐬𝐭𝐞 𝐧𝐚𝐡𝐢, 𝐨𝐫 𝐧𝐞𝐞𝐧𝐝 𝐦𝐞𝐢𝐧 𝐭𝐮𝐦 𝐧𝐚𝐡𝐢 😪🍔💭❤️
`
    ];

    // 🔁 Randomly select one message
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    const msg = {
      body: randomMsg,
      attachment: fs.createReadStream(__dirname + `/uzair/bbye.gif`)
    };

    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👋", event.messageID, (err) => {}, true);
  }
};

module.exports.run = async ({ api, event }) => {};
