const fs = require("fs");
module.exports.config = {
  name: "gana",
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
  if(react.includes("gana") ||
     react.includes("Gana") || react.includes("Song") || react.includes("song") ||
react.includes("music") ||
react.includes("Music")) {
    var msg = {
        body: `agar apne ye [#song] suna hai tw is song ka name likhe Yar 🙂🖐️`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎧", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }