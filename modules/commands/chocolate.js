const fs = require("fs");
module.exports.config = {
  name: "chocolate",
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
  if(react.includes("chocolate") ||
     react.includes("toffee") ||
     react.includes("choc") ||
     react.includes("chaklet") ||
react.includes("Chocolate")) {
    var msg = {
        body: `${name} \n● ──────────────────── ●\n𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐌𝐔𝐅𝐓 𝐊𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐊𝐇𝐀𝐎 𝐓𝐔𝐌 𝐋𝐈𝐊𝐈𝐍 𝐀𝐁 𝐑𝐎𝐍𝐀 𝐍𝐀𝐇𝐈..😒👈\n● ──────────────────── ●\n⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛`,attachment: fs.createReadStream(__dirname + `/uzair/choco.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍫", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
