const fs = require("fs");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "count",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Modified by ChatGPT (Original: uzairrajput)",
  usePrefix: false,
  description: "Group ki har cheez ginay with swag aur group photo 📸",
  commandCategory: "group",
  usages: "count message/admin/member/male/female/gei/allgroup/alluser",
  cooldowns: 5
};

module.exports.run = async function({ api, Threads, Users, event, args }) {
  const input = args.join(" ").toLowerCase().trim();
  const threadInfo = await api.getThreadInfo(event.threadID);

  const gendernam = [], gendernu = [], nope = [];
  for (const u of threadInfo.userInfo) {
    switch (u.gender) {
      case "MALE": gendernam.push(u); break;
      case "FEMALE": gendernu.push(u); break;
      default: nope.push(u); break;
    }
  }

  const allGroups = await Threads.getAll(["threadID"]);
  const allUsers = await Users.getAll(["userID"]);

  let message = "", imageAttachment = null;

  switch (input) {
    case "":
      message = `🤖 *Count Command Menu*\nNiche wale tags use karo:\n➡️ message\n➡️ admin\n➡️ member\n➡️ male\n➡️ female\n➡️ gei\n➡️ allgroup\n➡️ alluser`;
      break;
    case "message":
      message = `💬 Bhai is group me total *${threadInfo.messageCount}* messages hain! Sab full bakchodi pe lage hain 😂🔥`;
      break;
    case "admin":
      message = `👑 Is group ke *${threadInfo.adminIDs.length}* admin hain. Bhaiyo ka raaj chal raha hai 👮‍♂️😎`;
      break;
    case "member":
      message = `👥 Total members: *${threadInfo.participantIDs.length}*\nMatlab ye group nahi, *shaadi ka jalsa* lagta hai 😆`;
      break;
    case "male":
      message = `👦 Mard hazraat: *${gendernam.length}*\nMummy ke Sher sab yahan hain 🦁🔥`;
      break;
    case "female":
      message = `👧 Larkiyan: *${gendernu.length}*\nPapa ki Pariyan line me lagi hain 👼✨`;
      break;
    case "gei":
      message = `🌈 Gender unspecified ya unique style wale log: *${nope.length}*\nFull *mystery vibe* chal rahi hai 😏🔮`;
      break;
    case "allgroup":
      message = `💬 Bot abhi tak *${allGroups.length}* groups me dhamal macha raha hai 🚀🔥`;
      break;
    case "alluser":
      message = `🙋‍♂️ Total log jo bot use kar rahe hain: *${allUsers.length}*\nItna famous to actor bhi nahi hota 😂📱`;
      break;
    default:
      message = `❌ Bhai galat tag de diya. Try karo:\nmessage/admin/member/male/female/gei/allgroup/alluser`;
  }

  // Group photo lagana
  try {
    if (threadInfo.imageSrc) {
      const imgURL = threadInfo.imageSrc;
      const ext = path.extname(imgURL).split("?")[0] || ".jpg";
      const filePath = path.join(__dirname, `cache/group_${event.threadID}${ext}`);

      const response = await axios.get(imgURL, { responseType: "arraybuffer" });
      fs.writeFileSync(filePath, Buffer.from(response.data, "binary"));
      imageAttachment = fs.createReadStream(filePath);
      imageAttachment.path = filePath;
    }
  } catch (err) {
    console.log("❗ Group photo fetch karne me issue:", err);
  }

  api.sendMessage(
    { body: message, attachment: imageAttachment },
    event.threadID,
    async () => {
      if (imageAttachment?.path && fs.existsSync(imageAttachment.path)) {
        fs.unlinkSync(imageAttachment.path);
      }
    },
    event.messageID
  );
};
