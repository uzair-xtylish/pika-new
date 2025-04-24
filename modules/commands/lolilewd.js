module.exports.config = {
  name: "memo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Random meme",
  commandCategory: "nsfw",
  usages: "memo",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [

     "https://i.imgur.com/LHcPjrB.mp4",
     "https://i.imgur.com/jh1mJlh.mp4",
     "https://i.imgur.com/T7Ygqp5.mp4",
     "https://i.imgur.com/gvKUEFr.mp4",
     "https://i.imgur.com/6hSfdT8.mp4",
     "https://i.imgur.com/zr8lthB.mp4",
     "https://i.imgur.com/goM8PXg.mp4",
     "https://i.imgur.com/KS47A9A.mp4",
     "https://i.imgur.com/eVVjvLl.mp4",
     "https://i.imgur.com/kn1NGDi.mp4",
     "https://i.imgur.com/54abSAE.mp4",
     "https://i.imgur.com/hlRmJYL.mp4",
     "https://i.imgur.com/d05LUdL.mp4",
     "https://i.imgur.com/54abSAE.mp4",
     "https://i.imgur.com/EKcKYBV.mp4",
     "https://i.imgur.com/1WdnYw9.mp4",
     "https://i.imgur.com/d05LUdL.mp4",
     "https://i.imgur.com/No7rINR.mp4",
     "https://i.imgur.com/IYLkytk.mp4",
     "https://i.imgur.com/Fik7WnQ.mp4", 
     "https://i.imgur.com/thL9KuC.mp4",
     "https://i.imgur.com/O9uwjMe.mp4",
    
    ];
      var callback = () => api.sendMessage({body:`𝐌𝐚𝐝𝐞 𝐁𝐲: 𝑴𝑻𝑿 💚✨ ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback()); 
    

}
  
