const fs = require("fs");

// ✅ Apna Facebook ID yahan daalo (sirf ek daalna hai)
const botAdmins = ["61552682190483"];

module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "uzairrajput",
  description: "Sirf owner bole to bot group chhodega",
  commandCategory: "Admin",
  usages: "out",
  cooldowns: 5,
  usePrefix: false
};

module.exports.handleEvent = async function ({ api, event }) {
  const message = (event.body || "").toLowerCase().trim();
  const threadID = event.threadID;
  const senderID = event.senderID;

  // ✅ Credit lock - agar kisi ne credits badle to bot crash hoga
  try {
    const fileContent = fs.readFileSync(__filename, "utf8");
    if (!fileContent.includes('credits: "uzairrajput"')) {
      throw new Error("Credits change kiye gaye hain!");
    }
  } catch (err) {
    console.error("Credit tampering ya read error:", err);
    process.exit(1); // Bot band ho jaye
  }

  // ✅ "out" ya "nikal" message pe hi kaam kare
  if (!["out", "nikal"].some(k => message.includes(k))) return;

  // ✅ Agar owner ne bola to bot nikal jaye
  if (botAdmins.includes(senderID)) {
    try {
      await api.sendMessage("Bot admin ne bola, jaa rahe hain 👋", threadID);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
    } catch (e) {
      return api.sendMessage("Mujhe remove karne ki permission nahi mil rahi 😥", threadID);
    }
  }

  // ✅ Agar koi aur bole to funny reply de
  const funnyReplies = [
    "Tu nikal 😂",
    "Main kyun jaun? Main bot hoon 😎",
    "Admin bula to jaunga 😏",
    "Pehle tu ja 😛",
    "Teri himmat kaise hui? 😤"
  ];
  const reply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
  return api.sendMessage(reply, threadID);
};

module.exports.run = () => {}; // Zarurat ke liye khaali rakha hai
