const fs = require("fs-extra");
const path = __dirname + "/../../data/antiChangeInfoBox.json";
const { getStreamFromURL, uploadImgbb } = global.utils;

module.exports.config = {
  name: "antichangeinfobox",
  version: "2.0.0",
  hasPermssion: 1,
  credits: "Converted by Uzair Rajput Mtx",
  description: "Lock group info (name, emoji, theme, nickname, avatar)",
  commandCategory: "group",
  usages: "antichangeinfobox [avt|name|nickname|emoji|theme] [on|off]",
  cooldowns: 5
};

if (!fs.existsSync(path)) fs.writeJsonSync(path, {});

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, logMessageType, logMessageData, author } = event;
  const threadData = fs.readJsonSync(path);

  if (!threadData[threadID]) return;
  const data = threadData[threadID];

  // Avatar
  if (logMessageType === "log:thread-image" && data.avatar && api.getCurrentUserID() !== author) {
    api.changeGroupImage(await getStreamFromURL(data.avatar), threadID);
    api.sendMessage("❌ Group avatar is locked!", threadID);
  }

  // Name
  if (logMessageType === "log:thread-name" && data.name && api.getCurrentUserID() !== author) {
    api.setTitle(data.name, threadID);
    api.sendMessage("❌ Group name is locked!", threadID);
  }

  // Emoji
  if (logMessageType === "log:thread-icon" && data.emoji && api.getCurrentUserID() !== author) {
    api.changeThreadEmoji(data.emoji, threadID);
    api.sendMessage("❌ Group emoji is locked!", threadID);
  }

  // Theme
  if (logMessageType === "log:thread-color" && data.theme && api.getCurrentUserID() !== author) {
    api.changeThreadColor(data.theme, threadID);
    api.sendMessage("❌ Group theme is locked!", threadID);
  }

  // Nickname
  if (logMessageType === "log:user-nickname" && data.nickname && api.getCurrentUserID() !== author) {
    const { participant_id } = logMessageData;
    const oldNick = data.nickname[participant_id] || "";
    api.changeNickname(oldNick, threadID, participant_id);
    api.sendMessage("❌ Nickname is locked in this group!", threadID);
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  const threadData = fs.readJsonSync(path);

  if (!threadData[threadID]) threadData[threadID] = {};
  const data = threadData[threadID];

  const type = args[0];
  const action = args[1];

  if (!["avt", "name", "nickname", "emoji", "theme"].includes(type) || !["on", "off"].includes(action))
    return api.sendMessage("❌ Usage: antichangeinfobox [avt|name|nickname|emoji|theme] [on|off]", threadID, messageID);

  const isOn = action === "on";

  switch (type) {
    case "avt":
      if (isOn) {
        if (!threadInfo.imageSrc) return api.sendMessage("❌ Group has no avatar set.", threadID);
        const imgbb = await uploadImgbb(threadInfo.imageSrc);
        data.avatar = imgbb.image.url;
        api.sendMessage("✅ Avatar lock enabled.", threadID);
      } else {
        delete data.avatar;
        api.sendMessage("🔓 Avatar lock disabled.", threadID);
      }
      break;

    case "name":
      if (isOn) {
        data.name = threadInfo.threadName;
        api.sendMessage("✅ Name lock enabled.", threadID);
      } else {
        delete data.name;
        api.sendMessage("🔓 Name lock disabled.", threadID);
      }
      break;

    case "nickname":
      if (isOn) {
        const nickMap = {};
        threadInfo.userInfo.forEach(u => {
          if (u.nickname) nickMap[u.id] = u.nickname;
        });
        data.nickname = nickMap;
        api.sendMessage("✅ Nickname lock enabled.", threadID);
      } else {
        delete data.nickname;
        api.sendMessage("🔓 Nickname lock disabled.", threadID);
      }
      break;

    case "emoji":
      if (isOn) {
        data.emoji = threadInfo.emoji || "👍";
        api.sendMessage("✅ Emoji lock enabled.", threadID);
      } else {
        delete data.emoji;
        api.sendMessage("🔓 Emoji lock disabled.", threadID);
      }
      break;

    case "theme":
      if (isOn) {
        data.theme = threadInfo.color || "196241301102133";
        api.sendMessage("✅ Theme lock enabled.", threadID);
      } else {
        delete data.theme;
        api.sendMessage("🔓 Theme lock disabled.", threadID);
      }
      break;
  }

  fs.writeJsonSync(path, threadData);
};
