module.exports = function({ api, models }) {
  setInterval(function() {
    if (global.config.NOTIFICATION) {
      require("./handle/handleNotification.js")({ api });
    }
  }, 1000 * 60);
  const fs = require("fs");
  const Users = require("./controllers/users")({ models, api }),
    Threads = require("./controllers/threads")({ models, api }),
    Currencies = require("./controllers/currencies")({ models });
  const logger = require("../utils/log.js");
  const moment = require('moment-timezone');
  const axios = require("axios");
  var day = moment.tz("Asia/Karachi").day();


  const checkttDataPath = __dirname + '/../modules/commands/tt/';
  setInterval(async () => {
    const day_now = moment.tz("Asia/Karachi").day();
    if (day != day_now) {
      day = day_now;
      const checkttData = fs.readdirSync(checkttDataPath);
      console.log('Start checking new day interactions');
      await new Promise(async resolve => {
        for (const checkttFile of checkttData) {
          const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
          let storage = [], count = 1;
          for (const item of checktt.day) {
            const userName = await Users.getNameUser(item.id) || 'Name does not exist';
            const itemToPush = item;
            itemToPush.name = userName;
            storage.push(itemToPush);
          };
          storage.sort((a, b) => {
            if (a.count > b.count) {
              return -1;
            }
            else if (a.count < b.count) {
              return 1;
            } else {
              return a.name.localeCompare(b.name);
            }
          });
          let checkttBody = '═✿═╡°𝗖𝗛𝗘𝗖𝗞 𝗕𝗢𝗫°╞═✿═\nBelow This is the number of messages sent by all members during the day.\n\n'; checkttBody += storage.slice(0, 10).map(item => {
            return `𝗧𝗢𝗣 ${count++} 👤${item.name} ⁠➜ ${item.count} 💬`;
          }).join('\n');
          api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');

          checktt.day.forEach(e => {
            e.count = 0;
          });
          checktt.time = day_now;
          fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
        }
        resolve();
      })

      await new Promise(async resolve => {
        if (day_now == 1) {
          console.log('Start new weekly interactive test');
          for (const checkttFile of checkttData) {
            const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
            let storage = [], count = 1;
            for (const item of checktt.week) {
              const userName = await Users.getNameUser(item.id) || 'Name does not exist';
              const itemToPush = item;
              itemToPush.name = userName;
              storage.push(itemToPush);
            };
            storage.sort((a, b) => {
              if (a.count > b.count) {
                return -1;
              }
              else if (a.count < b.count) {
                return 1;
              } else {
                return a.name.localeCompare(b.name);
              }
            });
            let checkttBody = '═✿═╡°𝗖𝗛𝗘𝗖𝗞 𝗕𝗢𝗫°╞═✿═\nBelow are the number of messages sent by all members this week\n\n'; checkttBody += storage.slice(0, 10).map(item => {
              return `𝗧𝗢𝗣 ${count++} 👤${item.name} ⁠➜ ${item.count} 💬`;
            }).join('\n');
            api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
            checktt.week.forEach(e => {
              e.count = 0;
            });
            fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
          }
        }
        resolve();
      })

      global.client.sending_top = false;
    }
  }, 1000 * 10);
  //////////////////////////////////////////////////////////////////////
  //========= Push all variable from database to environment =========//
  //////////////////////////////////////////////////////////////////////

  (async function() {

    try {
      logger(global.getText('listen', 'startLoadEnvironment'), '[ Data ]');
      let threads = await Threads.getAll(),
        users = await Users.getAll(['userID', 'name', 'data']),
        currencies = await Currencies.getAll(['userID']);
      for (const data of threads) {
        const idThread = String(data.threadID);
        global.data.allThreadID.push(idThread),
          global.data.threadData.set(idThread, data['data'] || {}),
          global.data.threadInfo.set(idThread, data.threadInfo || {});
        if (data['data'] && data['data']['banned'] == !![])
          global.data.threadBanned.set(idThread,
            {
              'reason': data['data']['reason'] || '',
              'dateAdded': data['data']['dateAdded'] || ''
            });
        if (data['data'] && data['data']['commandBanned'] && data['data']['commandBanned']['length'] != 0)
          global['data']['commandBanned']['set'](idThread, data['data']['commandBanned']);
        if (data['data'] && data['data']['NSFW']) global['data']['threadAllowNSFW']['push'](idThread);
      }
      // logger.loader(global.getText('listen', 'loadedEnvironmentThread'));
      for (const dataU of users) {
        const idUsers = String(dataU['userID']);
        global.data['allUserID']['push'](idUsers);
        if (dataU.name && dataU.name['length'] != 0) global.data.userName['set'](idUsers, dataU.name);
        if (dataU.data && dataU.data.banned == 1) global.data['userBanned']['set'](idUsers, {
          'reason': dataU['data']['reason'] || '',
          'dateAdded': dataU['data']['dateAdded'] || ''
        });
        if (dataU['data'] && dataU.data['commandBanned'] && dataU['data']['commandBanned']['length'] != 0)
          global['data']['commandBanned']['set'](idUsers, dataU['data']['commandBanned']);
      }
      for (const dataC of currencies) global.data.allCurrenciesID.push(String(dataC['userID']));
      var spam = await api.getThreadList(50, null, ["INBOX"]) || [];
      const list = [...spam].filter(group => group.isSubscribed && group.isGroup);
      logger.loader(`Downloaded successfully ${global.data.allThreadID.length} Group and ${global.data.allUserID.length} User`);
      logger.loader(`Available ${list.length} bot group is active\n`)
    } catch (error) {
      logger.loader(`Unable to load environment variable, lỗi: ${error}`, 'error');
    }
  }());
  logger(`〈 ${global.config.PREFIX} 〉${(!global.config.BOTNAME) ? "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿" : global.config.BOTNAME}`, "[ Bot Information ]");

  ///////////////////////////////////////////////
  //========= Require all handle need =========//
  //////////////////////////////////////////////

  const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
  const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
  const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
  const handleNotification = require("./handle/handleNotification")({ api, Threads, Users, Currencies, models });
  const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
  const handleRefresh = require("./handle/handleRefresh")({ api, Threads, Users, Currencies, models });
  const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
  const handleCreateDatabase = require("./handle/handleCreateDatabase")({ api, Threads, Users, Currencies, models });
  // const handleUnsend = require("./handle/handleUnsend")({ senderID, reaction, messageID, threadID, userID }); 

  //DEFINE DATLICH PATH
  const datlichPath = __dirname + "/../modules/commands/hethong/datlich.json";

  //FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
  const monthToMSObj = {
    1: 31 * 24 * 60 * 60 * 1000,
    2: 28 * 24 * 60 * 60 * 1000,
    3: 31 * 24 * 60 * 60 * 1000,
    4: 30 * 24 * 60 * 60 * 1000,
    5: 31 * 24 * 60 * 60 * 1000,
    6: 30 * 24 * 60 * 60 * 1000,
    7: 31 * 24 * 60 * 60 * 1000,
    8: 31 * 24 * 60 * 60 * 1000,
    9: 30 * 24 * 60 * 60 * 1000,
    10: 31 * 24 * 60 * 60 * 1000,
    11: 30 * 24 * 60 * 60 * 1000,
    12: 31 * 24 * 60 * 60 * 1000
  };
  const checkTime = (time) => new Promise((resolve) => {
    time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
    const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
    if (time[1] > 12 || time[1] < 1) resolve("Your month appears invalid");
    if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Your date appears invalid");
    if (time[2] < 2022) resolve("What era do you live in?");
    if (time[3] > 23 || time[3] < 0) resolve("Your time appears to be invalid.");
    if (time[4] > 59 || time[3] < 0) resolve("Your minute appears to be invalid.");
    if (time[5] > 59 || time[3] < 0) resolve("Your seconds appear to be invalid.");
    yr = time[2] - 1970;
    yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
    yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
    monthToMS = 0;
    for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
    if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
    dayToMS = time[0] * 24 * 60 * 60 * 1000;
    hourToMS = time[3] * 60 * 60 * 1000;
    minuteToMS = time[4] * 60 * 1000;
    secondToMS = time[5] * 1000;
    oneDayToMS = 24 * 60 * 60 * 1000;
    timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
    resolve(timeMs);
  });


  const tenMinutes = 10 * 60 * 1000;

  const checkAndExecuteEvent = async () => {

    /*smol check*/
    if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
    var data = JSON.parse(fs.readFileSync(datlichPath));

    //GET CURRENT TIME
    var timeVN = moment().tz('Asia/Karachi').format('DD/MM/YYYY_HH:mm:ss');
    timeVN = timeVN.split("_");
    timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

    let temp = [];
    let vnMS = await checkTime(timeVN);
    const compareTime = e => new Promise(async (resolve) => {
      let getTimeMS = await checkTime(e.split("_"));
      if (getTimeMS < vnMS) {
        if (vnMS - getTimeMS < tenMinutes) {
          data[boxID][e]["TID"] = boxID;
          temp.push(data[boxID][e]); delete data[boxID][e];
        } else delete data[boxID][e];
        fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
      };
      resolve();
    })

    await new Promise(async (resolve) => {
      for (boxID in data) {
        for (e of Object.keys(data[boxID])) await compareTime(e);
      }
      resolve();
    })
    for (el of temp) {
      try {
        var all = (await Threads.getInfo(el["TID"])).participantIDs;
        all.splice(all.indexOf(api.getCurrentUserID()), 1);
        var body = el.REASON || "🥰🥰🥰", mentions = [], index = 0;

        for (let i = 0; i < all.length; i++) {
          if (i == body.length) body += " ‍ ";
          mentions.push({
            tag: body[i],
            id: all[i],
            fromIndex: i - 1
          });
        }
      } catch (e) { return console.log(e); }
      var out = {
        body, mentions
      }
      if ("ATTACHMENT" in el) {
        out.attachment = [];
        for (a of el.ATTACHMENT) {
          let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(__dirname + `/../modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
          out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
        }
      }
      console.log(out);
      if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
      api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../modules/commands/cache/${a.fileName}`)) : "");
    }

  }
  setInterval(checkAndExecuteEvent, tenMinutes / 10);

  //////////////////////////////////////////////////
  //========= Send event to handle need =========//
  /////////////////////////////////////////////////

 return async (event) => {
    if (event.type == "change_thread_image") api.sendMessage(`[ 𝐆𝐫𝐨𝐮𝐩 𝐔𝐩𝐝𝐚𝐭𝐞 ] - ${event.snippet}`, event.threadID);
    if (global.config.duyetbox == true) {
    let data = JSON.parse(fs.readFileSync(__dirname + "/../modules/commands/hethong/approvedThreads.json"));
       // let threadInfo = await api.getThreadInfo(event.threadID);
    //let threadName = threadInfo.threadName;
    let dataThread = (await Threads.getData(event.threadID)).threadInfo;
    let threadInfo = await api.getThreadInfo(event.threadID);
    let threadName = threadInfo.threadName ? `${threadInfo.threadName}` : `${await Users.getNameUser(event.threadID)}`;
    let adminBot = global.config.ADMINBOT;
    let pendingPath = __dirname + "/../modules/commands/hethong/pendingdThreads.json";
    if (!data.includes(event.threadID) && !adminBot.includes(event.senderID)) {
      //getPrefix
      const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Karachi").format("HH");
      const time = moment.tz("Asia/Karachi").format("HH:mm:s");
      //check body
      if (event.body == `request` || event.body == `request` || event.body == `REQUEST` || event.body == `${prefix}request`){
      adminBot.forEach(e => {
          api.sendMessage(`━━━━━━[𝐒𝐮𝐧𝐞 𝐔𝐳𝐚𝐢𝐫 𝐁𝐨𝐬𝐬]━━━━━━\n\𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${threadName}\n➝ 𝐆𝐫𝐨𝐮𝐩 𝐈𝐃: ${event.threadID}\n➝𝐓𝐢𝐦𝐞:${time}\n\n➝ 𝐁𝐨𝐬𝐬 𝐈𝐬 𝐆𝐫𝐨𝐮𝐩 𝐊𝐨 𝐉𝐚𝐥𝐝𝐢 𝐂 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐊𝐚𝐫𝐨.`, e);
        })
        return api.sendMessage(`➝ ( ☑️ 𝐌𝐚𝐢𝐧𝐞 𝐀𝐩𝐤𝐢 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐊𝐢 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭 𝐊𝐨 𝐃𝐞 𝐃𝐢 𝐇𝐚𝐢 𝐖𝐨 𝐀𝐩𝐞𝐚𝐥 𝐃𝐞𝐤𝐡 𝐊𝐚𝐫 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐊𝐚𝐫 𝐃𝐞𝐧𝐠𝐞 🤗😇😘👈: https://www.facebook.com/Mtxuzair ${time}`, event.threadID, () => {
      let pendingData = JSON.parse(fs.readFileSync(pendingPath));
      if (!pendingData.includes(event.threadID) || !pendingData.includes(event.senderID)) {
        pendingData.push(event.threadID || event.senderID);
      fs.writeFileSync(pendingPath, JSON.stringify(pendingData));
      }
      });
      }

      if (event.body && event.body.startsWith(prefix)) return api.sendMessage(`🙂 𝐀𝐫𝐲 𝐌𝐞𝐫𝐢 𝐉𝐚𝐧 𝐀𝐩𝐤𝐞 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐍𝐚𝐡𝐢 𝐃𝐢 𝐆𝐚𝐢
 😗 𝐓𝐰 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐃𝐨 𝐉𝐚𝐢𝐬𝐞 𝐊𝐞 👉 ${config.PREFIX}request

 💝 𝐎𝐖𝐍𝐄𝐑:- ☞𝐔𝐙𝐀𝐈𝐑 𝐑𝐀𝐉𝐏𝐔𝐓☜ 💫

😗 𝐒𝐚𝐛 𝐊𝐞 𝐃𝐢𝐥.𝐃𝐡𝐚𝐫𝐡𝐤𝐚𝐧 👉 💋 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭 💋


🙂 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭 𝐊𝐢 🆔 𝐋𝐢𝐧𝐤 🙂 ☞ https://www.facebook.com/Mtxuzair


🙂 𝐀𝐠𝐚𝐫 𝐀𝐩𝐤𝐨 𝐌𝐚𝐧𝐳𝐨𝐫𝐢 𝐍𝐚𝐡𝐢 𝐌𝐢𝐥 𝐑𝐚𝐡𝐢 𝐓𝐰 𝐒𝐢𝐝𝐡𝐚 𝐌𝐞𝐫𝐞 𝐁𝐨𝐬𝐬 𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭 𝐊𝐨 𝐌𝐬𝐠 𝐊𝐚𝐫 𝐒𝐚𝐤𝐭𝐞 𝐇𝐚𝐢 🙂🤟


𝐌𝐞𝐫𝐢 𝐉𝐚𝐧 𝐒𝐚𝐛 𝐒𝐞 𝐏𝐡𝐥𝐞 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐋𝐢𝐤𝐡𝐭𝐞 𝐇𝐚𝐢 𝐉𝐚𝐢𝐬𝐞 𝐊𝐞 𝐌𝐚𝐢𝐧𝐞 𝐀𝐩𝐤𝐨 𝐁𝐚𝐭𝐲𝐚 👉 ${config.PREFIX}request 🙂🤟`, event.threadID);
    }
    };
    switch (event.type) {
      //<--Nhận, xử lí dữ liệu-->//
      case "message":
      case "message_reply":
      case "message_unsend":
        handleCreateDatabase({ event });
        handleCommand({ event });
        handleReply({ event });
        handleCommandEvent({ event });
        break
      //<--Nhận tin nhắn, thông báo thay đổi nhóm-->//
      case "change_thread_image":
      case "event":
        handleEvent({ event });
        handleRefresh({ event });
        if (event.type != "change_thread_image" && global.config.notiGroup) {
          var msg = '[ 𝐆𝐫𝐨𝐮𝐩 𝐔𝐩𝐝𝐚𝐭𝐞 ] - '
          msg += event.logMessageBody
          if (event.author == api.getCurrentUserID()) {
            msg = msg.replace('Bạn ', global.config.BOTNAME)
          }
          api.sendMessage(msg, event.threadID);
        }
        break;
      //<--Nhận cảm xúc-->//
      case "message_reaction":
        if(event.senderID == api.getCurrentUserID() && event.reaction == '🔥') {
          api.unsendMessage(event.messageID)
        }
        handleReaction({ event });
        break;
      default:
        break; 
    }
  };
};
