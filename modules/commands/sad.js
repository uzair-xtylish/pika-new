module.exports.config = {
  name: "sad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "cheer",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "sakit",
    "Sakit",
    "Saket",
    "saket",
    "Peyn",
    "Pain",
    "peyn",
    "Ghum",
    "ghum",
    "Takleef",
    "takleef",
    "dard",
    "Dark",
    "Sad",
    "sad",
    "Dukh",
    "dukh",
    ":<",
    ":(",
    "😭",
    "😢",
    "😔",
    "Hurt",
    "hurt",
    "hurting",
    "upset",
    "Upset",
    "😥",
    "Depress",
    "depress"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["sad"] == "undefined", thread["sad"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "", "", "", "", "", "", "", "", "", "", ""
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
let juswa = ["Akhir me sab kuch theak ho jayga.", "Bass apna sar utha ke agr barhte rahen.", "inshallah ak din sab theak hoga..!", "ap apne apko akela mat samjho ham sab apke sat hai!", "ap bhot strong hai itni jaldi apne bure waqt c har mat mano. Q k har rat ke bad subha lazmi hoti hai.", "jab ap khud ko mayusi me feel kare tw yad rakhe, apke pass kuch loG aise bhi hain, jo apki parwa kRte hai, or apko khush dekhna chahte hai, tw udas hona chordo, or Khush raha kare!", "کچھ ایسا کریں جس سے آپ لطف اندوز ہوں۔ چاہے پڑھنا ہو، موسیقی سننا ہو، یا پیاروں کے ساتھ وقت گزارنا ہو، کچھ ایسا کریں جس سے آپ خوش ہوں۔", "کسی ایسے شخص سے رابطہ کریں جس پر آپ اعتماد کرتے ہیں اور اس کے بارے میں بات کریں کہ آپ کیسا محسوس کر رہے ہیں۔ کبھی کبھی صرف اس کے بارے میں بات کرنے سے مدد مل سکتی ہے۔.", "upset na ho ye waqt bhi guzar jayga.", "𝖭𝗈 𝗆𝖺𝗍𝗍𝖾𝗋 𝗐𝗁𝖺𝗍 𝗂𝗌 𝗀𝗈𝗂𝗇𝗀 𝗈𝗇 𝗂𝗇 𝗒𝗈𝗎𝗋 𝗅𝗂𝖿𝖾, 𝗄𝗇𝗈𝗐 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗅𝗈𝗏𝖾𝖽 𝖺𝗇𝖽 𝖺𝗉𝗉𝗋𝖾𝖼𝗂𝖺𝗍𝖾𝖽. 𝖸𝗈𝗎 𝖺𝗋𝖾 𝗌𝗍𝗋𝗈𝗇𝗀 𝖺𝗇𝖽 𝖼𝖺𝗉𝖺𝖻𝗅𝖾 𝖺𝗇𝖽 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗀𝖾𝗍 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝗍𝗁𝗂𝗌. 𝖳𝖺𝗄𝖾 𝖼𝖺𝗋𝖾 𝗈𝖿 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝖺𝗇𝖽 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗍𝗁𝖺𝗍 𝗍𝗁𝗂𝗇𝗀𝗌 𝗐𝗂𝗅𝗅 𝗀𝖾𝗍 𝖻𝖾𝗍𝗍𝖾𝗋.", "𝖨 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎'𝗋𝖾 𝖿𝖾𝖾𝗅𝗂𝗇𝗀 𝖽𝗈𝗐𝗇 𝗋𝗂𝗀𝗁𝗍 𝗇𝗈𝗐, 𝖺𝗇𝖽 𝖨'𝗆 𝗁𝖾𝗋𝖾 𝗍𝗈 𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝖺 𝖼𝗁𝖾𝖾𝗋 𝗎𝗉 𝗆𝖾𝗌𝗌𝖺𝗀𝖾. 𝖫𝗂𝖿𝖾 𝖼𝖺𝗇 𝖻𝖾 𝗁𝖺𝗋𝖽 𝗌𝗈𝗆𝖾𝗍𝗂𝗆𝖾𝗌, 𝖺𝗇𝖽 𝗂𝗍'𝗌 𝗂𝗆𝗉𝗈𝗋𝗍𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗇𝗈𝗍 𝖺𝗅𝗈𝗇𝖾. 𝖤𝗏𝖾𝗋𝗒𝗈𝗇𝖾 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌 𝖽𝗂𝖿𝖿𝗂𝖼𝗎𝗅𝗍 𝗍𝗂𝗆𝖾𝗌 𝖺𝗇𝖽 𝗂𝗍'𝗌 𝗈𝗄 𝗍𝗈 𝖿𝖾𝖾𝗅 𝗈𝗏𝖾𝗋𝗐𝗁𝖾𝗅𝗆𝖾𝖽. 𝖳𝗁𝖾 𝗆𝗈𝗌𝗍 𝗂𝗆𝗉𝗈𝗋𝗍𝖺𝗇𝗍 𝗍𝗁𝗂𝗇𝗀 𝗂𝗌 𝗍𝗈 𝗍𝖺𝗄𝖾 𝖼𝖺𝗋𝖾 𝗈𝖿 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝖺𝗇𝖽 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗌𝗍𝗋𝗈𝗇𝗀 𝖺𝗇𝖽 𝖼𝖺𝗉𝖺𝖻𝗅𝖾 𝗈𝖿 𝗈𝗏𝖾𝗋𝖼𝗈𝗆𝗂𝗇𝗀 𝖺𝗇𝗒 𝗈𝖻𝗌𝗍𝖺𝖼𝗅𝖾 𝗍𝗁𝖺𝗍 𝖼𝗈𝗆𝖾𝗌 𝗒𝗈𝗎𝗋 𝗐𝖺𝗒."];
 let juswa1 = juswa[Math.floor(Math.random() * juswa.length)];
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Hi ${name}, ${juswa1}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "sad",
    "off": "sad",
    "successText": `${this.config.name} success!`,
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["sad"] == "undefined" || data["sad"] == true) data["sad"] = false;
  else data["sad"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["sad"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }