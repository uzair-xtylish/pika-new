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
        body: `Chalo jaldi c niklo, phir apna muh nahi dikhana😐👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }