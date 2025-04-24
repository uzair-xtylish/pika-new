const fs = require("fs");
module.exports.config = {
	name: "fyoutoo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("Fuck")==0 || event.body.indexOf("fuckyou")==0 || event.body.indexOf("Fuckyou")==0 || event.body.indexOf("FUCKYOU")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("🖕🖕")==0 || event.body.indexOf("🖕🖕🖕")==0 || event.body.indexOf("🖕🖕🖕🖕")==0 || event.body.indexOf("🖕🖕🖕🖕🖕")==0 || event.body.indexOf("🖕🖕🖕🖕🖕🖕")==0 || event.body.indexOf("FuckYou")==0) {
		var msg = {
				body: "F you too",
				attachment: fs.createReadStream(__dirname + `/uzair/mtx/fuck.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }