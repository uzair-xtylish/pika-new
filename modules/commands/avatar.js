module.exports.config = {
    name: "avatar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "",
    commandCategory: "Utilities",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args,Users}) => {
  var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`𝐘𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐀𝐩 𝐈𝐬 𝐭𝐚𝐫𝐡𝐚 𝐔𝐬𝐞 𝐊𝐚𝐫 𝐒𝐚𝐤𝐭𝐞 𝐇𝐚𝐢:\n\n${prefix}${this.config.name} 𝐮𝐬𝐞𝐫 => 𝐘𝐞 𝐀𝐩𝐤𝐢 𝐀𝐯𝐚𝐭𝐚𝐫 𝐒𝐚𝐯𝐞 𝐊𝐚𝐫 𝐊𝐞 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞 𝐒𝐞𝐧𝐝 𝐊𝐚𝐫𝐞𝐠𝐚.\n\n${prefix}${this.config.name} 𝐮𝐬𝐞𝐫 @[Tag] => 𝐘𝐞 𝐔𝐬 𝐁𝐚𝐧𝐝𝐞 𝐊𝐚 𝐀𝐯𝐚𝐭𝐚𝐫 𝐋𝐞𝐠𝐚 𝐉𝐢𝐬 𝐊𝐨 𝐀𝐩𝐧𝐞 𝐓𝐚𝐠 𝐊𝐢𝐚 𝐇𝐚𝐢.\n\n${prefix}${this.config.name} 𝐛𝐨𝐱 => 𝐘𝐞 𝐀𝐩𝐤𝐚 𝐀𝐯𝐭 𝐁𝐨𝐱 𝐋𝐞 𝐉𝐲𝐠𝐚\n\n${prefix}${this.config.name} 𝐘𝐞 𝐔𝐬𝐞𝐫 𝐲𝐚 𝐆𝐫𝐨𝐮𝐩 𝐤𝐚 𝐭𝐢𝐝 𝐥𝐞𝐠𝐚`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
       if(!imgg) api.sendMessage(`𝐆𝐫𝐨𝐮𝐩 𝐀𝐯𝐚𝐭𝐚𝐫 ${threadInfo.threadName} 𝐓𝐡𝐢𝐬`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`𝐆𝐫𝐨𝐮𝐩 𝐀𝐯𝐚𝐭𝐚𝐫 ${threadInfo.threadName} 𝐓𝐡𝐢𝐬`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
       let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
          if(!img) api.sendMessage(`𝐆𝐫𝐨𝐮𝐩 𝐀𝐯𝐚𝐭𝐚𝐫 ${threadInfo.threadName} 𝐓𝐡𝐢𝐬`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`𝐆𝐫𝐨𝐮𝐩 𝐀𝐯𝐚𝐭𝐚𝐫 ${threadInfo.threadName} 𝐓𝐡𝐢𝐬`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    var name = (await Users.getData(id)).name
    var callback = () => api.sendMessage({body:`𝐘𝐞 𝐑𝐚𝐡𝐚 𝐀𝐩𝐤𝐚 𝐀𝐯𝐚𝐭𝐚𝐫 💓`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=1080&width=1080&access_token=`+token)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    var name = (await Users.getData(mentions)).name
    var callback = () => api.sendMessage({body:`𝐀𝐯𝐚𝐭𝐚𝐫 𝐨𝐟 ${name} 𝐓𝐡𝐢𝐬`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1080&width=1080&access_token=`+token)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    var name = (await Users.getData(args[1])).name
    var callback = () => api.sendMessage({body:`𝐀𝐯𝐚𝐭𝐚𝐫 𝐨𝐟 ${name} 𝐓𝐡𝐢𝐬`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=1080&width=1080&access_token=`+token)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
}
