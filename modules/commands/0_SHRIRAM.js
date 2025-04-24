const fs = require("fs");
module.exports.config = {
  name: "uuuuzzzz",
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
  if(react.includes("KIRAN") ||
     react.includes("Kìrâñ RajPööt") || react.includes("Kiran Rajput") || 
react.includes("kiran")) {
    var msg = {
        body: `${name} 🥰𝗕𝗢𝗦𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘❤️`,attachment: fs.createReadStream(__dirname + `/uzair/uza.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }