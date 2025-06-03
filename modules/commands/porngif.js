const fs = require("fs-extra");
const request = require("request");

module.exports = {
  config: {
    name: "porngif",
    version: "1.0.0",
    hasPermssion: 0, // 0 = sab users use kar sakte hain, 2 = admin only
    credits: "Converted by King Uzair | Original by Uzair Rajput Mtx",
    description: "Sends a random NSFW GIF",
    commandCategory: "nsfw",
    usages: "",
    cooldowns: 5
  },

  run: async function ({ api, event }) {
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

    const randomLink = links[Math.floor(Math.random() * links.length)];
    const fileName = __dirname + `/cache/porngif_${Date.now()}.gif`;

    try {
      const file = fs.createWriteStream(fileName);
      request(randomLink).pipe(file);
      file.on("finish", async () => {
        return api.sendMessage(
          {
            body: "🔥 Here's your NSFW GIF",
            attachment: fs.createReadStream(fileName)
          },
          event.threadID,
          () => fs.unlinkSync(fileName),
          event.messageID
        );
      });
    } catch (err) {
      console.error(err);
      return api.sendMessage("❌ Failed to fetch GIF.", event.threadID, event.messageID);
    }
  }
};
