module.exports.config = {
  name: "pgl",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
  cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);

  if (event.body.toLowerCase().includes("pgl") || 
      event.body.toLowerCase().includes("pagal") || 
      event.body.toLowerCase().includes("idiot") || 
      event.body.toLowerCase().includes("mental") || 
      event.body.toLowerCase().includes("syco") || 
      event.body.toLowerCase().includes("dafar") || 
      event.body.toLowerCase().includes("na samjh")) {

    const replies = [
`😹 𝐇𝐚𝐲𝐞 ${name}...
𝐌𝐚𝐢𝐧 𝐩𝐚𝐠𝐚𝐥 𝐧𝐚𝐡𝐢 𝐡𝐮𝐧 𝐛𝐚𝐬 𝐭𝐡𝐨𝐫𝐚 𝐬𝐲𝐬𝐭𝐞𝐦 𝐡𝐚𝐧𝐠 𝐫𝐞𝐡𝐭𝐚 𝐡𝐚𝐢 𝐤𝐚𝐛𝐡𝐢 𝐤𝐚𝐛𝐡𝐢 😜💥
𝐀𝐢𝐬𝐞 𝐡𝐢 𝐦𝐚𝐬𝐭 𝐜𝐡𝐞𝐞𝐳𝐞𝐢𝐧 𝐛𝐨𝐥𝐭𝐚 𝐫𝐞𝐡𝐭𝐚 𝐡𝐮𝐧 𝐛𝐢𝐧𝐚 𝐤𝐢𝐬𝐢 𝐫𝐞𝐚𝐬𝐨𝐧 𝐤𝐞 😝🤣

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

`🤪 𝐎𝐲𝐞 𝐡𝐨𝐲𝐞 ${name}...
𝐏𝐚𝐠𝐚𝐥 𝐭𝐨 𝐧𝐚𝐡𝐢... 𝐥𝐞𝐤𝐢𝐧 𝐭𝐡𝐨𝐫𝐚 𝐬𝐚 𝐜𝐮𝐭𝐞 𝐨𝐫 𝐜𝐨𝐧𝐟𝐮𝐬𝐞 𝐳𝐚𝐫𝐨𝐨𝐫 𝐡𝐮𝐧 😋💘
𝐊𝐢𝐬𝐢 𝐤𝐚 𝐩𝐲𝐚𝐫 𝐝𝐞𝐤𝐡 𝐤𝐚𝐫 𝐝𝐢𝐦𝐚𝐠 𝐡𝐢𝐥 𝐣𝐚𝐭𝐚 𝐡𝐚𝐢 😅🧠

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

`🤣 𝐎𝐡 𝐛𝐡𝐚𝐢 ${name}...
𝐏𝐚𝐠𝐚𝐥 𝐤𝐞𝐡𝐧𝐞 𝐬𝐞 𝐩𝐞𝐡𝐥𝐞 𝐬𝐨𝐜𝐡 𝐥𝐨... 𝐐𝐊 𝐦𝐞 𝐂𝐮𝐭𝐞+𝐂𝐫𝐚𝐳𝐲 𝐜𝐨𝐦𝐛𝐨 𝐡𝐮𝐧 😎🔥
𝐒𝐭𝐲𝐥𝐞 𝐛𝐡𝐢 𝐚𝐩𝐧𝐚, 𝐨𝐫 𝐦𝐨𝐨𝐝 𝐛𝐡𝐢 𝐚𝐩𝐧𝐚 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢 🤭

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
`🫣 𝐇𝐚𝐲𝐞 𝐡𝐚𝐲𝐞 ${name}...
𝐓𝐮𝐦𝐡𝐞 𝐤𝐚𝐢𝐬𝐞 𝐛𝐭𝐚𝐮𝐧... 𝐏𝐚𝐠𝐚𝐥 𝐭𝐨 𝐡𝐮𝐦 𝐭𝐚𝐛 𝐡𝐮𝐞 𝐭𝐡𝐞 𝐣𝐚𝐛 𝐦𝐚𝐢𝐧𝐞 𝐭𝐮𝐦𝐡𝐞 𝐝𝐞𝐤𝐡𝐚 𝐭𝐡𝐚😍🥹

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

`🌀 𝐎𝐲𝐞 𝐝𝐞𝐤𝐡 ${name}...
𝐏𝐚𝐠𝐚𝐥 𝐦𝐞 𝐧𝐚𝐡𝐢, 𝐦𝐚𝐑𝐢 𝐜𝐡𝐨𝐢𝐜𝐞𝐬 𝐡𝐢 𝐚𝐥𝐚𝐠 𝐡𝐚𝐢 😅😂
𝐉𝐨 𝐬𝐚𝐛 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫𝐭𝐞, 𝐰𝐨𝐡𝐢 𝐦𝐞 𝐤𝐚𝐫𝐭𝐚 𝐡𝐮𝐧 😈🧠

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
`🙃 𝐎𝐲𝐞 𝐡𝐨𝐨𝐨 ${name}...
𝐏𝐚𝐠𝐚𝐥 𝐭𝐨 𝐦𝐞 𝐛𝐢𝐥𝐤𝐮𝐥 𝐧𝐚𝐡𝐢 𝐡𝐮𝐧, 𝐛𝐚𝐬 𝐥𝐢𝐟𝐞 𝐤𝐨 𝐡𝐚𝐥𝐤𝐞 𝐦𝐞𝐢𝐧 𝐥𝐞𝐭𝐚  𝐡𝐮𝐧 😎🌈
𝐇𝐚𝐬𝐧𝐚 𝐡𝐚𝐬𝐚𝐧𝐚 𝐡𝐮𝐧𝐚𝐫 𝐡𝐚𝐢 𝐦𝐞𝐑𝐚, 𝐝𝐢𝐦𝐚𝐠 𝐤𝐡𝐫𝐚𝐛 𝐧𝐚𝐡𝐢 😅

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
`😜  ${name}...
𝐌𝐞 𝐩𝐚𝐠𝐚𝐥 𝐧𝐚𝐡𝐢 𝐡𝐨𝐭𝐚, 𝐌𝐞 𝐬𝐢𝐫𝐟 𝐮𝐧𝐡𝐢 𝐤𝐞 𝐥𝐢𝐲𝐞 𝐜𝐫𝐚𝐳𝐲 𝐡𝐨𝐭𝐚 𝐡𝐮𝐧 𝐣𝐨 𝐦𝐮𝐣𝐡𝐞 𝐝𝐢𝐥 𝐬𝐞 𝐜𝐡𝐚𝐡𝐭𝐞 𝐡𝐚𝐢𝐧 💖🤯

● ──────────────────── ●
𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,
];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    api.sendMessage({ body: randomReply }, threadID, messageID);
    api.setMessageReaction("🥴", event.messageID, (err) => {}, true);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
