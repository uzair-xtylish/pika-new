module.exports.config = {
  name: "count",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Modified by (Original: uzairrajput)",
  usePrefix: false,
  description: "Count various things in the group (but with swag 😎)",
  commandCategory: "group",
  usages: "count message/admin/member/male/female/gei/allgroup/alluser",
  cooldowns: 5,
  envConfig: {}
};

module.exports.run = async function({ api, Threads, Users, event, args }) {
  const input = args.join().toLowerCase().trim();
  const out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

  if (!input) {
    return out(`🤖✨ *Welcome to the Counting Universe!* ✨🤖\n\nUse one of these cool tags:\n📩 message\n👮‍♂️ admin\n👥 member\n👦 male\n👧 female\n🌈 gei\n💬 allgroup\n🙋‍♂️ alluser`);
  }

  const threadInfo = await api.getThreadInfo(event.threadID);
  const nameMen = [], gendernam = [], gendernu = [], nope = [];

  for (const u of threadInfo.userInfo) {
    switch (u.gender) {
      case "MALE": gendernam.push(u); break;
      case "FEMALE": gendernu.push(u); break;
      default: nope.push(u); break;
    }
  }

  const boxget = await Threads.getAll(['threadID']);
  const userget = await Users.getAll(['userID']);

  switch (input) {
    case "message":
      return out(`📨 This group has *${threadInfo.messageCount}* messages! Y'all been chatting like there's no tomorrow! 💬🔥`);

    case "admin":
      return out(`👑 This group has *${threadInfo.adminIDs.length}* admin(s).\nKings & Queens ruling the group! 🫅💼`);

    case "member":
      return out(`👥 Total members: *${threadInfo.participantIDs.length}*\nBhai yeh to pura *battalion* lag raha hai! 🪖😂`);

    case "male":
      return out(`👦 Total Males: *${gendernam.length}*\nMummy ke *Sher* sab yahan hain! 🦁💪`);

    case "female":
      return out(`👧 Total Females: *${gendernu.length}*\nSabh *Papa ki Pariyan* hai! 👼✨`);

    case "gei":
      return out(`🌈 ${nope.length} members with secret gender energy detected! 🔮👀`);

    case "allgroup":
      return out(`💬 Bot is slaying in *${boxget.length}* group chats! 🔥🤖`);

    case "alluser":
      return out(`🙋 Total users using bot: *${userget.length}*\nBot is more popular than your school topper! 😎📚`);

    default:
      return out(`❌ Oops! Unknown tag.\nTry: message/admin/member/male/female/gei/allgroup/alluser`);
  }
};
