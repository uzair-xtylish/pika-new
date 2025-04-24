module.exports.config = {
    name: "Voiceassistant",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "ChatGPT at Google Translate",
    commandCategory: "AI",
    usages: "[tanong]",
    cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    let { messageID, threadID, senderID, body, type, messageReply } = event;
    const response = args.join(" ");
    if (!args[0]) return api.sendMessage("you, I'm a voice assistant from GPTGO with Google translate, your AI companion within easy reach. What knowledge are you looking for now??", threadID, messageID);
    try {
        const res = await axios.get(`if you have an existing AI conversational there, you can copy the API and place it here=${response}\nyour answer with only one sentence.`);
        var respond = res.data.result;
        const translatedResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tl&dt=t&q=${encodeURIComponent(respond)}`);
        var translatedText = translatedResponse.data[0][0][0];
        const path = resolve(__dirname, 'cache', `${threadID}_${senderID}.wav`);
        await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(translatedText)}&tl=tl&client=tw-ob`, path);
        return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path));
    } catch (error) {
        api.sendMessage("🚫 An error occurred while generating the response. Please try again?", threadID, messageID);
    }
};
      