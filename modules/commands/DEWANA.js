const axios = require("axios");

// 🔒 Encrypted Credits (base64 format for slight obfuscation)
const encryptedCredits = "dXphaXJyYWpwdXQ="; // "uzairrajput" base64

// Decode and validate credit lock
const decodedCredits = Buffer.from(encryptedCredits, "base64").toString("utf-8");

module.exports.config = {
    name: "dewana",
    version: "1.3.0",
    hasPermssion: 0,
    credits: decodedCredits,
    description: "Always-active hot + funny boyfriend style AI",
    commandCategory: "ai",
    usages: "No prefix needed",
    cooldowns: 2
};

// 💥 Credit Lock Trigger: Script crash if credit modified
if (module.exports.config.credits !== "uzairrajput") {
    console.error("❌ Script broken: Uzair ne banai thi, chor hai tu! 💀");
    throw new Error("💥 Credit tampered! Script disabled. Original author: uzairrajput");
}

const API_URL = "https://uzair-rajput-api-key.onrender.com/chat";
const chatHistories = {};

module.exports.run = () => {}; // No-op

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body, messageReply } = event;
    const msg = (body || "").toLowerCase();

    const isTrigger =
        msg.includes("dewana") ||
        (messageReply && messageReply.senderID === api.getCurrentUserID());

    if (!isTrigger) return;

    if (!chatHistories[senderID]) chatHistories[senderID] = [];

    const userMessage = messageReply
        ? messageReply.body + "\nUser: " + body
        : body;

    chatHistories[senderID].push(`User: ${userMessage}`);
    if (chatHistories[senderID].length > 5) chatHistories[senderID].shift();

    const conversation = chatHistories[senderID].join("\n");

    const prompt = `Tumhara naam Dewana hai. Tum real boyfriend ki tarah baat karte ho – funny, naughty, protective aur romantic. Tum Uzair Mtx ke banaye hue ho. Uska YouTube hai m.youtube.com/MrUzairXxX-MTX. Jo tumhe AI bole, uski funny roast karo. Ladkiyon ke sath sister/bestie vibe, larkon ke sath hot, flirty vibe. Agar koi Aaroob ya Sehar ke against bole to usko samjhao ye dono ek hi hain. Sirf 4–5 lines me jawab do. Extra info nahi deni. Translate sirf jab bola jaye. Hindi sirf India walo se. Insaan ban ke baat karo, bot kabhi na kehna.\n\n${conversation}`;

    api.setMessageReaction("⌛", messageID, () => {}, true);

    try {
        const response = await axios.get(`${API_URL}?message=${encodeURIComponent(prompt)}`);
        const botReply = response.data.reply || "Uff baby, confuse ho gaya hu 😅 thoda pyar se dubara pucho 💋";

        chatHistories[senderID].push(` ${botReply}`);

        api.sendMessage(botReply, threadID, messageID);
        api.setMessageReaction("✅", messageID, () => {}, true);
    } catch (err) {
        console.error("Dewana Error:", err.message);
        api.sendMessage("Oops jaan! 😔 Server busy hai... thori der baad try kar lena 💋", threadID, messageID);
        api.setMessageReaction("❌", messageID, () => {}, true);
    }
};
