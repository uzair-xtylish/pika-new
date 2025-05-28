const fs = require("fs");

// ✅ Sirf yahan apni Facebook ID likho (owner ya bot admin)
const botAdmins = ["61552682190483"]; // Apna ID daalna mat bhoolna

module.exports.config = {
  name: "nikal",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "uzairrajput",
  description: "Admin bole to bot group chhod dega",
  commandCategory: "Admin",
  usages: "out/nikal",
  cooldowns: 5,
  usePrefix: false // 🔥 Ye zaroor likhna hai taake noprefix chale
};

module.exports.handleEvent = async function ({ api, event }) {
  const threadID = event.threadID;
  const senderID = event.senderID;
  const message = (event.body || "").toLowerCase().trim();

  // ✅ Credit tampering check (agar kisi ne credit change kiya to bot crash karega)
  try {
    const fileContent = fs.readFileSync(__filename, "utf8");
    if (!fileContent.includes('credits: "uzairrajput"')) {
      console.error("Credits badle gaye hain. Bot band ho raha hai.");
      process.exit(1);
    }
  } catch (err) {
    console.error("Credit check fail:", err);
    process.exit(1);
  }

  // ✅ Sirf out ya nikal par hi react kare
  if (!["out", "nikal"].some(word => message.includes(word))) return;

  // ✅ Agar owner/admin ne bola
  if (botAdmins.includes(senderID)) {
    await api.sendMessage("Admin ne bola, jaa rahe hain 👋", threadID);
    await new Promise(res => setTimeout(res, 1500));
    return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
  }

  // ✅ Funny reply for non-admins
  const funnyReplies = [
    "Tu nikal 😂",
    "Main kyun jaun? 😤",
    "Admin ne nahi bola 😎",
    "Pehle tu ja bhai 🤣",
    "Nice try 😛"
  ];
  const reply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
  return api.sendMessage(reply, threadID);
};

module.exports.run = () => {}; // is required even if empty
