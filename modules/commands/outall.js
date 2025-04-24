module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "Send messages to groups!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["61552682190483","100086716792385"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("⚠️You don't have permission to use this command. Only 𝑴𝑻𝑿 💚✨", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage('𝑴𝑻𝑿 💚✨ Kìrâñ RajPööt ☠️ 🏴‍☠️ Maine Apke Kehne Pe Sare Group Left Kardiye..😇✨', event.threadID);
	});
}