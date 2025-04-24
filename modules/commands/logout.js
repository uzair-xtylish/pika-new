module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "uzairrajput",
    description: "Logout ACC Bot",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
const permission = [`61552682190483`];
	if (!permission.includes(event.senderID)) return api.sendMessage("⚠️You don't have permission to use this command. Only 𝑴𝑻𝑿 💚✨", event.threadID, event.messageID);
{
api.sendMessage("[OK] MTX me logout hota hu..",event.threadID,event.messageID)
api.logout()
}