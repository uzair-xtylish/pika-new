  module.exports.config = {
  name: "box",
  version: "1.9.6",
  hasPermssion: 0,
  credits: "uzairrajput mod by Nam mod full reply + concise by Uzair Rajput",
  description: "box & user management",
  commandCategory: "Brain tonic",
  usages: "[help]",
  cooldowns: 5,
  dependencies: {
    "fs": ""
  }
}

let dataPath = __dirname + "/hethong/approvedThreads.json";
let dataPending = __dirname + "/hethong/pendingdThreads.json";
let fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}

module.exports.run = async ({ api, event, handleReply, Threads, args, Users }) => {
  let { threadID, senderID, type, messageReply } = event;
  let { configPath } = global.client;
  //if (senderID != `100013942628281` && senderID != `100067083429948` && senderID != `100065095141252` && senderID != `100023250277879` && senderID != `100079017055391` && senderID != `100035217803442` && senderID != `100027342015827`) return
 // if (this.config.credits != "uzairrajput mod by Nam mod full reply + gọn by Uzair Rạjput") return api.sendMessage(`Detect credit replacement`, threadID)
  let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let threadSetting = (await Threads.getData(String(threadID))).data || {};
    let prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  let msg = "", count = 0;
  if (args[0] == "on") {
    if (config.duyetbox == false) {
        config.duyetbox = true;
        api.sendMessage(`I'm not a fan of Klever.\nI'm not a fan of Klever think ding ding `, threadID);
      }
      fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8')
  }
  if (args[0] == "off") {
    if (config.duyetbox == true) {
        config.duyetbox = false;
        api.sendMessage(`I'm not a fan of Klever.\nI'm not a fan of Klever`, threadID);
      }
      fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8')
  }
  if (args[0] == "list") {
    try {
      if (data.length != 0) {
        msg = `Have ${data.length} Box & User approved\n`;
        if (args[1] == "all") {
          for (e of data) {
            let threadInfo = await api.getThreadInfo(e);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
            msg += `\n[ ${count+=1} ] - ${threadName}\nID: ${e}\n`
          } api.sendMessage(`${msg}\nReply STT to remove from approved list`, threadID, (e, info) => {
            global.client.handleReply.push({
              type: "Delete",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID,
              delete: data
            })
          })
        } else {
          let page = 1;
          page = parseInt(args[1]) || 1;
          page < -1 ? page = 1 : "";
          let limit = 10;
          let numPage = Math.ceil(data.length/limit);
          for (i = limit*(page - 1); i < limit*(page-1) + limit; i++) {
            if (i >= data.length) break;
            let threadInfo = await api.getThreadInfo(data[i]);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(data[i]);
            msg += `\n[ ${i+1} ] - ${threadName}\nID: ${data[i]}\n`;
          }
          msg += `\nPage (${page}/${numPage})\nUse ${prefix}${this.config.name} list <số trang/all>`
            api.sendMessage(`${msg}\nReply STT to remove from approved list`, threadID, (e, info) => {
              global.client.handleReply.push({
                type: "Delete",
                name: this.config.name,
                author: senderID,
                messageID: info.messageID,
                delete: data
              })
            })
        }
      } else {
        api.sendMessage(`No Box & User approved`, threadID)
      }
    } catch(e) {
      api.sendMessage(e, threadID)
    }
  }
  if (args[0] == "browse") {
    try {
      if (dataP.length != 0) {
        msg = `Have ${dataP.length} Box & User not approved:\n`;
        if (args[1] == "all") {
          for (e of dataP) {
            let threadInfo = await api.getThreadInfo(e);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
            msg += `\n[ ${count+=1} ] - ${threadName}\nID: ${e}\n`
          } api.sendMessage(`${msg}\nReply status to approve`, threadID, (e, info) => {
            global.client.handleReply.push({
              type: "Pending",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID,
              pending: dataP
            })
          })
        } else {
          let page = 1;
          page = parseInt(args[1]) || 1;
          page < -1 ? page = 1 : "";
          let limit = 10;
          let numPage = Math.ceil(dataP.length/limit);
          for (i = limit*(page - 1); i < limit*(page-1) + limit; i++) {
            if (i >= dataP.length) break;
            let threadInfo = await api.getThreadInfo(dataP[i]);
            let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(dataP[i]);
            msg += `\n[ ${i+1} ] - ${threadName}\nID: ${dataP[i]}\n`;
          }
          msg += `\nPage (${page}/${numPage})\nUse ${prefix}${this.config.name} list <page number/all>` 
          api.sendMessage(`${msg}\nReply STT to browse`, threadID, (e, info) => {
            global.client.handleReply.push({
              type: "Pending",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID,
              pending: dataP
            })
          })
        }
      } else {
        api.sendMessage(`No Box & User is unapproved`, threadID)
      }
    } catch(e) {
      api.sendMessage(e, threadID)
    }
  }
  if (args[0] == "help") {
    api.sendMessage(`You can use:\n1. ${prefix}${this.config.name} list to see the approved list\n2. ${prefix}${this.config.name} Browse to see unapproved list\n3. ${prefix}${this.config.name} help to see how to use\n4. ${prefix}${this.config.name} blank to browse yourself or delete\n5. ${prefix}${this.config.name} on/off to turn browsing on/off`, threadID)
  }
  if (args[0] == "del") {
    try {
      idBox = args[1] || threadID;
      if (type == "message_reply") {
        idBox = messageReply.senderID
      }
      if (isNaN(idBox)) return api.sendMessage("Not a number", threadID);
      if (!data.includes(idBox)) return api.sendMessage("Box not pre-approved!", threadID);
      let threadInfo = await api.getThreadInfo(idBox);
      let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(idBox);
      api.sendMessage(`Deleted ${threadName} from browse list`, threadID)
      api.sendMessage(`Box has been removed from the list of allowed bots`, idBox, () => {
    data.splice(data.indexOf(idBox), 1);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
      })
    } catch(e) {
      api.sendMessage(e, threadID)
    }
  } else if (args[0]) {
    try {
      let threadInfo = await api.getThreadInfo(args[0]);
      let ID = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(args[0]);
      if (isNaN(args[0])) api.sendMessage("The ID you entered is invalid.", threadID)
      if (data.includes(args[0])) {
        api.sendMessage(`${ID} pre-approved!`, threadID)
      } else {
        api.sendMessage(`Nhóm bạn đã được admin phê duyệt!`, args[0])
        api.sendMessage(`Added ${ID} to approved list`, threadID)
        api.changeNickname(`〈 ${global.config.PREFIX} 〉 ♡ ${(!global.config.BOTNAME) ? "𝐏𝐢𝐤𝐚 𝐁𝐨𝐭" : global.config.BOTNAME}`, args[0], api.getCurrentUserID())
        data.push(args[0]);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      dataP.splice(dataP.indexOf(args[0]), 1);
        fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2))
      }
    } catch(e) {
      api.sendMessage(e, threadID)
    }
  } else if (!args[0]) {
    try {
      if (type == "message_reply") {
        uid = messageReply.senderID
      } else {
       uid = threadID
      }
      let threadInfo = await api.getThreadInfo(uid);
      let ID = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(uid);
      if (isNaN(parseInt(uid))) api.sendMessage("The ID you entered is invalid.", threadID)
      if (data.includes(uid)) {
        api.sendMessage(`${ID} pre-approved!`, threadID)
      } else {
        api.sendMessage(`Added ${ID} to approved list`, threadID)
        api.changeNickname(`〈 ${global.config.PREFIX} 〉♡ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, uid, api.getCurrentUserID())
        data.push(uid);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        dataP.splice(dataP.indexOf(uid), 1);
        fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2))
      }
    } catch(e) {
      api.sendMessage(e, threadID)
    }
  }
}

module.exports.handleReply = async ({ event, api, handleReply, Users }) => {
  let { body, threadID, senderID } = event;
  if (handleReply.author != senderID) return;
  let index = body.split(/\s+/);
  let { type, messageID } = handleReply;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  if (isNaN(parseInt(index))) return api.sendMessage("💟 WTF can differentiate numbers from letters?", threadID)
  switch(type) {
    case "Pending": {
      api.unsendMessage(messageID)
      try {
        for (adc of index) {
          data.push(handleReply.pending[adc - 1]);
          fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
          dataP.splice(dataP.indexOf(handleReply.pending[adc - 1]), 1);
          fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
          api.sendMessage(`Your group has been approved by admin.`, handleReply.pending[adc - 1])
          api.changeNickname(`〈 ${global.config.PREFIX} 〉 ♡ ${(!global.config.BOTNAME) ? "𝐏𝐢𝐤𝐚 𝐁𝐨𝐭" : global.config.BOTNAME}`, handleReply.pending[adc - 1], api.getCurrentUserID())
        } api.sendMessage(`Approved successfully ${index.length} box`, threadID)
      } catch(e) {
        api.sendMessage(e, threadID)
      }
    }
    case "Delete": {
      api.unsendMessage(messageID)
      try {
        for (args of index) {
          api.sendMessage(`Box has been removed from the list of allowed bots`, handleReply.delete[args - 1], () => {
            data.splice(data.indexOf(handleReply.delete[args - 1]), 1);
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
          })
        } api.sendMessage(`Successfully removed ${index.length} box out of approved list`, threadID)
      } catch(e) {
        api.sendMessage(e, threadID)
      }
    }
  }
}
