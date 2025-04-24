const fs = require("fs");
module.exports.config = {
	name: "bobo",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bat")==0 || (event.body.indexOf("Bat")==0 || (event.body.indexOf("Talk")==0 || (event.body.indexOf("talk")==0)))) {
		var msg = {
				body: "Ap mujhse bat kare ap khud kahenge me kitna axha Hun.☺️"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }