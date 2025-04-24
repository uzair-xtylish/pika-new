module.exports.config = {
  name: "pgl",
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
  if (event.body.indexOf("pgl")>=0 || event.body.indexOf("Pgl")>=0 || event.body.indexOf("PGL")>=0 || event.body.indexOf("PAGAL")>=0 || event.body.indexOf("pagal")>=0 || event.body.indexOf("idiot ")>=0 || event.body.indexOf("mental")>=0 || event.body.indexOf("Syco")>=0 || event.body.indexOf("Dafar")>=0 || event.body.indexOf("Na samjh")>=0 ) { 
    var msg = {
        body: `  ${name}  Hm Pagal nhi hai bhaiya hmra dmg khrab hai😝😹 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥴", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }