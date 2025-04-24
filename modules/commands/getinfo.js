module.exports.config = {
    name: "getinfo",
    version: "1.0.0",
    hasPermision: 2,
    usages: "uid",
    credit: "uzairrajput",
    description: "get info",
    commandCategory: "random-img",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
         let juswa = args.join(" ");
	const res = await api.getUserInfoV2(`{juswa}`); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'No data' ? "Not found" : "Not Found";
    var love = res.relationship_status == 'No data' ? "Not found" : "Not Found";
    var location = res.location.name == 'No data' ? "Not Found" : "Not Found";
    var hometown = res.hometown == 'No data' ? "Not found" : "Not Found";
  var follow = res.folow == 'No data' ? "Not Found" : "Not Found";

	let callback = function() {
            return api.sendMessage({
                body:`•——[INFORMATION]——•\n\nName: ${res.name}\nFacebook URL: ${res.link}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}\n\n•——[INFORMATION]——•`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
  }