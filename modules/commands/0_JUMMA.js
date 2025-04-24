const fs = require("fs");
module.exports.config = {
  name: "jumma",
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
  if(react.includes("jumma") ||
     react.includes("JUMMA") ||
     react.includes("Jumma") ||
     react.includes("Jumma Mubarak") || react.includes("جمعہ مبارک") ||
react.includes("Happy Friday") ||
react.includes("happy friday")) {
    var msg = {
        body: `${name} 💚✨ apko bhi Mubarak 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/jumma.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }