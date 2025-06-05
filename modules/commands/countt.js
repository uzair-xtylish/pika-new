module.exports.config = {
  name: "count",
  version: "1.0.2",
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
  const input = args.join(" ").toLowerCase().trim();
  const threadInfo = await api.getThreadInfo(event.threadID);
  const send = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

  if (!input) {
    return send(`🤖✨ *Welcome To Uzair Counting File Zone!* ✨🤖\n\nUse one of these tags:\n📩 message\n👮‍♂️ admin\n👥 member\n👦 male\n👧 female\n🌈 gei\n💬 allgroup\n🙋‍♂️ alluser`);
  }

  // Gender Counts
  const male = [], female = [], unknown = [];
  for (let u of threadInfo.userInfo) {
    if (u.gender == "MALE") male.push(u);
    else if (u.gender == "FEMALE") female.push(u);
    else unknown.push(u);
  }

  // Fake fallback values in case Threads/Users.getAll fail
  let allThreads = [];
  let allUsers = [];

  try {
    allThreads = await Threads.getAll(['threadID']) || [];
  } catch (e) {}

  try {
    allUsers = await Users.getAll(['userID']) || [];
  } catch (e) {}

  switch (input) {
    case "message":
      return send(`📨 Group me total *${threadInfo.messageCount}* messages hain!\nFull bakchodi zone active hai! 🔥💬`);
    case "admin":
      return send(`👑 Group me *${threadInfo.adminIDs.length}* admin hain!\nPower in safe hands! 💼🫅`);
    case "member":
      return send(`👥 Members: *${threadInfo.participantIDs.length}*\nGroup nahi, baraat lag rahi hai! 😂`);
    case "male":
      return send(`👦 Larkay: *${male.length}*\nMummy ke sher! 🦁🔥`);
    case "female":
      return send(`👧 Larkiyan: *${female.length}*\nPapa ki pariyan! 👼✨`);
    case "gei":
      return send(`🌈 Secret gender wale: *${unknown.length}*\nFull mystery scene! 🕵️‍♂️`);
    case "allgroup":
      return send(`💬 Bot *${allThreads.length}* groups me ghoom raha hai! 😎`);
    case "alluser":
      return send(`🙋 *${allUsers.length}* users bot use kar rahe hain!\nMashhoor ho gya yeh to! 🚀`);
    default:
      return send(`❌ Tag galat hai baby!\nSahi likho: message/admin/member/male/female/gei/allgroup/alluser`);
  }
};
