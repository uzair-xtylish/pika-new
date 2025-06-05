module.exports.config = {
  name: "count",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput (Modified by Uzair uzi)",
  usePrefix: false,
  description: "Group aur bot ka funny hisaab kitaab 😂",
  commandCategory: "group",
  usages: "count message/admin/member/male/female/gei/allgroup/alluser",
  cooldowns: 5,
  envConfig: {}
};

module.exports.run = async function({ api, Threads, Users, event, args }) {
  const input = args.join("").toLowerCase().trim();
  const nameMen = [], gendernam = [], gendernu = [], nope = [];

  const threadInfo = await api.getThreadInfo(event.threadID);

  // Gender counting
  for (const user of threadInfo.userInfo) {
    const gender = user.gender;
    if (gender === "MALE") gendernam.push(gender);
    else if (gender === "FEMALE") gendernu.push(gender);
    else nope.push(gender);
  }

  const out = msg => api.sendMessage(msg, event.threadID, event.messageID);
  const boxget = await Threads.getAll(['threadID']);
  const userget = await Users.getAll(['userID']);

  if (!input) {
    return out("📌 *Oye Baby!* Kisi cheez ka naam to daal! 😒\n\n🔖 Use tags jaise:\n👉 message/admin/member/male/female/gei/allgroup/alluser");
  }

  if (input === "message") {
    return out(`💬 Iss group mein total **${threadInfo.messageCount}** messages hain... Logon ko bol zyada bolna band karein 😂`);
  }

  if (input === "admin") {
    return out(`🛡️ Admin log toh **${threadInfo.adminIDs.length}** hain... Phir bhi group mein jungle ka kanoon chalta hai 😎`);
  }

  if (input === "member") {
    return out(`👥 Is group mein total **${threadInfo.participantIDs.length}** member hain... Aadha to ghost hai 👻`);
  }

  if (input === "male") {
    return out(`🧔‍♂️ Is group mein **${gendernam.length}** larke hain... Sab mummy ke sher 🐯`);
  }

  if (input === "female") {
    return out(`👩 Is group mein **${gendernu.length}** larkiyan hain... Pariyon ka group hai kia? 🧚‍♀️✨`);
  }

  if (input === "gei") {
    return out(`🌈 Yahan **${nope.length}** aise log bhi hain jinka gender bot bhi nahi samajh saka 🤖😂`);
  }

  if (input === "allgroup") {
    return out(`📦 Bot abhi tak **${boxget.length}** groups mein dhoom macha raha hai 🚀`);
  }

  if (input === "alluser") {
    return out(`👤 Bot ke users ka total hai **${userget.length}**... Wah bhai, poori duniya chala raha hai tu! 🌍🔥`);
  }

  return out("❌ Baby sahi tag likh... Yeh kia likh diya? 🤦‍♂️");
};
