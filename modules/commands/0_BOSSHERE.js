const fs = require("fs");

module.exports.config = {

  name: "boss",

    version: "1.0.1",

  hasPermssion: 0,

  credits: "uzairrajput", 

  description: "no prefix",

  commandCategory: "No command marks needed",

  usages: "...",

    cooldowns: 5, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

  var { threadID, messageID } = event;

  if (event.body.indexOf("MTX")>=0 || (event.body.indexOf("@𝑴𝑻𝑿 💚✨")>=0 || (event.body.indexOf("mtx")>=0 || (event.body.indexOf("Boss")>=0)))) {

    var msg = {

        body: "🥰𝗕𝗢𝗦𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘❤️",

        attachment: fs.createReadStream(__dirname + `/uzair/ss.jpg`)

      }

      api.sendMessage(msg, threadID, messageID);

    }

  }

  module.exports.run = function({ api, event, client, __GLOBAL }) {



          }