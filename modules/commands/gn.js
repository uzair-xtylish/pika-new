const fs = require("fs");
module.exports.config = {
  name: "good night",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gn") ||
     react.includes("Gudnight") || react.includes("GN") || react.includes("GOODNIGHT") ||
react.includes("goodnight") ||
react.includes("Goodnight")) {
    var msg = {
        body: `🌙 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭, 𝐁𝐚𝐛𝐲 ${name} 😴💖\n\n✨ 𝐊𝐡𝐮𝐚𝐛𝐨𝐧 𝐦𝐞 𝐦𝐮𝐬𝐤𝐮𝐫𝐚𝐧𝐚, 𝐨𝐫 𝐝𝐢𝐥 𝐦𝐞𝐢𝐧 𝐛𝐚𝐬𝐚 𝐥𝐞𝐧𝐚...\n𝐓𝐚𝐤𝐞 𝐜𝐚𝐫𝐞 𝐦𝐞𝐫𝐞 𝐉𝐚𝐚𝐧 🥰😘\n\n💤 𝐑𝐞𝐬𝐭 𝐰𝐞𝐥𝐥 𝐚𝐧𝐝 𝐬𝐥𝐞𝐞𝐩 𝐭𝐢𝐠𝐡𝐭 💫\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,attachment: fs.createReadStream(__dirname + `/uzair/gnn.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
