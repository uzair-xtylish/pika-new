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

  if (event.body.indexOf("uzair")>=0 || (event.body.indexOf("Uzair")>=0 || (event.body.indexOf("Boss")>=0 || (event.body.indexOf("Boss")>=0)))) {

    var msg = {

        body: " ${name}\n● ──────────────────── ●\n🥰𝗕𝗢𝗦𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘❤️\n\n● ──────────────────── ●\n\n♥️*_~اور ہمیـــّْ͢ـں ہـــّْ͢ـر دل میـــّْ͢ـں اترنـــّْ͢ـے کی چاہـــّْ͢ـت نہیـــّْ͢ـں...💸\n\n● ──────────────────── ●\n\n‎⎯⃝⃪🦋┼─‎𒁍⃝𝐔ʑʌīī𝐑┼•__🦋• ─┼‣🔐⃝ᚔ💛",

        attachment: fs.createReadStream(__dirname + `/uzair/uzair.png`)

      }

      api.sendMessage(msg, threadID, messageID);

    }

  }

  module.exports.run = function({ api, event, client, __GLOBAL }) {



          }
