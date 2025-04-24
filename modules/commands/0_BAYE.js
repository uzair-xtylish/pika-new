const fs = require("fs");
module.exports.config = {
  name: "bye",
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
  if(react.includes("bye") ||
     react.includes("BYE") || react.includes("Bye") || react.includes("baye") ||
react.includes("By") ||
react.includes("tc") ||     
react.includes("take care")) {
    var msg = {
        body: `${name} By by baby jaldi ana🥺👈`,attachment: fs.createReadStream(__dirname + `/uzair/bbye.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }