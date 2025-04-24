module.exports.config = {
  name: "chup",
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
  if (event.body.indexOf("chup")>=0 || event.body.indexOf("Chup")>=0 || event.body.indexOf("CHUP")>=0 || event.body.indexOf("chup kar")>=0 || event.body.indexOf("Chup kar")>=0 || event.body.indexOf("CHUP KAR")>=0 || event.body.indexOf("Shutup")>=0 ||   event.body.indexOf("shutup")>=0 ) { 
    var msg = {
        body: `  ${name} Me Chup Q Raho، Me Chup Nahi Rahoga، Tum Hote Kon Ho, Jo Mujhe Chup Karwa Rahe Ho, 😒😏👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }