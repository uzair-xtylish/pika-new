const fs = require("fs");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "count",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Modified by ChatGPT (Original: uzairrajput)",
  usePrefix: false,
  description: "Count various things in the group with style and group photo 😎",
  commandCategory: "group",
  usages: "count message/admin/member/male/female/gei/allgroup/alluser",
  cooldowns: 5
};

module.exports.run = async function({ api, Threads, Users, event, args }) {
  const input = args.join().toLowerCase().trim();
  const out = (msg, attachment = null) => {
    api.sendMessage(
      { body: msg, attachment },
      event.threadID,
      () => {
        if (attachment) fs.unlinkSync(attachment.path); // Clean up temp file
      },
      event.messageID
    );
  };

  const threadInfo = await api.getThreadInfo(event.threadID);

  // Try to get group image
  const imageURL = threadInfo.imageSrc;
  let attachmentFile = null;

  if (imageURL) {
    try {
      const imgExt = path.extname(imageURL).split("?")[0] || ".jpg";
      const tempFile = __dirname + `/cache/groupPic_${event.threadID}${imgExt}`;
      const response = await axios.get(imageURL, { responseType: "arraybuffer" });
      fs.writeFileSync(tempFile, Buffer.from(response.data, "binary"));
      attachmentFile = fs.createReadStream(tempFile);
      attachmentFile.path = tempFile;
    } catch (e) {
      console.log("Could not fetch group photo:", e);
    }
  }

  const gendernam = [], gendernu = [], nope = [];

  for (const u of threadInfo.userInfo) {
    switch (u.gender) {
      case "MALE": gendernam.push(u); break;
      case "FEMALE": gendernu.push(u); break;
      default: nope.push(u); break;
    }
  }

  const boxget = await Threads.getAll(['threadID']);
  const userget = await Users.getAll(['userID']);

  let message;

  if (!input) {
    message = `🤖✨ *Welcome to the Counting Universe!* ✨🤖\n\nUse one of these cool tags:\n📩 message\n👮‍♂️ admin\n👥 member\n👦 male\n👧 female\n🌈 gei\n💬 allgroup\n🙋‍♂️ alluser`;
  } else {
    switch (input) {
      case "message":
        message = `📨 This group has *${threadInfo.messageCount}* messages! Y'all been chatting like there's no tomorrow! 💬🔥`;
        break;
      case "admin":
        message = `👑 This group has *${threadInfo.adminIDs.length}* admin(s).\nKings & Queens ruling the group! 🫅💼`;
        break;
      case "member":
        message = `👥 Total members: *${threadInfo.participantIDs.length}*\nBhai yeh to pura *battalion* lag raha hai! 🪖😂`;
        break;
      case "male":
        message = `👦 Total Males: *${gendernam.length}*\nMummy ke *Sher* sab yahan hain! 🦁💪`;
        break;
      case "female":
        message = `👧 Total Females: *${gendernu.length}*\nSabh *Papa ki Pariyan* hai! 👼✨`;
        break;
      case "gei":
        message = `🌈 ${nope.length} members with secret gender energy detected! 🔮👀`;
        break;
      case "allgroup":
        message = `💬 Bot is slaying in *${boxget.length}* group chats! 🔥🤖`;
        break;
      case "alluser":
        message = `🙋 Total users using bot: *${userget.length}*\nBot is more popular than your school topper! 😎📚`;
        break;
      default:
        message = `❌ Oops! Unknown tag.\nTry: message/admin/member/male/female/gei/allgroup/alluser`;
        break;
    }
  }

  return out(message, attachmentFile);
};
