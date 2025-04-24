const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "punch",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Punch the person you tag",
  commandCategory: "Act",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.postimg.cc/SNX8pD8Z/13126.gif",
"https://i.postimg.cc/TYZb2gJT/1467506881-1016b5fd386cf30488508cf6f0a2bee5.gif",
"https://i.postimg.cc/fyV3DR33/anime-punch.gif",
"https://i.postimg.cc/P5sLnhdx/onehit-30-5-2016-3.gif",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("𝐤𝐢𝐬𝐢 𝐛𝐡𝐢 1 𝐩𝐚𝐫𝐬𝐨𝐧 𝐤𝐨 𝐭𝐚𝐠 𝐤𝐚𝐫", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝐏𝐢𝐤𝐚 𝐢𝐧 𝐭𝐡𝐞 𝐟𝐚𝐜𝐞 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐦𝐚𝐜𝐡𝐢𝐧𝐞 𝐭𝐨 𝐜𝐨𝐧𝐭𝐚𝐢𝐧 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐬 👿`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/puch.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/puch.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/puch.gif")).on("close",() => callback());
   }
