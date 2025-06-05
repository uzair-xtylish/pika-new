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
        body: `  ${name} \n● ──────────────────── ●\n𝐌𝐞 𝐓𝐰 𝐂𝐡𝐮𝐩 𝐇𝐨 𝐣𝐚𝐭𝐚, 𝐋𝐢𝐤𝐢𝐧 𝐓𝐮𝐣𝐡𝐞 𝐈𝐦𝐩𝐨𝐭𝐚𝐧𝐜𝐞 𝐌𝐢𝐥 𝐉𝐚𝐭𝐢, 𝐎𝐫 𝐖𝐨 𝐓𝐰 𝐌𝐞 𝐀𝐟𝐟𝐨𝐫𝐝 𝐍𝐚𝐡𝐢 𝐊𝐚𝐫 𝐒𝐚𝐤𝐭𝐚..! 😹🎁🧠\n● ──────────────────── ●\n⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
