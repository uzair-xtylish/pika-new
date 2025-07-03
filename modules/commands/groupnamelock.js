const fs = require("fs");
const path = require("path");
const nameFilePath = path.join(__dirname, "lockedNames.json");

module.exports.config = {
  name: "groupnamelock",
  version: "1.0.0",
  hasPermission: 1,
  credits: "UzairRajputMtx",
  description: "Lock group name so no one can change it",
  commandCategory: "group",
  usages: "[on/off]",
  cooldowns: 3
};

let lockedNames = fs.existsSync(nameFilePath) ? JSON.parse(fs.readFileSync(nameFilePath)) : {};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;

  if (args[0] === "on") {
    const threadInfo = await api.getThreadInfo(threadID);
    const groupName = threadInfo.name || "Unnamed Group";
    lockedNames[threadID] = groupName;
    fs.writeFileSync(nameFilePath, JSON.stringify(lockedNames, null, 2));
    return api.sendMessage(`✅ Group name locked to: "${groupName}"`, threadID);
  }

  if (args[0] === "off") {
    if (lockedNames[threadID]) {
      delete lockedNames[threadID];
      fs.writeFileSync(nameFilePath, JSON.stringify(lockedNames, null, 2));
      return api.sendMessage(`🔓 Group name lock removed.`, threadID);
    } else {
      return api.sendMessage(`⚠️ No lock found on this group.`, threadID);
    }
  }

  return api.sendMessage("ℹ️ Usage: groupnamelock on/off", threadID);
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.logMessageType !== "log:thread-name") return;

  const threadID = event.threadID;

  if (lockedNames[threadID]) {
    const currentName = event.logMessageData.name;
    const originalName = lockedNames[threadID];

    if (currentName !== originalName) {
      try {
        await api.setTitle(originalName, threadID);
        api.sendMessage(`⛔ Group name change is locked. Reverting back to "${originalName}".`, threadID);
      } catch (err) {
        console.error("Failed to reset group name:", err);
      }
    }
  }
};
