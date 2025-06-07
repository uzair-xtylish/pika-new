const fs = require("fs");
module.exports.config = {
  name: "gm",
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
  if(react.includes("good morning") ||
     react.includes("gm") || react.includes("GM") || react.includes("Good Morning") ||
react.includes("Gm") ||
react.includes("GOOD MORNING")) {
    var msg = {
        body: `🌞 𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠, 𝐁𝐚𝐛𝐲  ${name} \n\n✨ 𝐔𝐦𝐞𝐞𝐝 𝐡𝐚𝐢 𝐚𝐚𝐣 𝐤𝐚 𝐝𝐢𝐧 𝐭𝐮𝐦𝐡𝐚𝐫𝐚 𝐛𝐡𝐨𝐭 𝐤𝐡𝐮𝐬𝐡𝐢𝐨𝐧 𝐬𝐞 𝐛𝐡𝐚𝐫𝐚 𝐡𝐨, 𝐡𝐚𝐬𝐢𝐨𝐧, 𝐤𝐚𝐦𝐲𝐚𝐛𝐢 𝐚𝐮𝐫 𝐬𝐮𝐧𝐬𝐡𝐢𝐧𝐞 𝐤𝐞 𝐬𝐚𝐭𝐡 ☕\n\n💫 𝐏𝐨𝐬𝐢𝐭𝐢𝐯 𝐫𝐚𝐡𝐨 𝐚𝐮𝐫 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐜𝐡𝐚𝐦𝐚𝐤𝐭𝐞 𝐫𝐚𝐡𝐨! 💖\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,attachment: fs.createReadStream(__dirname + `/uzair/gm.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☀️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
