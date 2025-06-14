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
        body: ` ${name} \n● ──────────────────── ●\n𝑻𝒉𝒂𝒓𝒌𝒊 𝒍𝒐𝒈𝒐𝒏 𝒌𝒆 𝒍𝒊𝒚𝒆 𝒕𝒐𝒉 𝑮𝒐𝒐𝒈𝒍𝒆 𝒃𝒉𝒊 𝒘𝒂𝒓𝒏𝒊𝒏𝒈 𝒅𝒆𝒕𝒂 𝒉𝒂𝒊: 『𝐃𝐨 𝐍𝐨𝐭 𝐃𝐢𝐬𝐭𝐮𝐫𝐛 – 𝐂𝐫𝐢𝐧𝐠𝐞 𝐀𝐡𝐞𝐚𝐝!』🚧🤮`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😬", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
