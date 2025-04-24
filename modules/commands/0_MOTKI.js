qmodule.exports.config = {
  name: "motki",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("moti")>=0 || event.body.indexOf("Mota")>=0 || event.body.indexOf("MOTI")>=0 || event.body.indexOf("MOTA")>=0 || event.body.indexOf("moti")>=0 || event.body.indexOf("Moti")>=0 || event.body.indexOf("mota")>=0 || event.body.indexOf("Moto")>=0 || event.body.indexOf("MOTO")>=0 || event.body.indexOf("SANDA")>=0 ) { 
    var msg = {
        body: `  ${name} Mota pet sarakh pe let gari ai phat gaya pet gari ka number 101 mota bole haye meRa pet 😂🤣👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }