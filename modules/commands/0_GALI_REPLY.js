const fs = require("fs");
module.exports.config = {
  name: "gali",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput ", 
  description: "no prefix",
  commandCategory: "no prefix",
  usages: "mtxuzair",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Fuck")==0 || event.body.indexOf("Mc")==0 || event.body.indexOf("Chot")==0 || event.body.indexOf("Chutiya")==0 || event.body.indexOf("Bc")==0 || event.body.indexOf("Maa ki chut")==0 || event.body.indexOf("Bhen Chod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("gala gali")==0) {
    var msg = {
        body: "(BsDk , Gali q Dete Ho. Lund Katke Hath Me rakh Dunga)",
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }