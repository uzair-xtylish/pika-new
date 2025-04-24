const fs = require("fs");
module.exports.config = {
  name: "lnti",
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
  if(react.includes("LANAT") ||
     react.includes("Lanat") || react.includes("lanat") || react.includes("lantii") ||
react.includes("LANTII") ||
react.includes("Lantii")) {
    var msg = {
        body: `Ye len bhai lanat 🖐️🙃👈😆`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }