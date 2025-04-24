module.exports.config = {
	name: "runshell",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "running shell",
	commandCategory: "System",
	usages: "[Script]",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
	if (event.senderID != 61552682190483) return api.sendMessage(`⚠️You don't have permission to use this command. Only 𝑴𝑻𝑿 💚✨`, event.threadID, event.messageID)
	const eval = require("eval");
	const output = function (a) {
		if (typeof a === "object" || typeof a === "array") {
			if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
			else a = "done!";
		}

		if (typeof a === "number") a = a.toString();
		
		return api.sendMessage(a, event.threadID, event.messageID);
	}
	try {
		const response = await eval(args.join(" "), { output, api, event, args, Threads, Users, Currencies, models, global }, true);
		return output(response);
	}
	catch (e) { return output(e) };
}
