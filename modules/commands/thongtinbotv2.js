module.exports.config = {
    name: "botv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput", 
    description: "",
    commandCategory: "Media",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs": ""
    }

};

module.exports.run = async({api,event,args}) => {
    const axios = require('axios');

const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will get your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get friend information tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, number of members,...)\n\n${prefix}${this.config.name} user box [uid || tid]\nCreated by: 𝑴𝑻𝑿 💚✨`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "turn off" : sex == true ? "turn on" : "Kh";
       if(!imgg) api.sendMessage(`👀 Group name: ${threadInfo.threadName}\n🐧 TID: ${args[1]}\n🦋 Approve: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Information: \n» ${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} admin.\n» Includes ${nam} boy and ${nu} female.\n» Total messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`👀 Group name: ${threadInfo.threadName}\n🐧 TID: ${args[1]}\n🦋 Approve: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Information: \n» ${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} admin.\n» Includes ${nam} boy and ${nu} female.\n» Total messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

      }

            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "turn off" : sex == true ? "turn on" : "Kh";
          if(!img) api.sendMessage(`👀 Group name: ${threadInfo.threadName}\n🐧 TID: ${event.threadID}\n🦋 Approve: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Information: \n» ${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n» Including ${nam} boy and ${nu} female.\n» Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`👀 Group name: ${threadInfo.threadName}\n🐧 TID: ${event.threadID}\n🦋 Approve: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Information: \n» ${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} admin.\n» Includes ${nam} boy and ${nu} female.\n» Total messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;

const res = await axios.get(`https://www.phamvandienofficial.xyz/facebook/info?uid=${event.senderID}`);
var fl = res.data.follow_user ? `${res.data.follow_user}` : "Not public";
var home = res.data.hometown  ? `${res.data.hometown}` : "Not public";
var hh = res.data.user_love ? `${res.data.user_love}` : "Not yet published";
 var birthday = res.data.birthday ? `${res.data.birthday}` : "Not public";
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "Are not !" : data[id].isFriend == true ? "Have !" : "Fuck";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`😚Name: ${name}` + `\n🏝Personal URL: ${url}` + `\n💦User name: ${sn}\n🐧UID: ${id}\n🦋Sex: ${gender}\n🎂Date of birth : ${birthday} \n🔥Having ${fl} number of followers\n🏡In: ${home}\n💗Dating with ${hh}\n❄️Make bot friends: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {

    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)

const res = await axios.get(`https://www.phamvandienofficial.xyz/facebook/info?uid=${mentions}`);
var fl = res.data.follow_user ? `${res.data.follow_user}` : "Not public";
var home = res.data.hometown  ? `${res.data.hometown}` : "Not public";
var hh = res.data.user_love ? `${res.data.user_love}` : "Not yet published";
 var birthday = res.data.birthday ? `${res.data.birthday}` : "Not public";

  let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "Are not !" : data[mentions].isFriend == true ? "Have !" : "Fuck";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`😚Name: ${name}` + `\n🏝Personal URL: ${url}` + `\n💦User name: ${sn}\n🐧UID: ${mentions}\n🦋Sex: ${gender}\n🎂Date of birth : ${birthday} \n🔥Having ${fl} view\n🏡Live in: ${home}\n💗Dating with ${hh} \n❄️Make bot friends: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);

const res = await axios.get(`https://www.phamvandienofficial.xyz/facebook/info?uid=${args[1]}`);
var fl = res.data.follow_user ? `${res.data.follow_user}` : "Not public";
var home = res.data.hometown  ? `${res.data.hometown}` : "Not public";
var hh = res.data.user_love ? `${res.data.user_love}` : "Not yet published";
 var birthday = res.data.birthday ? `${res.data.birthday}` : "Not public";
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "Are not !" : data[args[1]].isFriend == true ? "Have !" : "Fuck";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`😚Name: ${name}` + `\n🏝Personal URL: ${url}` + `\n💦User name: ${sn}\n🐧UID: ${args[1]}\n🦋Sex: ${gender}\n🎂Date of birth : ${birthday} \n🔥Having ${fl} view\n🏡Live in: ${home}\n💗Dating with ${hh} \n❄️Make bot friends: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());//https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de ${args[1]}
    }
     }
     }
      }