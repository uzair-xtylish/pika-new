const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "shahbash",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "pat your tag friend's head",
  commandCategory: "Edit-img",
  usages: "pat the head [tag the person you need to slap]",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("You have not entered a message yet");
  else
  return request('https://nekos.life/api/v2/img/pat', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", jinda rahe mela putar 🥺❤️ mela ashirward hamesha tmke sat raheg",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
    }