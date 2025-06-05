const fs = require("fs");
module.exports.config = {
  name: "chay",
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
  if(react.includes("chay") ||
     react.includes("tea") ||
     react.includes("coffee") ||
     react.includes("chai") ||
react.includes("chae")) {
    var msg = {
        body: `● ──────────────────── ●\n ${name} 😘\n● ──────────────────── ●\n𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘, 𝐀𝐑𝐀𝐌 𝐂 𝐏𝐈𝐍𝐀 𝐆𝐀𝐑𝐀𝐌 𝐇𝐀𝐈😒👈\n● ──────────────────── ●\n𝐂𝐇𝐀𝐈 𝐇𝐎𝐍𝐓𝐎 𝐒𝐄 𝐏𝐈 𝐉𝐀𝐓𝐈 𝐇𝐀𝐈 𝐂𝐔𝐏 𝐒𝐄 𝐍𝐀𝐇𝐈..\n 𝐌𝐎𝐇𝐀𝐁𝐁𝐀𝐓 𝐃𝐈𝐋 𝐒𝐄 𝐊𝐈 𝐉𝐀𝐓𝐈 𝐇𝐀𝐈 𝐃𝐎𝐋𝐀𝐓 𝐒𝐄 𝐍𝐀𝐇𝐈..\n● ──────────────────── ●\n⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛`,attachment: fs.createReadStream(__dirname + `/uzair/tea.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
