module.exports.config = {
    name: "noprefixv2",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "uzairrajput",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs-extra": "",
        "request": ""
    }
};

module.exports.handleEvent = async ({ event, api, Users }) => {

    const fs = global.nodemodule["fs-extra"];
    var { threadID, messageID, body, senderID } = event;
    const thread = global.data.threadData.get(threadID) || {};
    var user = global.data.allUserID || {};
     if (typeof user["noprefix"] !== "undefined" && user["noprefix"] == false) return; 
    if (typeof thread["noprefix"] !== "undefined" && thread["noprefix"] == false) return;
    function out(data) {
        api.sendMessage(data, threadID, messageID)
    }
  if (event.body == ("kase ho") || (event.body == ("uz")) || (event.body == ("Kiran")) || (event.body == ("Good night")) || (event.body == ("baby")) || (event.body == ("babu")) || (event.body == ("diwane")) || (event.body == ("crush")) || (event.body == ("everyone")) || (event.body == ("allah hafiz")) || (event.body == ("by"))){
    var job = ['me 𝑴𝑻𝑿 💚✨ ka diwana bot ho...', 'Hello, BOSS KISI C ZADA BAT NAHI KARTE..', 'Alhamdulillah you say ', 'Nahi sab mar gaye..', 'Khuda Hafiz, same to you..🥰', `Hi beta mat bola owner kìrâñ RajPööt ☠️🏴‍☠️ ko fytr larki hai teko famous kar degi..`, 'Yaha Sab Lashe Add Hai Zinda Bass Me hun', 'Hello Babu', 'Hi meRi kio Crush', '𝗛𝗶 Baby', 'agya angreez ka bacha..'];
     let name = await Users.getNameUser(event.senderID)   
     return api.sendMessage({body: job[Math.floor(Math.random() * job.length)] + ` ${name}` ,mentions: [{ tag: name , id: event.senderID }]}, event.threadID, event.messageID);
 }
  };
module.exports.languages = {
    "vi": {
        "on": "Bật",
        "off": "Tắt",
        "successText": "noprefix thành công",
    },
    "en": {
        "on": "on",
        "off": "off",
        "successText": "noprefix success!",
    }
}

module.exports.run = async function({ api, event, Threads, getText }) {
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;
     var user = global.data.allUserID || {};
     const u = data || user
    if (typeof u["noprefix"] == "undefined" || u["noprefix"] == true) u["noprefix"] = false;
    else u["noprefix"] = true;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    return api.sendMessage(`${(u["noprefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
                                     }