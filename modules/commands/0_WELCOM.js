module.exports.config = {
  name: "welcome",
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
  if (event.body.indexOf("welcome")>=0 || event.body.indexOf("most Welcome")>=0 || event.body.indexOf("wel")>=0 || event.body.indexOf("most welcome")>=0 || event.body.indexOf("weltm")>=0 || event.body.indexOf("WELCOME")>=0 || event.body.indexOf("welcome")>=0 || event.body.indexOf("welcome a lot")>=0 || event.body.indexOf("WEL")>=0 || event.body.indexOf("Wel")>=0 ) { 
    var msg = {
        body: ` I Really Appreciate It. ☺️  ${name} sir 😍😘👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }