module.exports.config = {
  name: "discord",
  version: "1.0.9",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "discord server",
  commandCategory: "chatbot",
  usages: `Please add some context\n\nHow to use?\n${global.config.PREFIX}discord <context>\n\nExample:\n${global.config.PREFIX}discord hello\n`,
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const Chatbot  =  require("discord-chatbot");

if (!args[0]) {api.sendMessage(`Please add some context\n\nHow to use?\n${global.config.PREFIX}discord <context>\n\nExample:\n${global.config.PREFIX}discord hello\n\nCreated by: 𝑴𝑻𝑿 💚✨`,event.threadID, event.messageID)}
  else{
 var mess = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
const chatbot  =  new  Chatbot({name: "Uzairmtx", gender: "Male"});
    const res = await chatbot.chat(mess).catch(e => console.log(e));

 if(res === "My dear great botmaster, 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.") {
    api.sendMessage(`I was made by Uzair Rajput.`, event.threadID, event.messageID)
    return;
              }   
      if(res === "My birthplace is Uzair MTX. laptop. What is your birthplace?") {
    api.sendMessage(`My birthplace is in laptop. What is your birthplace?`, event.threadID, event.messageID)
    return;
              } 
      if(res === "My favorite anime is <em>Ghost in the Shell</em>") {
    api.sendMessage(`My favorite anime is Overflow, what about you?`, event.threadID, event.messageID)
    return;
              }     
      if(res === "I can't think of any. You suggest anime.") {
    api.sendMessage(`I suggest you to watch Overflow, One piece 10/10 masterpiece.`, event.threadID, event.messageID)
    return;
              }     
            if(res === "I was created by UZAIR RAJPUT MTX.") {
    api.sendMessage(`I was created by my master.`, event.threadID, event.messageID)
    return;
              }     

              if(res === "I obey Lebyy_mtxuzair.") {
    api.sendMessage(`I obey 𝑴𝑻𝑿 💚✨`, event.threadID, event.messageID)
    return;
              }     
 api.sendMessage(res, event.threadID, event.messageID)
  }
                                }