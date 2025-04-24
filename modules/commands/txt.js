module.exports.config = {
	name: 'txt',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'uzairrajput',
	description: '',
	commandCategory: 'For Admins',
	usages: 'share',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	if (event.senderID !=61552682190483) return api.sendMessage(`IS OLD WOMAN NE MERE BOSS 🫡 MTX 💚✨ KI FILE CHURALI BUDHI KHOSAT:))`, event.threadID, event.messageID)
	const fs = require("fs-extra")
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('The file name cannot be left blank', event.threadID, event.messageID);
	if (!file.endsWith('.js')) {
				if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file + '.js')) { 
			var mdl = args.splice(1, args.length);
				mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
				mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file+'.js', mdl)
				if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
					if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 Similar files are: ' + search + '.js, \n» Drop your emotions into this message to give it away.', event.threadID, (error, info) => {
					global.client.handleReaction.push({
						type: 'user',
							name: this.config.name,
							author: event.senderID,
							messageID: info.messageID,
							file: search,
							uid: uid,
							namee: name
					})}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file+'.js', __dirname + '/'+ file+'.js'.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file+'.js'.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file+'.js'.replace('.js', '.txt'))).then(
						api.sendMessage('» Check your messages ' + name, event.threadID, (error, info) => {
							if(error) return api.sendMessage('» There was an error sending the file ' + name, event.threadID, event.messageID);
						}, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file+'.js')) { 
			var mdl = args.splice(1, args.length);
				mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
				mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file+'.js', mdl)
				if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
					if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 Similar files are: ' + search + '.js, \n» Drop your emotions into this message to give it away.', event.threadID, (error, info) => {
					global.client.handleReaction.push({
						type: 'thread',
							name: this.config.name,
							author: event.senderID,
							messageID: info.messageID,
							file: search
					})}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file+'.js', __dirname + '/'+ file+'.js'.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file+'.js'.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file+'.js'.replace('.js', '.txt')), event.messageID);
	}
		}
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
				mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
				mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
				if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
					if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 Similar files are: ' + search + '.js, \n» Drop your emotions into this message to give it away.', event.threadID, (error, info) => {
					global.client.handleReaction.push({
						type: 'user',
							name: this.config.name,
							author: event.senderID,
							messageID: info.messageID,
							file: search,
							uid: uid,
							namee: name
					})}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
						api.sendMessage('» Check your messages ' + name, event.threadID, (error, info) => {
							if(error) return api.sendMessage('» There was an error sending the file ' + name, event.threadID, event.messageID);
						}, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
				mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
				mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
				if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
					if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 Similar files are: ' + search + '.js, \n» Drop your emotions into this message to give it away.', event.threadID, (error, info) => {
					global.client.handleReaction.push({
						type: 'thread',
							name: this.config.name,
							author: event.senderID,
							messageID: info.messageID,
							file: search
					})}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
};
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
		var { file, author, type, uid, namee } = handleReaction;
		if (event.userID != handleReaction.author) return;
		const fs = require("fs-extra")
		var fileSend = file + '.js'
		switch (type) {
			case "user": {
				fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
				api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' here you are', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
						api.sendMessage('» Check your messages ' + namee, event.threadID, (error, info) => {
							if(error) return api.sendMessage('» There was an error sending the file ' + namee, event.threadID, event.messageID);
						}, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
				api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' here you are', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
	}