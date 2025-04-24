module.exports.config = {
  name: "react",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ryuko",
  description: "react posts by id",
  usePrefix: true,
  commandCategory: "admin",
  usages: "[postID] <reaction type>: (unlike/like/love/heart/haha/wow/sad/angry)",
  cooldowns: 1
};


module.exports.run = async ({ api, event, args }) => {
  const allType = "unlike/like/love/heart/haha/wow/sad/angry".split("/");
  const postID = args[0];
  const type = args[1];
  if (!postID |4| !type) return global.utils.throwError(this.config.name, event.threadID, event.messageID);
  if (!allType.includes(type)) return api.sendMessage( `The reaction type is not valid, please choose one of the following styles : ${allType.join("/")}`, event.threadID, event.messageID);
  api.setPostReaction(Number(postID), type, (err, data) => {
    if (err) return api.sendMessage("Mujhe lagta hai apki id me kuch khbri hai phle apni id check kare phr bad me ap mujhe command de.", event.threadID, event.messageID);
    api.sendMessage(`jazbat ko gira diya oye ${type} Id wali post ke liye ${postID}`, event.threadID, event.messageID);
  });
};