const config = require("../config");
const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");

module.exports.config = {
    name: "porngif",
    version: "1.0.0",
    hasPermission: 2, // 0 for all users, 1 for admins, 2 for bot admins
    credits: "Uzair Rajput Mtx", // Updated credits
    description: "Sends a random adult GIF or media file.",
    commandCategory: "NSFW",
    usages: "[porngif]",
    cooldowns: 5
};

module.exports.execute = async ({ api, event, args }) => {
    const DY_SCRAP = require('xxgif'); // Don't change my Credit Coz i Edit
    const dy_scrap = new DY_SCRAP();

    // List of media links
    const links = [
        "https://i.postimg.cc/7hfbxttJ/39951141.gif",
        "https://i.postimg.cc/T3ySrVFj/21153541.gif",
        "https://i.postimg.cc/pLt8Zx10/27079421.gif",
        "https://i.postimg.cc/cL4fb33v/41176981.gif",
        "https://i.postimg.cc/j2mBFTg5/18596611.gif",
        "https://i.postimg.cc/YChzSgCJ/10608452.gif",
        "https://i.postimg.cc/fRN58kzF/12573981.gif",
        "https://i.postimg.cc/Zq3b47t0/15635492.gif",
        "https://i.postimg.cc/L660SJK1/23034381.gif",
        "https://i.postimg.cc/D0X2xxvq/porn-gif-magazine-nastiest73.gif",
        "https://i.postimg.cc/MHKLTT4X/kiera-winters-cum-facial-fuck-gif-003.gif",
        "https://i.postimg.cc/Z5rxGm7Q/38518836005d1642c60e.gif",
        "https://i.postimg.cc/T1b6VQGB/pussy-penetration-001.gif",
        "https://i.postimg.cc/W13Fv8Tr/EC42C4B.gif",
        "https://i.postimg.cc/Jnw50vzS/CB6A914.gif",
        "https://i.postimg.cc/Gpvs72bS/BFF8AE3.gif",
        "https://i.postimg.cc/cCGWDx4T/DCE353A.gif",
        "https://i.postimg.cc/pX979bWL/878345.gif",
        "https://i.postimg.cc/hvw7f7SM/tetona-001-21.gif",
        "https://i.postimg.cc/02V9dqDR/blowjob-by-mouthfuckgif.gif",
        "https://i.postimg.cc/T2kst279/lesbo-at-sexylesby.gif",
        "https://i.postimg.cc/C5jsTNCk/teen-via-nsfwforsure.gif",
        "https://i.postimg.cc/j2sL240z/pounding-via-porngifjunkie.gif",
        "https://i.postimg.cc/nL4mLz9f/3471133-porn-gif-magazine-nastiest-001-1.gif",
        "https://i.postimg.cc/wvJ9zy1D/autumn-falls-amateurallure-doggystyle-sex.gif"
    ];

    try {
        // Select a random link
        const randomLink = links[Math.floor(Math.random() * links.length)];
        const extension = randomLink.split(".").pop().toLowerCase();
        const fileName = `porngif_${Date.now()}.${extension}`;
        const filePath = __dirname + "/cache/" + fileName;

        // Download the file
        await new Promise((resolve, reject) => {
            request(encodeURI(randomLink))
                .pipe(fs.createWriteStream(filePath))
                .on("close", resolve)
                .on("error", reject);
        });

        // Prepare attachment based on file type
        let attachment;
        if (["gif", "mp4", "webm"].includes(extension)) {
            attachment = fs.createReadStream(filePath);
        } else if (["jpg", "jpeg", "png"].includes(extension)) {
            attachment = { path: filePath };
        } else {
            throw new Error("Unsupported file format");
        }

        // Send the message with attachment
        await api.sendMessage({
            body: `🔥 Here's your random NSFW content! (${links.length} available)`,
            attachment
        }, event.threadID, event.messageID);

        // Clean up the file
        fs.unlinkSync(filePath);
    } catch (error) {
        console.error(error);
        api.sendMessage("❌ An error occurred while fetching the content. Please try again later.", event.threadID, event.messageID);
    }
};
