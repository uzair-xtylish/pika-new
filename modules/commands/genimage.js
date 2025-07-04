module.exports.config = {
    name: "genimg",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Search image but generated by AI",
    usePrefix: true,
    commandCategory: "with prefix",
    usages: "text - number of image to show",
    cooldowns: 5,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage('Use : '+global.config.PREFIX+this.config.name+' mark Zuckerberg - 10', event.threadID, event.messageID);
    api.sendMessage("⏳Generating...", event.threadID, event.messageID);
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`https://free-api.ainz-sama101.repl.co/others/genimg?prompt=${encodeURIComponent(keySearchs)}`);
    const data = res.data.result;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: "Total image: "+data.length+"\nShowing "+numberSearch + ' generated images for '+ keySearchs+"\nGenerated by ai"
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};