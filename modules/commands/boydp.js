module.exports.config = {
  name: "boydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  usePrefix: false,
  description: "Chaeyoung Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/tV0zLqz.jpeg",
"https://i.imgur.com/5q2FdEm.jpeg",
"https://i.imgur.com/IF7LFAg.jpeg",
"https://i.imgur.com/pbifOst.jpeg",
"https://i.imgur.com/FrcTt83.jpeg",
"https://i.imgur.com/1Qdb5yQ.jpeg",
"https://i.imgur.com/oIJEtEe.jpeg",
"https://i.imgur.com/xDOr0Q1.jpeg",
"https://i.imgur.com/P5ocadV.jpeg",
"https://i.imgur.com/6aYyYBK.jpeg",
"https://i.imgur.com/xjJBSG6.jpeg",
"https://i.imgur.com/OGtxEtQ.jpeg",
"https://i.imgur.com/rLSTFSr.jpeg",
"https://i.imgur.com/vpadJrF.jpeg",
"https://i.imgur.com/jOlbEiH.jpeg",
"https://i.imgur.com/QJH8yX2.jpeg",
"https://i.imgur.com/onbQxWN.jpeg",
"https://i.imgur.com/IJ06YXP.jpeg",
"https://i.imgur.com/JO51dV7.jpeg",
"https://i.imgur.com/WaM2WvN.jpeg",
"https://i.imgur.com/twPUGFW.jpeg",
"https://i.imgur.com/B9EZLI7.jpeg",
"https://i.imgur.com/8Me6mQI.jpeg",
"https://i.imgur.com/01NBo9r.jpeg",
"https://i.imgur.com/QB4ArDa.jpeg",
"https://i.imgur.com/qHRK0Ic.jpeg",
"https://i.imgur.com/K2qSbvJ.jpeg",
"https://i.imgur.com/3tyzZW8.jpeg",
"https://i.imgur.com/VasdCUq.jpeg",
"https://i.imgur.com/Aa9Z7zc.jpeg",
"https://i.imgur.com/h9kE3Ic.jpeg","https://i.imgur.com/nNJr9Dt.jpeg","https://i.imgur.com/wFSzYnF.jpeg","https://i.imgur.com/zJ1HFs8.jpeg","https://i.imgur.com/wsv4mWY.jpeg","https://i.imgur.com/r3UTDwz.jpeg","https://i.imgur.com/ZCYaMfF.jpeg","https://i.imgur.com/hSQWcAM.jpeg","https://i.imgur.com/ovX6lfA.jpeg","https://i.imgur.com/RgfrYpM.jpeg","https://i.imgur.com/DfvFLov.jpeg","https://i.imgur.com/GPwbrDj.jpeg","https://i.imgur.com/jSifYwo.jpeg","https://i.imgur.com/Chc5pLl.jpeg","https://i.imgur.com/HbznJXK.jpeg","https://i.imgur.com/OLKdt61.jpeg","https://i.imgur.com/tDNqmML.jpeg","https://i.imgur.com/yUwx4o4.jpeg","https://i.imgur.com/e4xWHUv.jpeg","https://i.imgur.com/q6LfLx0.jpeg","https://i.imgur.com/eoKKdzI.jpeg","https://i.imgur.com/n3DS2ha.jpeg","https://i.imgur.com/E5QWGCE.jpeg","https://i.imgur.com/44YNGf6.jpeg","https://i.imgur.com/fh8i2Ph.jpeg","https://i.imgur.com/EMazlEj.jpeg","https://i.imgur.com/Uz4RQSg.jpeg","https://i.imgur.com/INxT1BF.jpeg","https://i.imgur.com/jnU2FrO.jpeg","https://i.imgur.com/qFDKN6v.jpeg","https://i.imgur.com/m84lelb.jpeg","https://i.imgur.com/FmMsaOR.jpeg","https://i.imgur.com/Ln7It9C.jpeg","https://i.imgur.com/SZ9KznS.jpeg","https://i.imgur.com/WypMeee.jpeg","https://i.imgur.com/Zq9sgX0.jpeg","https://i.imgur.com/kIvSt9A.jpeg","https://i.imgur.com/g3R1fQh.jpeg","https://i.imgur.com/jv1LGtq.jpeg","https://i.imgur.com/lKkm83o.jpeg","https://i.imgur.com/Yuai95W.jpeg","https://i.imgur.com/FNWIrNo.jpeg","https://i.imgur.com/YUOScB2.jpeg","https://i.imgur.com/Gd8K8Cg.jpeg","https://i.imgur.com/R0mvOeZ.jpeg","https://i.imgur.com/GGLiv35.jpeg","https://i.imgur.com/b4hHhSk.jpeg","https://i.imgur.com/45QWr06.jpeg","https://i.imgur.com/uz7bh1h.jpeg","https://i.imgur.com/7blSNAk.jpeg","https://i.imgur.com/r11VKsm.jpeg","https://i.imgur.com/4NyGJmu.jpeg","https://i.imgur.com/HMMe7fV.jpeg","https://i.imgur.com/447Dsfb.jpeg","https://i.imgur.com/BsfPGOF.jpeg","https://i.imgur.com/h0C5puK.jpeg","https://i.imgur.com/qpgBE0X.jpeg","https://i.imgur.com/f0HFaCv.jpeg","https://i.imgur.com/a4vo9Cv.jpeg","https://i.imgur.com/J7PAAuR.jpeg","https://i.imgur.com/OG7CCAz.jpeg","https://i.imgur.com/tqnzYDJ.jpeg","https://i.imgur.com/3ItPOnW.jpeg","https://i.imgur.com/yCkue9w.jpeg","https://i.imgur.com/jx6VfM6.jpeg",    
  ];
   var callback = () => api.sendMessage({body:`𝐄𝐝𝐢𝐭𝐨𝐫  𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ● ──────────────────── ●\n𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐩𝐡𝐨𝐭𝐨𝐬 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
