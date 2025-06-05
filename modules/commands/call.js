module.exports.config = {
  name: "call",
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
  if (event.body.indexOf("call")>=0 || event.body.indexOf("Call")>=0 || event.body.indexOf("CALL")>=0 || event.body.indexOf("cal")>=0 || event.body.indexOf("CLL")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call aao")>=0 || event.body.indexOf("Call tapko")>=0 || event.body.indexOf("call tapko")>=0 || event.body.indexOf("Cal")>=0 ) { 
    var msg = {
        body: `${name} \n● ──────────────────── ●\n ${name} \n● ──────────────────── ●\n𝐀𝐑𝐘 𝐁𝐀𝐁𝐘 𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐄 𝐂𝐀𝐋𝐋 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑 𝐒𝐀𝐊𝐓𝐄 𝐌𝐄 𝐓𝐖 𝐁𝐎𝐓 𝐇𝐔𝐍. 🥺🫤\n● ──────────────────── ●\n‎⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛•`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
