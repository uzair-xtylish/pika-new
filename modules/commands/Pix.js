module.exports.config = {
  name: "pix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "View existing photos on bot",
  commandCategory: "For users",
  usages: "image",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 List of available images  🎭 \n\n1. girl photo \n2. boy photo \n3. butt photo \n4. naughty photo \n5. nude photo\n6. cosplay photo\n7. anime pictures\n8. sexy photo\n9. photo\n10. breast < 18 + >\n11. hentai pictures\n\nUse -photo  < pictures you need to see >\n
`, event.threadID, event.messageID);

     if (args[0] == "vú") {
    axios.get('https://api-kanekidz.herokuapp.com/gaivuto').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
    if (args[0] == "trai") {
    axios.get('https://api.vinhbeat.ga/trai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "hentai") {
    axios.get('https://api-kanekidz.herokuapp.com/hentai').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback) });
  }
  if (args[0] == "naughty") {
    axios.get('https://apitaoa-1.chinhle4447.repl.co/v1/nauthy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/naughty.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/naughty.${ext}`)).on("close", callback) });
  }
  if (args[0] == "kana") {
    axios.get('https://apichitanda-1.khanh-huyenhuy3.repl.co/kana.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/kana.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kana.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kana.${ext}`)).on("close", callback) });
  }
  if (args[0] == "sexy") {
    axios.get('https://api-kanekidz.herokuapp.com/gaisexy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/sexy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "nude") {
    axios.get('https://api.vinhbeat.ga/nude.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback) });
  }
  if (args[0] == "cosplay") {
    axios.get('https://api.vinhbeat.ga/cosplay.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback) });
  }
  if (args[0] == "anime") {
    axios.get('https://uptime.ocvat2810.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback) });
  }
  if (args[0] == "mông") {
    axios.get('https://api-kanekidz.herokuapp.com/gaiditbu').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/mông.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mông.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mông.${ext}`)).on("close", callback) });
  }
 if (args[0] == "gái") {
axios.get('https://api.vinhbeat.ga/gai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/gái.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gái.${ext}`)).on("close", callback) });
  }
}
