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
        body: ` ${name} \n● ──────────────────── ●\n𝐓𝐮𝐣𝐡𝐞 𝐋𝐚𝐠𝐭𝐚 𝐇𝐚𝐢 𝐓𝐮 𝐌𝐮𝐣𝐡𝐞 𝐍𝐢𝐜𝐡𝐚 𝐃𝐞𝐤𝐡𝐚 𝐑𝐚𝐡𝐚 𝐇𝐚𝐢, 😂 𝐏𝐚𝐫 𝐀𝐬𝐚𝐥 𝐌𝐞 𝐓𝐮 𝐀𝐩𝐧𝐚 𝐒𝐭𝐚𝐧𝐝𝐚𝐫𝐝 𝐒𝐚𝐛 𝐊𝐨 𝐃𝐢𝐤𝐡𝐚 𝐑𝐚𝐡𝐚 𝐇𝐚𝐢. 🕳️🐶\n● ──────────────────── ●\n⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
