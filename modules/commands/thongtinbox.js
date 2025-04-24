module.exports.config = {
	name: "boxxx",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput",
	description:"Count everything in the chat box",
	commandCategory: "group",
	usages: "count message/admin/member/male/female/gei/allgroup/alluser",
	cooldowns: 5,
	envConfig: {}
};

module.exports.run = async function({ api,Threads,Users, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	var input =args.join();
			var nameMen = [];
		var gendernam = [];
		var gendernu = [];
		var nope = [];
				let threadInfo = await api.getThreadInfo(event.threadID);
				for (let z in threadInfo.userInfo) {
			var gioitinhone = threadInfo.userInfo[z].gender;
				if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
				}else{
						if (gioitinhone=="FEMALE"){gendernu.push(gioitinhone)
							}else{nope.push(gioitinhone)}}}

		var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
	var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])
		if (input==""){out(`You haven't entered a tag yet, use the following tags: message/admin/member/male/female/gei/allgroup/alluser`)}
		if (input=="message") {out(`This group does ${threadInfo.messageCount} message`)}
		if (input=="admin"){out(`Your group has it ${threadInfo.adminIDs.length} administrator`)}
		if (input=="member"){out(`This group does ${threadInfo.participantIDs.length} member`)}
		if (input=="male"){out(`This group does ${gendernam.length} members are male`)}
		if (input=="female"){out(`This group does ${gendernu.length} members are female`)}
		if (input=="gei"){out(`This group does ${nope.length} member is Gei`)}
		if (input=="allgroup"){out(`Total yes ${boxget.length} Chat groups use bots`)}
		if (input=="alluser"){out(`Total yes ${userget.length} users use bots`)}
}
