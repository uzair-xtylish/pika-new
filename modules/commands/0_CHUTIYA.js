module.exports.config = {
  name: "chutiya",
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
  if (event.body.indexOf("chutiya")>=0 || event.body.indexOf("Chutiya")>=0 ||
 event.body.indexOf("chutia")>=0 || event.body.indexOf("Chutia")>=0 ||    event.body.indexOf("CHUTIYA")>=0 ) { 
    var msg = {
        body: ` ${name} tum kutty ho or me tmka owner😒😒👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }