module.exports.config = {
    name: "add",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Add user to group by link or uid",
    commandCategory: "Utilities",
    usages: "[args]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
async function getUserByLink(data) {
            if (!data) return;
            var id = "";
            const paragraph = data;
            const regex = /(?:(?:http|https):\/\/)?(?:www.|m.)?facebook.com\/(?!home.php)(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\.-]+)/;
            const resault = paragraph.match(regex);
            var vanity = resault[1];
            var scan = isNaN(vanity);
            if (scan == true) {
                var value = await api.getUserID(vanity);
                value.forEach((i) => {
                    id = i.userID;
                });
            } else id = vanity;
            return id;
        };
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('𝐉𝐢𝐬 𝐤𝐨 𝐚𝐝𝐝 𝐤𝐚𝐫𝐧𝐚 𝐡𝐚𝐢 𝐮𝐬𝐤𝐚 𝐢𝐝 𝐔𝐫𝐥 𝐲𝐚 𝐮𝐬𝐤𝐢 𝐮𝐢𝐝 𝐥𝐚𝐠𝐚 𝐤𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐝𝐨 #𝐚𝐝𝐝 <𝐞𝐧𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐮𝐫𝐥 𝐥𝐢𝐧𝐤>!', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await getUserByLink(args[0] || event.messageReply.body);
    var uidUser = res
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐘𝐞 𝐭𝐡𝐚𝐫𝐤𝐢 𝐓𝐰 𝐩𝐡𝐞𝐥𝐞 𝐜 𝐡𝐢 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐡𝐚𝐢 🙊🙊`, threadID, messageID);
    if (err) return api.sendMessage(`𝐌𝐞 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐢𝐝 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫 𝐬𝐚𝐤𝐭𝐚 🔪😾`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝐌𝐚𝐢𝐧𝐞 𝐧𝐞𝐰 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢 𝐚𝐝𝐦𝐢𝐧 𝐚𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐝𝐨 𝐢𝐬 𝐭𝐡𝐚𝐫𝐤𝐢 𝐤𝐨 🔪😾🙊`, threadID, messageID);
    else return api.sendMessage(`𝐌𝐚𝐢𝐧𝐞 𝐧𝐞𝐰 𝐦𝐞𝐦𝐛𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 🙂🤟`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐘𝐞 𝐭𝐡𝐚𝐫𝐤𝐢 𝐓𝐰 𝐩𝐡𝐞𝐥𝐞 𝐜 𝐡𝐢 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐡𝐚𝐢 🙊🙊`, threadID, messageID);
    if (err) return api.sendMessage(`𝐌𝐞 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐢𝐝 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫 𝐬𝐚𝐤𝐭𝐚 🔪😾`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`𝐌𝐚𝐢𝐧𝐞 𝐧𝐞𝐰 𝐮𝐬𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐡𝐚𝐢 𝐚𝐝𝐦𝐢𝐧 𝐚𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐝𝐨 𝐢𝐬 𝐭𝐡𝐚𝐫𝐤𝐢 𝐤𝐨 🔪😾🙊`, threadID, messageID);
    else return api.sendMessage(`𝐌𝐚𝐢𝐧𝐞 𝐧𝐞𝐰 𝐦𝐞𝐦𝐛𝐞𝐫 𝐤𝐨 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 🙂🤟`, threadID, messageID);
    });
  }
}
