const fs = require("fs");

module.exports.config = {
  name: "own",
  version: "3.3.4",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Unique style owner response",
  commandCategory: "no prefix",
  cooldowns: 5,
};

function formatUptime(seconds) {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

const respondedMsgIDs = new Set();

module.exports.handleEvent = async ({ api, event, Users }) => {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const react = body.toLowerCase();
  if (
    (react.includes("owner") || react.includes("Owner") || react.includes("OWNER")) &&
    !respondedMsgIDs.has(messageID)
  ) {
    respondedMsgIDs.add(messageID);

    const name = await Users.getNameUser(senderID);
    const uptime = formatUptime(process.uptime());

    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateStr = now.toLocaleDateString("en-PK", options);
    const timeStr = now.toLocaleTimeString("en-PK");

    const poeticUptimeLines = [
      `⏳ 𝐁𝐨𝐭 𝐥𝐢𝐯𝐞 𝐡𝐚𝐢: ${uptime}`,
      `🌙 𝐊𝐚𝐟𝐢 𝐝𝐞𝐫 𝐬𝐞 𝐜𝐡𝐮𝐩 𝐜𝐡𝐚𝐩 𝐚𝐜𝐭𝐢𝐯𝐞 𝐡𝐮, 𝐝𝐞𝐤𝐡𝐨 𝐦𝐞𝐑𝐢 𝐚𝐜𝐭𝐢𝐯𝐢𝐭𝐲 ${uptime}`,
      `🛡 𝐔𝐧𝐭𝐚𝐚𝐫𝐚 𝐧𝐚𝐡𝐢 𝐣𝐚𝐚𝐫𝐚, 𝐜𝐡𝐚𝐥 𝐫𝐚𝐡𝐚 𝐡𝐮 ${uptime}`,
      `🎯 𝐒𝐲𝐬𝐭𝐞𝐦 𝐬𝐭𝐚𝐫𝐭: ${uptime} 𝐢𝐭𝐧𝐚 𝐭𝐢𝐦𝐞 𝐡𝐨𝐠𝐲𝐚 𝐡𝐚𝐢`,
      `💡 𝐉𝐚𝐛 𝐭𝐮𝐦 𝐬𝐨𝐲𝐞 𝐭𝐡𝐞 𝐧𝐚, 𝐦𝐞 𝐬𝐚𝐛 𝐠𝐫𝐨𝐮𝐩 𝐤𝐞 𝐚𝐧𝐝𝐚𝐫 𝐚𝐜𝐭𝐢𝐯𝐞 𝐭𝐡𝐚 — ${uptime} 𝐝𝐞𝐤𝐡𝐨 𝐦𝐞𝐫𝐢 𝐚𝐜𝐭𝐢𝐯𝐢𝐭𝐲`,
    ];

    const randomLine = poeticUptimeLines[Math.floor(Math.random() * poeticUptimeLines.length)];

    const msg = {
      body: `╭─────────────╮
│🌸 𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊 🌸│
╰─────────────╯
● ──────────────────── ●\n✨👑 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐂𝐄𝐍𝐓𝐑𝐄 👑✨
● ──────────────────── ●
👨‍💻 𝐍𝐚𝐦𝐞: 𝐔ʑʌīī𝐑┼•__🦋•
🔥 𝐀𝐠𝐞: 𝘼𝙜𝙚 𝙟𝙖𝙣 𝙠𝙚 𝙠𝙞𝙖 𝙠𝙖𝙧𝙤𝙜𝙚? 😏😎
🖤 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡: 𝗦𝗶𝗹𝗲𝗻𝘁 𝗢𝗻𝗲-𝗦𝗶𝗱𝗲𝗱 𝗟𝗼𝘃𝗲 💔
🖤 𝐓𝐢𝐭𝐥𝐞: 𝘿𝘼𝙍𝙆 𝙈𝘼𝙁𝙄𝘼 𝙃𝘼𝘾𝙆𝙀𝙍
🏴‍☠️ 𝐌𝐨𝐝𝐞: 𝗔𝗹𝗽𝗵𝗮 𝗘𝗻𝗲𝗿𝗴𝘆 ⚡
🌍 𝐅𝐫𝐨𝐦: 𝗛𝘆𝗱𝗲𝗿𝗮𝗯𝗮𝗱 - 𝗦𝗶𝗻𝗱𝗵 🇵🇰
🧠 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧: 𝐁.𝐓𝐞𝐜𝐡 𝐈𝐍 𝐂𝐎𝐃𝐈𝐍𝐆 & 𝐇𝐀𝐂𝐊𝐈𝐍𝐆
📱 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐧𝐞𝐜𝐭: https://wa.me/923198188449
📱 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤: https://www.facebook.com/Mtxuzair
● ──────────────────── ●
🔥 𝐋𝐄𝐊𝐈𝐍 𝐘𝐄 𝐘𝐀𝐃𝐇 𝐑𝐀𝐊𝐇𝐍𝐀 🔥
🎩 𝐌𝐞𝐢𝐧 𝐬𝐡𝐨𝐫 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫𝐭𝐚, 𝐁𝐚𝐬 𝐜𝐡𝐮𝐩 𝐫𝐞𝐡 𝐤𝐚𝐫 𝐚𝐩𝐧𝐞 𝐰𝐚𝐪𝐭 𝐤𝐚 𝐢𝐧𝐭𝐢𝐳𝐚𝐫 𝐤𝐚𝐫𝐭𝐚 𝐡𝐮𝐧. 💼
『 𝐐 𝐤 𝐬𝐚𝐛𝐚𝐫 𝐡𝐢 𝐦𝐞𝐑𝐚 𝐬𝐚𝐛 𝐬𝐞 𝐛𝐚𝐫𝐚 𝐡𝐚𝐭𝐢𝐲𝐚𝐫 𝐡𝐚𝐢.. 』
<─────────────>
🕰 𝐁𝐨𝐭 𝐔𝐩𝐭𝐢𝐦𝐞 𝐑𝐞𝐩𝐨𝐫𝐭:
${randomLine}

📆 𝐃𝐚𝐭𝐞: ${dateStr}
⏰ 𝐓𝐢𝐦𝐞: ${timeStr}
<─────────────>
🦋 『${name}, 𝐈 𝐀𝐦 𝐖𝐚𝐭𝐜𝐡𝐢𝐧𝐠...』
● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
      attachment: fs.createReadStream(__dirname + `/uzair/Owner.gif`)
    };

    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👑", messageID, () => {}, true);
  }
};

module.exports.run = async () => {};
