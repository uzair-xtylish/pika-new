module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Upload photos to imgur",
    usePrefix: false,
    commandCategory: "Utilities",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please give feedback or enter a link of an image', event.threadID, event.messageID)
const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/imgurupload?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
var status = res.data.uploaded.status;
    return api.sendMessage(`===「 𝗧𝗢𝗢𝗟 𝗜𝗠𝗚𝗨𝗥 」===\n━━━━━━━━━━━━━\n𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${status}\n𝗟𝗶𝗻𝗸: ${img}`, event.threadID, event.messageID);
    
      }