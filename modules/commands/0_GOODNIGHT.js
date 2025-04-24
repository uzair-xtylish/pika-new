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
        body: `Sweet Dream ${name} take care babu 🥰😘👈`,attachment: fs.createReadStream(__dirname + `/uzair/gnn.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }