module.exports.config = {
  name: "count",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Modified by (Original: uzairrajput)",
  usePrefix: false,
  description: "Group ki cheezain ginain style ke sath 😎",
  commandCategory: "group",
  usages: "count message/admin/member/male/female/gei/allgroup/alluser",
  cooldowns: 5,
  envConfig: {}
};

module.exports.run = async function({ api, Threads, Users, event, args }) {
  const input = args.join().toLowerCase().trim();
  const out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

  if (!input) {
    return out(`🤖✨ *Welcome to Counting Zone!* ✨🤖\n\nYeh wale tag likho aur dekh kar hairan ho jao:\n📩 message\n👮‍♂️ admin\n👥 member\n👦 male\n👧 female\n🌈 gei\n💬 allgroup\n🙋‍♂️ alluser`);
  }

  const threadInfo = await api.getThreadInfo(event.threadID);
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

  switch (input) {
    case "message":
      return out(`📨 Is group me *${threadInfo.messageCount}* message hain!\nMatlab sab ne full chater-pater macha rakhi hai! 💬🔥`);

    case "admin":
      return out(`👑 Is group ke *${threadInfo.adminIDs.length}* admin hain!\nBhai full king & queen waali feeling aa rahi hai! 🫅💼`);

    case "member":
      return out(`👥 Total members: *${threadInfo.participantIDs.length}*\nBhai yeh to koi group nahi, *baarat* lag rahi hai! 😂🕺`);

    case "male":
      return out(`👦 Larkay hain: *${gendernam.length}*\nMummy ke sher sab yahan chill kar rahe hain! 🦁🔥`);

    case "female":
      return out(`👧 Larkiyan hain: *${gendernu.length}*\nPapa ki pariyan udan bhar rahi hain! 👼✨`);

    case "gei":
      return out(`🌈 ${nope.length} log jin ka gender *top secret* hai!\nFull mystery scene chal raha hai 🔮😏`);

    case "allgroup":
      return out(`💬 Bot abhi *${boxget.length}* groups me fire maar raha hai! 🔥🤖`);

    case "alluser":
      return out(`🙋 Total users: *${userget.length}*\nBot ki popularity dekh kar school topper bhi ro raha hai 😎📚`);

    default:
      return out(`❌ Bhai galat tag likh diya!\nSahi likho: message/admin/member/male/female/gei/allgroup/alluser`);
  }
};
