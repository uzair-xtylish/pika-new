module.exports.config = {
    name: "batman",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "",
    commandCategory: "image",
    usages: "text",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("please tag 1 person..", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:`Chal nikal shart shart..`,attachment: fs.createReadStream(__dirname + "/uzair/batman.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/uzair/batman.png"),event.messageID);
	 return request(encodeURI(`https://bx-hunter.herokuapp.com/api/textpro/batman?apikey=9MilalG8pyrQq6psh4McRMiXs&text=${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}