const moneydown = 1000; // Amount per spin
module.exports.config = {
  name: "wheel",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Rotation luck :>",
  commandCategory: "Game",
  usages: "",
  cooldowns: 0
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "vongquay.jpg")) request("https://i.postimg.cc/JnVSNRtm/begin.jpg").pipe(fs.createWriteStream(dirMaterial + "vongquay.jpg"));
}

module.exports.handleReply = async function ({
  event,
  Users,
  api,
  handleReply,
  Currencies }) {
  if (handleReply.type == "reply" && event.body.toLowerCase() == "quay") {
    const axios = require('axios');
    const request = require('request');
    const fs = global.nodemodule["fs-extra"];
    var data = await Currencies.getData(event.senderID);
    var money = data.money;
    if(money < moneydown) return api.sendMessage(`You don't have enough ${moneydown}$ To film, please follow Mr. Uzairmtx  to work hard!`, event.threadID, event.messageID);
    var name = await Users.getNameUser(event.senderID);
    var num = Math.floor(Math.random() * 100) + 1;

	axios.get(`https://api-Vong-quay-may-man.doanhkhoa.repl.co?number=${num}`).then(res => {
	  let moneyup = res.data.moneyup;
	  if (moneyup !== 0) {
      var item = `${moneyup}$`;
    } else {
		  var allColor = ["gold", "green", "red", "pink"];
		  var color = allColor[Math.floor(Math.random() * allColor.length)];
		  var item = `colored belt ${color}!`
	  }
	  let callback = function () {
	  Currencies.decreaseMoney(event.senderID, moneydown);
	  Currencies.increaseMoney(event.senderID, moneyup);
	  api.sendMessage({
        body: `Congratulations ${name} has been filmed ${item}`,
        attachment: fs.createReadStream(__dirname + `/cache/vongquay2.jpg`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vongquay2.jpg`), event.messageID);
      };
	  request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vongquay2.jpg`)).on("close", callback);
	  });
   };
}

module.exports.run = async function ({
  api,
  event
}) {
  const fs = global.nodemodule["fs-extra"];
  var msg = {
    body: `◈━━━━━━━━━━━━━━━━━💚✨\n\nWelcome to the wheel of fortune!\nReply "spin" to spin, waste ${moneydown} for each spin\n\n◈━━━━━━━━━━━━━━━━━💚✨`,
    attachment: fs.createReadStream(__dirname + `/cache/vongquay.jpg`)
  };
  return api.sendMessage(msg, event.threadID, (error, info) => {
    global.client.handleReply.push({
    type: "reply",
    name: this.config.name,
    author: event.senderID,
    messageID: info.messageID
    })
  }) 
}