module.exports.config = {
  name: "joke",
  version: "1.0.1",
  hasPermission: 0,
  credits: "uzairrajput",
  description: "Noprefix",
  commandCategory: "noPrefix",
  usages: "[]",
  cooldowns: 5,
  usePrefix: false
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  var { threadID, messageID } = event;

  var tl = [
    "\n● ──────────────────── ●\n𝙎𝙝𝙤𝙝𝙖𝙧 (𝙗𝙖𝙬𝙞 𝙠𝙤 𝙛𝙤𝙣 𝙥𝙚): Tum bohat pyari ho...!\nBivi: Shukriya...!\nShohar: Tum bilkul Shehzadi jesi ho...\nBivi: Bohat shukriya... aur batao kya kar rahe ho?\nShohar: Main farigh tha socha mazak karun! 😆👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙂𝙞𝙧𝙡𝙛𝙧𝙞𝙚𝙣𝙙: Purse ghar reh gaya hai, 1000 rupee chahiye\nBoyfriend: Yeh 10 rupee lo, rickshaw lo aur apni girlfriend ko behosh kar do 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘼𝙪𝙣𝙩𝙞: Doctor saab ghutney mein dard hai\nDoctor: Wazan kitna hai?\nAunty: Aankh ki chashme ke sath 83kg hai\nDoctor: Aur baghair chashme ke?\nAunty: Mein dekhi nahi sakti 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘾𝙝𝙖𝙣𝙩𝙪: Mujhe agar naya dimaagh lagwana ho toh tumhara lagwaunga\nMintu: Tumhein lagta hai main genius hoon?\nChantu: Nahi, mujhe aisa chahiye jo kabhi use hi na hua ho 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘼𝙪𝙧𝙖𝙩: Mera wazan kaise kam hoga?\nDoctor: Gardan ko left aur right hilaen\nAurat: Kab?\nDoctor: Jab koi khana offer kare 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙞𝙫𝙞: Tum sharab par paisay barbaad karte ho!\nShohar: Aur tum 5000 ka makeup?\nBivi: Kyunke main tumhein handsome samajhti hoon!\nShohar: Main bhi isliye peeta hoon 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙀𝙠 𝙢𝙖𝙘𝙝𝙝𝙖𝙧 uda uda soch raha tha...\nDost: Kya hua?\nPehla: Soch raha hoon ki chuhe ki patti mein chooha, soap box mein soap... phir aadmi machardani mein? 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙎𝙝𝙤𝙝𝙖𝙧: Aaj khana kyun nahi banaya?\nBivi: Gir gayi thi aur lag gayi\nShohar: Kahan gir gayi thi?\nBivi: Takiyye pe gir ke aankh lag gayi 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙎𝙝𝙤𝙝𝙖𝙧: Tum meri film mein kaam karogi?\nBivi: Scene kya hai?\nShohar: Tumhe pani mein dhire dhire jaana hai\nBivi: Film ka naam kya hai?\nShohar: Bhains paani mein chali gayi 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘿𝙤𝙘𝙩𝙤𝙧: Tumhara beta pagal kaise hua?\nBaap: Pehle general coach mein safar karta tha\nDoctor: Phir?\nBaap: Sab kehte the thoda hato, tab se fisal gaya 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙂𝙞𝙧𝙡: Kya kar rahe ho?\nBunty: Machhar maar raha hoon\nGirl: Kitne maare?\nBunty: 5 - 3 auratein 2 mard\nGirl: Kaise pata?\nBunty: 3 mirror ke samne, 2 beer ke sath 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘿𝙖𝙣𝙞: Agar teri GF aur best friend doob rahe hon to kise bachayega?\nMTX: Dono ko doobne dunga... ek sath kyun the? 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙇𝙖𝙧𝙠𝙞: Kya tumhe mera chappal ka size pata hai?\nLarka: Pehle hi gift mang rahi ho? Main sandal nahi de raha 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙖𝙣𝙠 𝙈𝙖𝙣𝙖𝙜𝙚𝙧: Mishra ji humare purane grahak hain\nClerk: Hello Mishra ji! Kal bola tha 'jahannum mein jao'\nAaj sirf yeh kehne ke liye call kiya... mat jao 😂👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙎𝙝𝙤𝙝𝙖𝙧: Kaash tum sugar hoti, kabhi kabhi meetha bolti\nBivi: Kaash tum adrak hotay, dil pe bojh mat dalte 😆👈\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙈𝙖𝙨𝙩𝙚𝙧: Decimal kya hai?\nPappu: Jab 10 se LOVE hota hai to decimal kehte hain 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙖𝙗𝙖: Facebook pe roza rakho, mohabbat wapas aa jaayegi 😄\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙐𝙨𝙩𝙖𝙙: Asmaan mein udti aur zameen pe paida karti hai?\nPappu: Air Hostess 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙎𝙩𝙪𝙙𝙚𝙣𝙩: Aapne kabhi bakri ya ghora chashma lagaye dekha hai?\nUstaad behosh 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙈𝙖𝙨𝙩𝙚𝙧: Kitaabein dekh kar kya feel hota hai?\nStudent: Wo phone karti hai lekin jana nahi chahti 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙚𝙩𝙖: Amma pyaar ka virus fail gaya hai\nAmma: Chappal hai mere paas, antivirus kaam karti hai 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙞𝙫𝙞: Tum mein kya dekha jo shaadi ki?\nShohar: Balcony mein bartan dhote dekha tha 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙂𝙞𝙧𝙡𝙛𝙧𝙞𝙚𝙣𝙙: Shaadi ke liye maa se baat karo\nBoy: Ab mere dil mein sirf tu hi hai 😍\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙇𝙖𝙧𝙠𝙖: WhatsApp update karo\nLarki: Kaise?\nLarka: Play Store se\nLarki: Hamare gaon mein Play Store nahi hai 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙍𝙖𝙢𝙪: Garmi mein kya karte ho?\nDholu: AC ke saamne baithte hain\nRamu: Bohat garmi ho to?\nDholu: AC chalu karte hain 😄\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙇𝙖𝙧𝙠𝙖: Pizza khao\nLarki: Paise nahi\nLarka: Mehngai hai\nLarki: Ab tum mere bhai ho 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘼𝙖𝙨𝙝𝙞𝙦: Mujh mein Khuda dikhta hai\nGF: Darshan karo, dakshina do aur nikal jao 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘽𝙤𝙮𝙛𝙧𝙞𝙚𝙣𝙙: Music mein taqat hai, pani bhi garam ho jaye\nGF: Tera gana sun kar mera khoon ubalta hai 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙆𝙖𝙧𝙖𝙣: Main Sunil se shaadi nahi kar sakti\nSavita: Kyun?\nMonica: Usne mujhe doosre se pyar karte dekh liya 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙇𝙖𝙧𝙠𝙖: Mere baap ke samne sab katora leke khade hote hain\nGF: Tumhara baap ameer hai\nLarka: Nahi, gol gappay bechta hai 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙈𝙖𝙧𝙞𝙯: Operation theek se karein\nDoctor: Aisa kyun?\nMariz: Warna aapka hath chalta hai to mera doobta hai 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘿𝙤𝙘𝙩𝙤𝙧: Shohar ko aaram ki zarurat hai, yeh goliyan lo\nBivi: Kab doon?\nDoctor: Yeh uske liye nahi, aapke liye hain 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝙋𝙖𝙥𝙥𝙪: Doctor mujhe kya bimari hai?\nDoctor: Larkiyon ka picha chhor do\nPappu: Kya hoga?\nDoctor: Warna mar jaoge, kyunke ek larki meri bhi hai 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘾𝙝𝙖𝙣𝙩𝙪: Doctor saab, seedhiyan chadhte saans phoolti hai\nDoctor: Dawa likh raha hoon\nChantu: Roz football khelta hoon\nDoctor: Kab tak?\nChantu: Jab tak phone charge hota hai 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝘿𝙤𝙘𝙩𝙤𝙧: Tum chhat se kyun latke ho?\nPagal: Main bulb hoon\nDoctor: Jal kyun nahi rahe?\nPagal: Light gayi hai 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    `\n● ──────────────────── ●\n𝐋𝐚𝐫𝐤𝐢: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐫𝐨𝐳 𝐟𝐨𝐥𝐥𝐨𝐰 𝐤𝐚𝐫𝐭𝐞 𝐡𝐨, 𝐬𝐡𝐚𝐫𝐚𝐦 𝐧𝐚𝐡𝐢 𝐚𝐚𝐭𝐢?\n𝐋𝐚𝐫𝐤𝐚: 𝐒𝐡𝐚𝐫𝐚𝐦 𝐭𝐨𝐮 𝐭𝐚𝐛 𝐚𝐚𝐭𝐢 𝐣𝐚𝐛 𝐭𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐰𝐚𝐩𝐢𝐬 𝐧𝐚 𝐟𝐨𝐥𝐥𝐨𝐰 𝐤𝐚𝐫𝐭𝐢 🤣\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐌𝐚𝐬𝐭𝐞𝐫: 𝐁𝐚𝐭𝐚𝐨, 𝐥𝐢𝐠𝐡𝐭 𝐤𝐲𝐮 𝐜𝐡𝐚𝐥𝐢 𝐣𝐚𝐭𝐢 𝐡𝐚𝐢?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐊𝐲𝐮𝐧𝐤𝐞 𝐮𝐬𝐚𝐲 𝐛𝐡𝐢 𝐚𝐩𝐧𝐢 𝐥𝐢𝐟𝐞 𝐞𝐧𝐣𝐨𝐲 𝐤𝐚𝐫𝐧𝐢 𝐡𝐨𝐭𝐢 𝐡𝐚𝐢! 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐃𝐨𝐜𝐭𝐨𝐫: 𝐀𝐚𝐩 𝐤𝐢 𝐫𝐞𝐩𝐨𝐫𝐭 𝐤𝐞 𝐦𝐮𝐭𝐚𝐛𝐢𝐪 𝐚𝐚𝐩 𝐡𝐞𝐚𝐥𝐭𝐡𝐲 𝐡𝐚𝐢𝐧.\n𝐏𝐚𝐭𝐢𝐞𝐧𝐭: 𝐌𝐚𝐠𝐚𝐫 𝐦𝐮𝐣𝐡𝐞 𝐡𝐚𝐫 𝐰𝐚𝐪𝐭 𝐛𝐡𝐨𝐨𝐤 𝐥𝐚𝐠𝐭𝐢 𝐡𝐚𝐢!\n𝐃𝐨𝐜𝐭𝐨𝐫: 𝐓𝐨𝐮 𝐩𝐡𝐢𝐫 𝐡𝐞𝐚𝐥𝐭𝐡𝐲 𝐧𝐚𝐡𝐢, 𝐝𝐞𝐬𝐢 𝐡𝐨! 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐚𝐚𝐧𝐤𝐡𝐨𝐧 𝐦𝐞𝐢𝐧 𝐤𝐮𝐜𝐡 𝐛𝐚𝐚𝐭 𝐡𝐚𝐢...\n𝐆𝐢𝐫𝐥: 𝐒𝐚𝐜𝐡 𝐦𝐞𝐢𝐧?\n𝐁𝐨𝐲: 𝐇𝐚𝐚𝐧, 𝐭𝐡𝐨𝐫𝐚 𝐤𝐚𝐣𝐚𝐥 𝐢𝐝𝐡𝐚𝐫 𝐮𝐝𝐡𝐚𝐫 𝐡𝐨 𝐠𝐚𝐲𝐚 𝐡𝐚𝐢 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐏𝐚𝐩𝐩𝐮! 𝐒𝐜𝐡𝐨𝐨𝐥 𝐤𝐲𝐮𝐧 𝐧𝐚𝐡𝐢 𝐚𝐚𝐲𝐞 𝐤𝐚𝐥?\n𝐏𝐚𝐩𝐩𝐮: 𝐒𝐢𝐫, 𝐧𝐞𝐞𝐧𝐝 𝐦𝐞𝐢𝐧 𝐥𝐢𝐤𝐡𝐚 "𝐤𝐚𝐥 𝐬𝐜𝐡𝐨𝐨𝐥 𝐣𝐚𝐮𝐧𝐠𝐚"... 𝐚𝐮𝐫 𝐥𝐢𝐤𝐡𝐞 𝐡𝐮𝐞 𝐥𝐚𝐟𝐳𝐨𝐧 𝐤𝐚 𝐛𝐚𝐝𝐚 𝐚𝐬𝐚𝐫 𝐡𝐨𝐭𝐚 𝐡𝐚𝐢! 😴\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐀𝐠𝐚𝐫 𝐭𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐜𝐡𝐡𝐨𝐫 𝐤𝐞 𝐜𝐡𝐚𝐥𝐢 𝐠𝐚𝐲𝐢 𝐭𝐨𝐮 𝐦𝐞𝐢𝐧 𝐩𝐚𝐚𝐧𝐢 𝐦𝐞𝐢𝐧 𝐤𝐨𝐨𝐝 𝐣𝐚𝐮𝐧𝐠𝐚!\n𝐆𝐢𝐫𝐥: 𝐀𝐜𝐡𝐚, 𝐦𝐚𝐠𝐚𝐫 𝐬𝐰𝐢𝐦𝐦𝐢𝐧𝐠 𝐬𝐞𝐞𝐤𝐡 𝐥𝐞𝐧𝐚 𝐩𝐞𝐡𝐥𝐞... 😜\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡 𝐬𝐞 𝐬𝐡𝐚𝐚𝐝𝐢 𝐤𝐲𝐮𝐧 𝐤𝐚𝐫𝐧𝐚 𝐜𝐡𝐚𝐡𝐭𝐞 𝐡𝐨?\n𝐁𝐨𝐲: 𝐊𝐲𝐮𝐧𝐤𝐞 𝐦𝐮𝐣𝐡𝐞 "𝐑𝐢𝐬𝐤" 𝐥𝐞𝐧𝐚 𝐩𝐚𝐬𝐚𝐧𝐝 𝐡𝐚𝐢 😁\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  `\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐈𝐭𝐧𝐚 𝐝𝐞𝐫 𝐬𝐞 𝐤𝐲𝐮 𝐚𝐚𝐲𝐞?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫, 𝐬𝐚𝐩𝐧𝐞 𝐦𝐞𝐢𝐧 𝐡𝐨𝐦𝐞𝐰𝐨𝐫𝐤 𝐤𝐚𝐫 𝐫𝐚𝐡𝐚 𝐭𝐡𝐚, 𝐮𝐬𝐢 𝐤𝐚 𝐩𝐫𝐢𝐧𝐭 𝐧𝐢𝐤𝐚𝐥𝐧𝐞 𝐠𝐚𝐲𝐚 𝐭𝐡𝐚 😜\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•`,

  "\n● ──────────────────── ●\n𝐏𝐚𝐩𝐩𝐮: 𝐌𝐮𝐦𝐦𝐲 𝐦𝐞𝐢𝐧 𝐝𝐨𝐜𝐭𝐨𝐫 𝐛𝐚𝐧𝐮𝐧𝐠𝐚!\n𝐌𝐮𝐦𝐦𝐲: 𝐏𝐞𝐡𝐥𝐞 𝐬𝐩𝐞𝐥𝐥𝐢𝐧𝐠 𝐬𝐚𝐡𝐢 𝐤𝐚𝐫𝐧𝐚 𝐬𝐞𝐞𝐤𝐡 𝐥𝐞 '𝐃𝐫.'  𝐦𝐞𝐢𝐧 '𝐑' 𝐩𝐞𝐡𝐥𝐞 𝐚𝐚𝐭𝐚 𝐡𝐚𝐢 𝐲𝐚 '𝐃'? 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥𝐟𝐫𝐢𝐞𝐧𝐝: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐤𝐢𝐭𝐧𝐚 𝐩𝐲𝐚𝐫 𝐤𝐚𝐫𝐭𝐞 𝐡𝐨?\n𝐁𝐨𝐲𝐟𝐫𝐢𝐞𝐧𝐝: 𝐔𝐭𝐧𝐚 𝐣𝐢𝐭𝐧𝐚 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐡𝐨𝐥𝐢𝐝𝐚𝐲𝐬 𝐬𝐞 𝐤𝐚𝐫𝐭𝐚 𝐡𝐚𝐢! 😍\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥𝐟𝐫𝐢𝐞𝐧𝐝: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐤𝐢𝐭𝐧𝐚 𝐩𝐲𝐚𝐫 𝐤𝐚𝐫𝐭𝐞 𝐡𝐨?\n𝐁𝐨𝐲𝐟𝐫𝐢𝐞𝐧𝐝: 𝐔𝐭𝐧𝐚 𝐣𝐢𝐭𝐧𝐚 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐡𝐨𝐥𝐢𝐝𝐚𝐲𝐬 𝐬𝐞 𝐤𝐚𝐫𝐭𝐚 𝐡𝐚𝐢! 😍\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐓𝐮𝐦 𝐢𝐭𝐧𝐢 𝐬𝐮𝐧𝐝𝐞𝐫 𝐤𝐚𝐢𝐬𝐞 𝐡𝐨?\n𝐆𝐢𝐫𝐥: 𝐌𝐚𝐦𝐦𝐢 𝐤𝐚 𝐣𝐚𝐚𝐝𝐮 𝐡𝐚𝐢!\n𝐁𝐨𝐲: 𝐌𝐞𝐫𝐢 𝐦𝐨𝐦 𝐧𝐞 𝐛𝐡𝐢 𝐣𝐚𝐝𝐮 𝐤𝐢𝐲𝐚 𝐭𝐡𝐚... 𝐦𝐚𝐠𝐚𝐫 𝐦𝐮𝐣𝐡𝐞 𝐜𝐡𝐮𝐡𝐚 𝐛𝐧𝐚 𝐝𝐢𝐲𝐚 😩\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐓𝐮𝐦 𝐡𝐨𝐦𝐞𝐰𝐨𝐫𝐤 𝐤𝐲𝐨𝐧 𝐧𝐚𝐡𝐢 𝐥𝐚𝐲𝐞?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫, 𝐦𝐚𝐢𝐧 𝐝𝐚𝐫 𝐠𝐲𝐚 𝐭𝐡𝐚 𝐤𝐢 𝐤𝐡𝐨 𝐧𝐚 𝐣𝐚𝐞! 😆\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐤𝐢𝐬𝐢 𝐤𝐚𝐦 𝐤𝐞 𝐧𝐚𝐡𝐢𝐧 𝐡𝐨!\n𝐁𝐨𝐲: 𝐏𝐡𝐢𝐫 𝐭𝐮𝐦𝐡𝐚𝐫𝐚 𝐡𝐢 𝐤𝐚𝐦 𝐛𝐧𝐤𝐞 𝐝𝐢𝐤𝐡𝐚𝐨𝐧𝐠𝐚 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐌𝐨𝐦: 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐩𝐚𝐝𝐡𝐚𝐢 𝐦𝐞𝐢𝐧 𝐝𝐢𝐥 𝐤𝐲𝐮𝐧 𝐧𝐚𝐡𝐢 𝐥𝐚𝐠𝐭𝐚?\n𝐌𝐞: 𝐊𝐲𝐮𝐧𝐤𝐞 𝐝𝐢𝐥 𝐭𝐨 𝐛𝐚𝐛𝐚 𝐊𝐡𝐚𝐧 𝐩𝐞 𝐥𝐚𝐠𝐚 𝐡𝐮𝐚 𝐡𝐚𝐢 💘\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐓𝐮𝐦 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 𝐡𝐨!\n𝐆𝐢𝐫𝐥: 𝐌𝐚𝐠𝐚𝐫 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐜𝐚𝐭 𝐡𝐚𝐢 😹\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐚𝐢𝐧 𝐜𝐡𝐚𝐧𝐝 𝐤𝐢 𝐭𝐚𝐫𝐚𝐡 𝐡𝐨𝐧𝐚 𝐜𝐡𝐚𝐡𝐭𝐚 𝐡𝐮𝐧!\n𝐆𝐢𝐫𝐥: 𝐊𝐲𝐮𝐧? 𝐀𝐤𝐞𝐥𝐚?\n𝐁𝐨𝐲: 𝐍𝐚𝐡𝐢𝐧, 𝐫𝐨𝐳 𝐫𝐚𝐭 𝐬𝐚𝐫 𝐩𝐞 𝐧𝐚𝐳𝐚𝐫 𝐚𝐚𝐮𝐧 🌝\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐁𝐚𝐭𝐚𝐨 𝐚𝐤𝐚𝐬𝐡 𝐤𝐲𝐨𝐧 𝐧𝐢𝐥𝐚 𝐝𝐢𝐤𝐡𝐭𝐚 𝐡𝐚𝐢?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫 𝐟𝐢𝐥𝐭𝐞𝐫 𝐧𝐚𝐡𝐢 𝐥𝐚𝐠𝐚 𝐡𝐨𝐭𝐚 𝐧𝐚 😁\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐌𝐞: 𝐘𝐚𝐚𝐫 𝐣𝐢𝐛 𝐰𝐚𝐥𝐢 𝐠𝐢𝐫𝐥 𝐝𝐞𝐤𝐡𝐢 𝐭𝐨 𝐝𝐢𝐥 𝐤𝐚𝐧𝐩 𝐠𝐲𝐚!\n𝐃𝐨𝐬𝐭: 𝐓𝐨 𝐟𝐢𝐫 𝐣𝐚𝐨 𝐝𝐨𝐜𝐭𝐨𝐫 𝐤𝐞 𝐩𝐚𝐬 🤨\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

    "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐦𝐞𝐫𝐞 𝐝𝐢𝐥 𝐦𝐞𝐢𝐧 𝐡𝐨!\n𝐁𝐨𝐲: 𝐏𝐡𝐢𝐫 𝐜𝐚𝐫𝐝𝐢𝐨𝐥𝐨𝐠𝐢𝐬𝐭 𝐤𝐨 𝐛𝐮𝐥𝐚𝐨, 𝐛𝐚𝐡𝐚𝐫 𝐧𝐢𝐤𝐚𝐥𝐨 𝐦𝐮𝐣𝐡𝐞! 😅\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐚𝐢𝐧 𝐭𝐨 𝐛𝐢𝐥𝐤𝐮𝐥 𝐬𝐚𝐟𝐚𝐲𝐚 𝐬𝐚𝐟 𝐡𝐮𝐧!\n𝐆𝐢𝐫𝐥: 𝐀𝐜𝐡𝐚 𝐭𝐡𝐞𝐤 𝐡𝐚𝐢, 𝐭𝐡𝐨𝐝𝐚 𝐬𝐚 𝐛𝐢𝐧𝐠𝐡𝐚𝐢 𝐥𝐞 𝐥𝐨 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
  "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐌𝐞𝐢𝐧 𝐚𝐩𝐧𝐞 𝐝𝐫𝐞𝐬𝐬 𝐬𝐞 𝐛𝐚𝐡𝐮𝐭 𝐩𝐲𝐚𝐫 𝐤𝐚𝐫𝐭𝐢 𝐡𝐮𝐧!\n𝐁𝐨𝐲: 𝐌𝐚𝐢𝐧 𝐛𝐡𝐢 𝐚𝐩𝐧𝐢 𝐦𝐨𝐭𝐨𝐫𝐛𝐢𝐤𝐞 𝐬𝐞 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
  "\n● ──────────────────── ●\n𝐌𝐨𝐦: 𝐊𝐢𝐭𝐧𝐢 𝐝𝐞𝐫 𝐬𝐞 𝐛𝐚𝐡𝐚𝐫 𝐡𝐨?\n𝐌𝐞: 𝐌𝐨𝐦 𝐥𝐚𝐬𝐭 𝐛𝐫𝐞𝐚𝐤𝐮𝐩 𝐤𝐞 𝐛𝐚𝐝 𝐬𝐚𝐧𝐝𝐚𝐬 𝐛𝐡𝐢 𝐚𝐤𝐞𝐥𝐚 𝐣𝐚𝐭𝐚 𝐡𝐮 😭\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
  "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐞𝐫𝐚 𝐝𝐢𝐥 𝐭𝐨𝐝 𝐤𝐞 𝐤𝐲𝐮𝐧 𝐠𝐲𝐚?\n𝐆𝐢𝐫𝐥: 𝐁𝐚𝐝𝐞 𝐥𝐨𝐠𝐨𝐧 𝐤𝐢 𝐛𝐚𝐭𝐞𝐧 𝐬𝐚𝐦𝐚𝐣𝐡 𝐧𝐚𝐡𝐢 𝐚𝐚𝐭𝐢 𝐭𝐮𝐦𝐡𝐞! 💔\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", 
     "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐝𝐨𝐛𝐚𝐫𝐚 𝐦𝐚𝐭 𝐝𝐞𝐤𝐡𝐧𝐚! 😡\n𝐁𝐨𝐲: 𝐒𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭 𝐥𝐞 𝐥𝐢𝐲𝐚 𝐡𝐚𝐢, 𝐚𝐛 𝐡𝐚𝐫 𝐝𝐢𝐧 𝐝𝐞𝐤𝐡𝐨𝐨𝐧𝐠𝐚 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

      "\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐓𝐮𝐦𝐡𝐞 𝐜𝐡𝐮𝐭𝐭𝐢 𝐤𝐲𝐨𝐧 𝐜𝐡𝐚𝐡𝐢𝐲𝐞?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫, 𝐝𝐢𝐥 𝐧𝐚𝐡𝐢𝐧 𝐥𝐚𝐠 𝐫𝐚𝐡𝐚 𝐬𝐤𝐨𝐨𝐥 𝐦𝐞𝐢𝐧, 𝐥𝐚𝐠𝐭𝐚 𝐡𝐚𝐢 𝐛𝐫𝐞𝐚𝐤-𝐮𝐩 𝐡𝐨 𝐠𝐲𝐚 💔\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

      "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐞𝐢𝐧 𝐛𝐚𝐝𝐚 𝐀𝐦𝐞𝐞𝐫 𝐡𝐮!\n𝐆𝐢𝐫𝐥: 𝐏𝐫𝐨𝐨𝐟?\n𝐁𝐨𝐲: 𝐉𝐨 𝐝𝐢𝐥 𝐤𝐡𝐫𝐚𝐛 𝐤𝐚𝐫𝐞, 𝐮𝐬𝐞 𝐛𝐥𝐨𝐜𝐤 𝐤𝐚𝐫 𝐝𝐞𝐭𝐚 𝐡𝐮 😌\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

      "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐌𝐞𝐫𝐚 𝐃𝐨𝐬𝐭 𝐁𝐨𝐲𝐟𝐫𝐢𝐞𝐧𝐝 𝐛𝐡𝐢 𝐧𝐚𝐡𝐢𝐧 𝐡𝐚𝐢 🥺\n𝐁𝐨𝐲: 𝐏𝐡𝐢𝐫 𝐦𝐞𝐢𝐧 𝐤𝐢𝐚 𝐚𝐮𝐫𝐭𝐢𝐲𝐨𝐧 𝐤𝐚 𝐃𝐞𝐩𝐚𝐫𝐭𝐦𝐞𝐧𝐭 𝐡𝐮? 😐\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

      "\n● ──────────────────── ●\n𝐌𝐨𝐦: 𝐓𝐮𝐦 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐦𝐨𝐛𝐢𝐥𝐞 𝐤𝐲𝐮 𝐜𝐡𝐞𝐝𝐭𝐞 𝐫𝐞𝐭𝐞 𝐡𝐨?\n𝐌𝐞: 𝐌𝐨𝐛𝐢𝐥𝐞 𝐤𝐚 𝐝𝐢𝐥 𝐧𝐚𝐡𝐢 𝐡𝐨𝐭𝐚 𝐤𝐢𝐲𝐮𝐧𝐤𝐞 𝐰𝐨 𝐌𝐞𝐫𝐢 𝐆𝐢𝐫𝐥𝐟𝐫𝐢𝐞𝐧𝐝 𝐡𝐚𝐢 😍📱\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐅𝐫𝐢𝐞𝐧𝐝: 𝐓𝐮𝐦 𝐚𝐤𝐬𝐚𝐫 𝐚𝐤𝐞𝐥𝐞 𝐤𝐲𝐨 𝐫𝐚𝐡𝐭𝐞 𝐡𝐨?\n𝐌𝐞: 𝐐𝐮𝐧𝐤𝐞 𝐦𝐞𝐫𝐢 𝐦𝐨𝐡𝐛𝐛𝐚𝐭 𝐛𝐡𝐢 𝐚𝐤𝐞𝐥𝐢 𝐭𝐡𝐢 💀\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",
    "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐚𝐢𝐧 𝐭𝐨 𝐭𝐞𝐫𝐚 𝐝𝐢𝐥 𝐜𝐡𝐮𝐫𝐚𝐧𝐚 𝐚𝐲𝐚 𝐭𝐡𝐚...\n𝐆𝐢𝐫𝐥: 𝐌𝐚𝐢𝐧𝐞 𝐭𝐨 𝐩𝐞𝐡𝐥𝐞 𝐡𝐢 𝐋𝐨𝐜𝐤 𝐥𝐚𝐠𝐚 𝐝𝐢𝐲𝐚 😏\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐤𝐢𝐭𝐧𝐚 𝐜𝐡𝐚𝐡𝐭𝐞 𝐡𝐨 𝐦𝐮𝐣𝐡𝐞?\n𝐁𝐨𝐲: 𝐔𝐭𝐧𝐚 𝐣𝐢𝐭𝐧𝐚 𝐦𝐢𝐥𝐤𝐚 𝐝𝐚𝐢𝐫𝐲 𝐦𝐢𝐥𝐤 𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 𝐜𝐡𝐚𝐡𝐭𝐚 𝐡𝐮! �\n● ──────────────────── ●\n    𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐁𝐚𝐭𝐚𝐨 𝐙𝐚𝐤𝐚𝐭 𝐤𝐢𝐭𝐧𝐢 𝐡𝐨𝐭𝐢 𝐡𝐚𝐢?    \n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫, 𝐉𝐨 𝐡𝐚𝐫 𝐦𝐚𝐡𝐢𝐧𝐞 𝐦𝐚𝐦𝐚 𝐤𝐢 𝐦𝐚𝐧𝐢 𝐦𝐞𝐧 𝐣𝐚𝐭𝐢 𝐡𝐚𝐢 😆\n    ● ──────────────────── ●\n    𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐮𝐣𝐡𝐞 𝐭𝐨 𝐭𝐮𝐦𝐡𝐚𝐫𝐢 𝐚𝐚𝐰𝐚𝐳 𝐛𝐚𝐝𝐚 𝐩𝐚𝐬𝐚𝐧𝐝 𝐚𝐚𝐲𝐢...\n𝐆𝐢𝐫𝐥: 𝐎𝐨𝐨𝐨𝐡 𝐓𝐡𝐚𝐧𝐤𝐬!\n𝐁𝐨𝐲: 𝐁𝐚𝐬 𝐢𝐬𝐢𝐥𝐢𝐞 𝐌𝐮𝐭𝐞 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 😂\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐌𝐞𝐧𝐭𝐨𝐫: 𝐀𝐩𝐧𝐚 𝐓𝐚𝐥𝐞𝐧𝐭 𝐝𝐢𝐤𝐡𝐚𝐨!\n    𝐌𝐞: 𝐌𝐚𝐢 𝐜𝐡𝐚𝐭𝐬 𝐦𝐞𝐢𝐧 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐛𝐞𝐣𝐡 𝐤𝐞 𝐝𝐞𝐥𝐞𝐭𝐞 𝐤𝐚𝐫 𝐝𝐞𝐭𝐚 𝐡𝐮 😎\n    ● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•", "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐓𝐮𝐦 𝐦𝐮𝐣𝐡𝐞 𝐝𝐨𝐛𝐚𝐫𝐚 𝐦𝐚𝐭 𝐝𝐞𝐤𝐡𝐧𝐚! 😡\n𝐁𝐨𝐲: 𝐒𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭 𝐥𝐞 𝐥𝐢𝐲𝐚 𝐡𝐚𝐢, 𝐚𝐛 𝐡𝐚𝐫 𝐝𝐢𝐧 𝐝𝐞𝐤𝐡𝐨𝐨𝐧𝐠𝐚 😎\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐓𝐞𝐚𝐜𝐡𝐞𝐫: 𝐓𝐮𝐦𝐡𝐞 𝐜𝐡𝐮𝐭𝐭𝐢 𝐤𝐲𝐨𝐧 𝐜𝐡𝐚𝐡𝐢𝐲𝐞?\n𝐒𝐭𝐮𝐝𝐞𝐧𝐭: 𝐒𝐢𝐫, 𝐝𝐢𝐥 𝐧𝐚𝐡𝐢𝐧 𝐥𝐚𝐠 𝐫𝐚𝐡𝐚 𝐬𝐤𝐨𝐨𝐥 𝐦𝐞𝐢𝐧, 𝐥𝐚𝐠𝐭𝐚 𝐡𝐚𝐢 𝐛𝐫𝐞𝐚𝐤-𝐮𝐩 𝐡𝐨 𝐠𝐲𝐚 💔\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐁𝐨𝐲: 𝐌𝐞𝐢𝐧 𝐛𝐚𝐝𝐚 𝐀𝐦𝐞𝐞𝐫 𝐡𝐮!\n𝐆𝐢𝐫𝐥: 𝐏𝐫𝐨𝐨𝐟?\n𝐁𝐨𝐲: 𝐉𝐨 𝐝𝐢𝐥 𝐤𝐡𝐫𝐚𝐛 𝐤𝐚𝐫𝐞, 𝐮𝐬𝐞 𝐛𝐥𝐨𝐜𝐤 𝐤𝐚𝐫 𝐝𝐞𝐭𝐚 𝐡𝐮 😌\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐆𝐢𝐫𝐥: 𝐌𝐞𝐫𝐚 𝐃𝐨𝐬𝐭 𝐁𝐨𝐲𝐟𝐫𝐢𝐞𝐧𝐝 𝐛𝐡𝐢 𝐧𝐚𝐡𝐢𝐧 𝐡𝐚𝐢 🥺\n𝐁𝐨𝐲: 𝐏𝐡𝐢𝐫 𝐦𝐞𝐢𝐧 𝐤𝐢𝐚 𝐚𝐮𝐫𝐭𝐢𝐲𝐨𝐧 𝐤𝐚 𝐃𝐞𝐩𝐚𝐫𝐭𝐦𝐞𝐧𝐭 𝐡𝐮? 😐\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•",

  "\n● ──────────────────── ●\n𝐌𝐨𝐦: 𝐓𝐮𝐦 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐦𝐨𝐛𝐢𝐥𝐞 𝐤𝐲𝐮 𝐜𝐡𝐞𝐝𝐭𝐞 𝐫𝐞𝐭𝐞 𝐡𝐨?\n𝐌𝐞: 𝐌𝐨𝐛𝐢𝐥𝐞 𝐤𝐚 𝐝𝐢𝐥 𝐧𝐚𝐡𝐢 𝐡𝐨𝐭𝐚 𝐤𝐢𝐲𝐮𝐧𝐤𝐞 𝐰𝐨 𝐌𝐞𝐫𝐢 𝐆𝐢𝐫𝐥𝐟𝐫𝐢𝐞𝐧𝐝 𝐡𝐚𝐢 😍📱\n● ──────────────────── ●\n𒁍⃝𝐌𝐀𝐃𝐄 𝐁𝐘 𝐔ʑʌīī𝐑┼•__🦋•"
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("joke") >= 0) {
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: "@" + userInfo + ", " + rand,
      mentions: [{
        tag: "@" + userInfo,
        id: userH
      }]
    };

    setTimeout(function () {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }
};

module.exports.run = async function ({ api, event, __GLOBAL }) {};
