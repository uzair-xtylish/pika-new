module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Add user to group by link or uid",
    commandCategory: "Utilities",
    usages: "[args]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('Please enter the link or user id you want to add to the group!', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await api.getUID(args[0] || event.messageReply.body);
    var uidUser = res
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`The member is already in the group`, threadID, messageID);
    if (err) return api.sendMessage(`Can't add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Added user to approval list`, threadID, messageID);
    else return api.sendMessage(`Successfully added members to the group`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`The member is already in the group`, threadID, messageID);
    if (err) return api.sendMessage(`Can't add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Added user to approval list`, threadID, messageID);
    else return api.sendMessage(`Successfully added members to the group`, threadID, messageID);
    });
  }
      }