module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
				};
module.exports.run = ({event, api}) =>{
		const permission = [`61552682190483`,`100086716792385`];
	if (!permission.includes(event.senderID)) return api.sendMessage("⚠️You don't have permission to use this command. Only 𝑴𝑻𝑿 💚✨", event.threadID, event.messageID);
	api.sendMessage(`[ OK ] MTX ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}