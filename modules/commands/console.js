module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "uzairrajput",
    description: "Consoles are less boring",
    commandCategory: "System",
    usages: "console",
    cooldowns: 5
};

module.exports.handleEvent = async function ({
    api,
    event,
    args,
    Users,
    Threads
}) {
    const {
        configPath
    } = global.client;
    const {
        DeveloperMode
    } = global.config;
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    const modDev = config.DeveloperMode
     if ((this.config.credits) != "uzairrajput) { return }
    if (modDev == true) return
    else {
   var chalk = require("chalk");
     const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Karachi").format("D/MM/YYYY || HH:mm:ss");
  var thu = moment.tz('Asia/Karachi').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
    var msg = event.body||"Photos, videos or special characters";
    const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Name has been crossed out";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor1 = Math.floor(Math.random()*12345678).toString(16);
    var randomColor2 = Math.floor(Math.random()*13245769).toString(16);
    var randomColor3 = Math.floor(Math.random()*13333333).toString(16);
    var randomColor4 = Math.floor(Math.random()*16777216).toString(16);
    var randomColor5 = Math.floor(Math.random()*14532484).toString(16); 
    const name = await Users.getNameUser(event.senderID)
    return console.log(chalk.bold.hex("#" + randomColor4)(`\n`) + chalk.bold.hex("#" + randomColor)(`BOX: `) + chalk.hex("#" + randomColor1)(`${threadName}`) + chalk.bold.hex("#" + randomColor)( `\nNAME: `)  + chalk.bold.hex("#" + randomColor2) (`${name}`) + chalk.bold.hex("#" + randomColor)(`\nMESSAGE: `) + chalk.hex("#" + randomColor3)(`${msg}`) + chalk.bold.hex("#" + randomColor) (`\nTIME: `) + chalk.bold.hex("#" + randomColor5) (`${thu} || ${gio}\n`)+ chalk.bold.hex("#" + randomColor4) (`━━━━━━━━━━━━━━━━━| 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 |━━━━━━━━━━━━━━━━━`));
}
}
module.exports.run = async ({
    api,
    event,
    args
}) => {
    if ((this.config.credits) != "uzairrajput) { return api.sendMessage(`cre`, event.threadID, event.messageID)}
    const {
        configPath
    } = global.client;
    const {
        DeveloperMode
    } = global.config;
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    const modDev = config.DeveloperMode

    if (modDev == true) {
        api.sendMessage(`→ DeveloperMode: ${modDev}\n→ Please set to false to use!!!`, event.threadID)
    } else
        return api.sendMessage(`→ DeveloperMode: ${modDev}\n→ Console is running...`, event.threadID)
}
