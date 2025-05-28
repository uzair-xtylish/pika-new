const botAdmins = ["61552682190483", "61552682190483"]; 

module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "uzairrajput",
    description: "Bot leaves group if owner/admin says 'out' or 'nikal'",
    commandCategory: "Admin",
    usages: "out",
    cooldowns: 5,
    usePrefix: false
};

module.exports.handleEvent = async function ({ api, event }) {
    try {
        const message = event.body?.toLowerCase();
        const threadID = event.threadID;
        const senderID = event.senderID;

        // Tamper protection - crash if credits modified
        const fs = require("fs");
        const fileContent = fs.readFileSync(__filename, "utf-8");
        if (!fileContent.includes('credits: "uzairrajput"')) {
            throw new Error("Credits have been tampered with. Crashing for protection.");
        }

        if (!message) return;
        if (message.includes("out") || message.includes("nikal")) {
            if (botAdmins.includes(senderID)) {
                await api.sendMessage("Bye bye, I'm leaving! 👋", threadID);
                return api.removeUserFromGroup(api.getCurrentUserID(), threadID);
            } else {
                const funnyReplies = [
                    "Main kyun jaun? Tu ja 😂",
                    "Pehle tu 😂",
                    "Teri himmat kaise hui mujhe nikalne ki 😤",
                    "Main bot hoon, majboor nahi 😎",
                    "Apne aap se nikal 😂"
                ];
                const reply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
                return api.sendMessage(reply, threadID);
            }
        }
    } catch (err) {
        console.error("Tampering detected or other error:", err);
        process.exit(1); // force crash
    }
};

module.exports.run = () => {}; // run empty because handleEvent is used
