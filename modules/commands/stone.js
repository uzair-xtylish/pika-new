const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "stone",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Kick the tag friend",
  commandCategory: "Act",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.postimg.cc/65TSxJYD/2ce5a017f6556ff103bce87b273b89b7.gif",
"https://i.postimg.cc/65SP9jPT/Anime-083428-6224795.gif",
"https://i.postimg.cc/RFXP2XfS/jXOwoHx.gif",
"https://i.postimg.cc/jSPMRsNk/tumblr-nyc5ygy2a-Z1uz35lto1-540.gif",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("𝐊𝐢𝐬𝐢 𝐚𝐤 𝐤𝐨 𝐭𝐚𝐠 𝐤𝐚𝐫", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝐓𝐮𝐦 𝐛𝐡𝐨𝐭 𝐛𝐚𝐭𝐭𝐚𝐦𝐢𝐳𝐞 𝐡𝐨 𝐦𝐞 𝐭𝐮𝐦𝐡𝐞𝐞𝐢𝐧 𝐦𝐚𝐫 𝐝𝐚𝐥𝐨𝐠𝐚 🎀`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
   }
