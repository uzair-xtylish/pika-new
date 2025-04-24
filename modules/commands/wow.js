const fs = require("fs");
module.exports.config = {
	name: "diwani",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Diwani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("diwani")==0 || (event.body.indexOf("Dewani")==0)) {
		var msg = {
				body: "❤️🤗👈",
				attachment: fs.createReadStream(__dirname + `/uzair/diwani.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }