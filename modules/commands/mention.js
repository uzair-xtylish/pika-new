module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "uzairrajput",
	description: "tag all members",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 80
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		var listMTX, listUserID;
		global.moduleData["mtx"] && global.moduleData["mtx"].afkList ? listMTX = Object.keys(global.moduleData["mtx"].afkList || []) : listMTX = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = !listUserID.filter(item => !listMTX.includes(item));
		var body = (args.length != 0) ? args.join(" ") : "Look here, there's a whore causing trouble in here, guys", mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
  }