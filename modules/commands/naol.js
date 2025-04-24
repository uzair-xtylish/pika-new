const fs = require("fs");
module.exports.config = {
	name: "naol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "naol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mar Ja")==0 || event.body.indexOf("mar ja")==0 || event.body.indexOf("MAR JA")==0 || event.body.indexOf("Diwani Mar Ja")==0 || event.body.indexOf("diwani mar ja")==0 || event.body.indexOf("DIWANI MAR JA")==0 || event.body.indexOf("DEWANI MAR JA")==0 || event.body.indexOf("DEWANE MAR JA")==0 || event.body.indexOf("Dewane Mar Ja")==0 || event.body.indexOf("dewane mar ja")==0 || event.body.indexOf("diwane mar ja")==0 || event.body.indexOf("Diwane Mar Ja")==0) {
		var msg = {
				body: "(ME ITNI JALDI NAHI MARONGA TUJHE MAR KE MAROGA..)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }