const fs = require("fs");
module.exports.config = {
  name: "khana",
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
  if(react.includes("khana") ||
     react.includes("Khana") || react.includes("khao") || react.includes("Khao") ||
react.includes("KHANA") ||
react.includes("khaya") ||
react.includes("lunch") ||
react.includes("Lunch") ||
react.includes("LUNCH") ||
react.includes("DINNER") ||
react.includes("dinner") ||
react.includes("Dinner") ||
react.includes("breakfast") ||
react.includes("Breakfast") ||     
react.includes("BREAKFAST") ||     
react.includes("KHAO")) {
    var msg = {
        body: `${name} Roko baby, me abi bana raha hu phr sat me 😋👈`,attachment: fs.createReadStream(__dirname + `/uzair/khana.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }