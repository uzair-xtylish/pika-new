const fs = require("fs");
module.exports.config = {
  name: "chalta hu",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chalta hu") ||
     react.includes("CHALTA HU") || react.includes("chalte hai") || react.includes("Chalta hu") ||
react.includes("Chalte hai") ||
react.includes("CHALTE HAI")) {
    var msg = {
        body: `${name} \n● ──────────────────── ●\n𝐀𝐏𝐍𝐀 𝐊𝐇𝐀𝐘𝐀𝐋 𝐑𝐀𝐊𝐇𝐍𝐀 𝐎𝐑 𝐉𝐀𝐋𝐃𝐈 𝐀𝐍𝐀 𝐖𝐎 𝐊𝐈𝐀 𝐇𝐄𝐍𝐀 𝐓𝐔𝐌𝐇𝐀𝐑𝐄 𝐁𝐈𝐍𝐀 𝐘𝐀𝐇𝐀 𝐃𝐈𝐋 𝐍𝐀𝐇𝐈 𝐋𝐀𝐆𝐄𝐆𝐀\n● ──────────────────── ●\n⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
