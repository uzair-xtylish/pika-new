const fs = require("fs");
module.exports.config = {
  name: "asslama",
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
  if(react.includes("assalamualaikum") ||
     react.includes("SALAM") || react.includes("As.km") || react.includes("Assalam o alaikum") ||
react.includes("Assalamualaikum") ||
react.includes("assalam o alaikum")) {
    var msg = {
        body: `✨🌸 ۞ 𝑾𝒂 𝑨𝒍𝒂𝒊𝒌𝒖𝒎 𝑨𝒔𝒔𝒂𝒍𝒂𝒎, ${name} ۞ 💞 𝑫𝒊𝒍 𝑺𝒆 𝑫𝒊𝒍 𝑻𝒂𝒌, 𝑻𝒖 𝑯𝒂𝒊 𝑴𝒆𝒓𝒂 𝑩𝑨𝑩𝒀! 😘💖 🌹✨`,attachment: fs.createReadStream(__dirname + `/uzair/assm.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😌", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
