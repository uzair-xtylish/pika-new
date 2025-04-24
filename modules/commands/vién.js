const timeout = 60
const coinsup = 20000 
const coinsdown = 5000
const tientrochoi = 100
module.exports.config = {
    name: "vuatv",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Game",
    commandCategory: "Use",
    usages: "",
    cooldowns: 5,
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const { senderID ,threadID, messageID } = event;
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [], img = [];
        arraytag.push({id: event.senderID, tag: nameSender});
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 100) return api.sendMessage('You're so poor you don't have money to play, Liuliu',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
    const datagame = (await axios.get("https://api.ndtmint.repl.co/game/vuatiengviet")).data;
    const random = datagame.keyword;
    const answer = datagame;
    let Avatar = (await axios.get(`https://api.ndtmint.repl.co/vuatiengviet/image?word=${encodeURI(random)}`, { responseType: "arraybuffer" } )).data; 
         fs.writeFileSync(__dirname + "/cache/vuatv.png", Buffer.from(Avatar, "utf-8") );
         img.push(fs.createReadStream(__dirname + "/cache/vuatv.png"));
     var msg = {body: `${nameSender} Answer this question to win some good money UwU (-${tientrochoi}$)` ,mentions: arraytag,attachment: img}

        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            answer: answer.keyword
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("This is so dumb, please answer.brrr", event.threadID, event.messageID); 
    switch (handleReply.type) {
        case "reply": {
            const dapan = event.body
            if (dapan == answer) {
               await Currencies.increaseMoney(event.senderID, parseInt(coinsup))

               var namePlayer = await Users.getData(event.senderID)
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `${namePlayer.name} Answered correctly!\nAnswer: ${answer} (+${coinsup}$)`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else
               await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            return api.sendMessage(`The answer is not correct. Answer: ${answer} (-${coinsdown}$)!!!`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
        }
    }
                       }