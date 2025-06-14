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
        body: `   ${name} 𝘉𝘢𝘣𝘺\n● ──────────────────── ●\n『 𝘈𝘪𝘴𝘦 𝘭𝘢𝘧𝘻𝘰𝘯 𝘬𝘢 𝘫𝘸𝘢𝘣 𝘴𝘪𝘳𝘧 𝘦𝘬 𝘥𝘶𝘢 𝘩𝘢𝘪: 𝘈𝘭𝘭𝘢𝘩 𝘵𝘶𝘫𝘩𝘦 𝘩𝘢𝘳 𝘫𝘢𝘨𝘢𝘩 𝘪𝘻𝘻𝘢𝘵 𝘰𝘳 𝘱𝘺𝘢𝘳 𝘥𝘦 𝘫𝘢𝘩𝘢𝘯 𝘵𝘶 𝘫𝘢𝘺𝘦 🤲❤️ 』 \n● ──────────────────── ●\n𒁍⃝𝐔ʑʌīī𝐑┼•__🦋•`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
