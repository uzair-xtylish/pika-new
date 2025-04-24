module.exports.config = {
  name: "tharki",
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
  if (event.body.indexOf("Tharki")>=0 ||  event.body.indexOf("tarki")>=0 ) { 
    var msg = {
        body: ` ${name} tum thak gaye ho, tumhra baap thaka.hua hai, tumhara pura khandan tharki teri gf bhi tharki saliya-😒😒👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }