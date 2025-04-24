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
        body: `${name} 😘Ye lo babu, aram c pina garam hai😒👈`,attachment: fs.createReadStream(__dirname + `/uzair/tea.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }