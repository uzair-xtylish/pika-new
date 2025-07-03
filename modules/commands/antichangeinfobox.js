const { getStreamFromURL, uploadImgbb } = global.utils;

module.exports = {
  config: {
    name: "antichangeinfobox",
    version: "1.8",
    author: "Uzair Mtx",
    countDown: 5,
    role: 1,
    shortDescription: "Anti-change box info",
    longDescription: "Turn on/off anti-change for group name, avatar, emoji, theme, and nickname",
    category: "group",
    guide: {
      en: "{pn} [avt|name|nickname|theme|emoji] [on|off]",
    }
  },

  langs: {
    en: {
      antiChangeAvatarOn: "✅ Avatar lock enabled.",
      antiChangeAvatarOff: "❌ Avatar lock disabled.",
      missingAvt: "⚠️ No avatar found for this group.",
      antiChangeNameOn: "✅ Name lock enabled.",
      antiChangeNameOff: "❌ Name lock disabled.",
      antiChangeNicknameOn: "✅ Nickname lock enabled.",
      antiChangeNicknameOff: "❌ Nickname lock disabled.",
      antiChangeThemeOn: "✅ Theme lock enabled.",
      antiChangeThemeOff: "❌ Theme lock disabled.",
      antiChangeEmojiOn: "✅ Emoji lock enabled.",
      antiChangeEmojiOff: "❌ Emoji lock disabled.",
      antiChangeAvatarAlreadyOn: "🚫 Avatar change is locked.",
      antiChangeAvatarAlreadyOnButMissingAvt: "🚫 Avatar lock is on, but no avatar set.",
      antiChangeNameAlreadyOn: "🚫 Name change is locked.",
      antiChangeNicknameAlreadyOn: "🚫 Nickname change is locked.",
      antiChangeThemeAlreadyOn: "🚫 Theme change is locked.",
      antiChangeEmojiAlreadyOn: "🚫 Emoji change is locked."
    }
  },

  onStart: async function ({ message, event, args, threadsData, getLang }) {
    if (!["on", "off"].includes(args[1]))
      return message.SyntaxError();

    const { threadID } = event;
    const dataAntiChangeInfoBox = await threadsData.get(threadID, "data.antiChangeInfoBox", {});

    async function checkAndSaveData(key, data) {
      if (args[1] === "off") delete dataAntiChangeInfoBox[key];
      else dataAntiChangeInfoBox[key] = data;
      await threadsData.set(threadID, dataAntiChangeInfoBox, "data.antiChangeInfoBox");
      message.reply(getLang(`antiChange${key.charAt(0).toUpperCase() + key.slice(1)}${args[1] === "on" ? "On" : "Off"}`));
    }

    switch (args[0]) {
      case "avt":
      case "avatar":
      case "image": {
        const { imageSrc } = await threadsData.get(threadID);
        if (!imageSrc) return message.reply(getLang("missingAvt"));
        const newImageSrc = await uploadImgbb(imageSrc);
        await checkAndSaveData("avatar", newImageSrc.image.url);
        break;
      }
      case "name": {
        const { threadName } = await threadsData.get(threadID);
        await checkAndSaveData("name", threadName);
        break;
      }
      case "nickname": {
        const { members } = await threadsData.get(threadID);
        const nickMap = members.reduce((acc, m) => {
          acc[m.userID] = m.nickname;
          return acc;
        }, {});
        await checkAndSaveData("nickname", nickMap);
        break;
      }
      case "theme": {
        const { threadThemeID } = await threadsData.get(threadID);
        await checkAndSaveData("theme", threadThemeID);
        break;
      }
      case "emoji": {
        const { emoji } = await threadsData.get(threadID);
        await checkAndSaveData("emoji", emoji);
        break;
      }
      default: return message.SyntaxError();
    }
  },

  onEvent: async function ({ message, event, threadsData, role, api, getLang }) {
    const { threadID, logMessageType, logMessageData, author } = event;
    const data = await threadsData.get(threadID, "data.antiChangeInfoBox", {});

    const isNotAdmin = role < 1 && api.getCurrentUserID() !== author;

    const actions = {
      "log:thread-image": async () => {
        if (!data.avatar) return;
        if (isNotAdmin) {
          message.reply(getLang("antiChangeAvatarAlreadyOn"));
          api.changeGroupImage(await getStreamFromURL(data.avatar), threadID);
        } else {
          const imageSrc = logMessageData.url;
          if (!imageSrc) return await threadsData.set(threadID, "REMOVE", "data.antiChangeInfoBox.avatar");
          const newImage = await uploadImgbb(imageSrc);
          await threadsData.set(threadID, newImage.image.url, "data.antiChangeInfoBox.avatar");
        }
      },
      "log:thread-name": async () => {
        if (!data.name) return;
        if (isNotAdmin) {
          message.reply(getLang("antiChangeNameAlreadyOn"));
          api.setTitle(data.name, threadID);
        } else {
          const threadName = logMessageData.name;
          await threadsData.set(threadID, threadName, "data.antiChangeInfoBox.name");
        }
      },
      "log:user-nickname": async () => {
        if (!data.nickname) return;
        const { nickname, participant_id } = logMessageData;
        if (isNotAdmin) {
          message.reply(getLang("antiChangeNicknameAlreadyOn"));
          api.changeNickname(data.nickname[participant_id] || "", threadID, participant_id);
        } else {
          await threadsData.set(threadID, nickname, `data.antiChangeInfoBox.nickname.${participant_id}`);
        }
      },
      "log:thread-color": async () => {
        if (!data.theme) return;
        if (isNotAdmin) {
          message.reply(getLang("antiChangeThemeAlreadyOn"));
          api.changeThreadColor(data.theme, threadID);
        } else {
          await threadsData.set(threadID, logMessageData.theme_id, "data.antiChangeInfoBox.theme");
        }
      },
      "log:thread-icon": async () => {
        if (!data.emoji) return;
        if (isNotAdmin) {
          message.reply(getLang("antiChangeEmojiAlreadyOn"));
          api.changeThreadEmoji(data.emoji, threadID);
        } else {
          await threadsData.set(threadID, logMessageData.thread_icon, "data.antiChangeInfoBox.emoji");
        }
      }
    };

    if (actions[logMessageType]) await actions[logMessageType]();
  }
};
