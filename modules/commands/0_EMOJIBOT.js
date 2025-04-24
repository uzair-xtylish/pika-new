const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "flirting mitx bot emoji",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "mruzairmtx",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Uzair Rajput Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but ulti harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 "
];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage(`${name} Ap kia type kar ke send karne wale hai🤔🙄`, threadID);
   };

    if ((event.body.indexOf("Uzair RajPööt ") >= 0 )) {
     return api.sendMessage(`${name} Boss Hain meRe..😇✨`, threadID, messageID);
   };

    if ((event.body.indexOf("😄") >= 0 )) {
     return api.sendMessage(`${name} Chohe ka chehra mat banao 😆`, threadID, messageID);
   };

    if ((event.body.indexOf("😬") >= 0 )) {
     return api.sendMessage(`${name} lagta hai aj pehli bar tumne dant saf kare hai 😁`, threadID, messageID);
   };

    if ((event.body.indexOf("🤠") >= 0 )) {
     return api.sendMessage(`${name} Duniya ki sab se bari topi hai tu..😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😓") >= 0 )) {
     return api.sendMessage(`${name} Sar c pani q tapak raha hai 😅`, threadID, messageID);
   };

    if ((event.body.indexOf("🤭") >= 0 )) {
     return api.sendMessage(`${name} Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kia hai batao 😂🤤`, threadID, messageID);
   };

    if ((event.body.indexOf("😺") >= 0 )) {
     return api.sendMessage(`${name} Zada mat hasso ak hi punch me tumhre sare dant torh duga 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😥") >= 0 )) {
     return api.sendMessage(`${name} ️Ary yar ro mat, ro q rahe ho tum, babu, 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("😳") >= 0 )) {
     return api.sendMessage(`${name} ️tokur tokur dekhte ho kia..🥺🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("Owner") >= 0 )) {
     return api.sendMessage(`${name} Uzair Mtx 💚✨ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.`, threadID, messageID);
   };

    if ((event.body.indexOf("kiss") >= 0 )) {
     return api.sendMessage(`${name} Ary mummah bash baby 😘😘😘`, threadID, messageID);
   };

    if ((event.body.indexOf("🫶") >= 0 )) {
     return api.sendMessage(`${name} ary ary lagta hai tumhe mujhse piyar hogya 🙈🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("😊") >= 0 )) {
     return api.sendMessage(`${name} Honto pe muskurahat 😁 ankho me nami 🤭 meRi har sans me, 😀 hai bass teri hi kami 🤤👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Gud Morning") >= 0 )) {
     return api.sendMessage(`${name} Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫`, threadID, messageID);
   };

    if ((event.body.indexOf("creator") >= 0 )) {
     return api.sendMessage(`${name} ️𝑴𝑻𝑿 💚✨ hain. meRe Creator`, threadID, messageID);
   };

    if ((event.body.indexOf("😇") >= 0 )) {
     return api.sendMessage(`${name} Haye tum kitne massom ho 😝🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("🌚") >= 0 )) {
     return api.sendMessage(`${name} Jaisi shakal wesa emoji..😒😒`, threadID, messageID);
   };

    if ((event.body.indexOf("uzair") >= 0 )) {
     return api.sendMessage(`${name} ️•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋`, threadID, messageID);
   };

    if ((event.body.indexOf("Uzair Rajput") >= 0 )) {
     return api.sendMessage(`${name} 🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍`, threadID, messageID);
   };

    if ((event.body.indexOf("😋") >= 0 )) {
     return api.sendMessage(`${name} Is zuban ko gande irade c na nikal 😂😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("⭐") >= 0 )) {
     return api.sendMessage(`${name} Chalo le Chalen tumhe Taaroon ke Shaher me dharti pe ye duniya hmme piyar na karne degi..👩‍❤️‍👨👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👁️") >= 0 )) {
     return api.sendMessage(`${name} Ankheein khuli ya band dedar unka hi hota hai, kase kaho ke o yara ye piyar kase hota hai... 🙊🙉`, threadID, messageID);
   };

    if ((event.body.indexOf("Agar raho me kio mushkil na aye") >= 0 )) {
     return api.sendMessage(`${name} tw me chahunga ke Manzil na aye 🛣️🚶`, threadID, messageID);
   };

    if ((event.body.indexOf("Me usko bhol jao ak pal me") >= 0 )) {
     return api.sendMessage(`${name} Magar shart hai ke bich me ye-👉❤️ dil na aye..💝👈`, threadID, messageID);
   };

    if ((event.body.indexOf("tm knse city ho") >= 0 )) {
     return api.sendMessage(`${name} Me Hyderabad se ho `, threadID, messageID);
   };

    if ((event.body.indexOf("😕") >= 0 )) {
     return api.sendMessage(`${name} Chale jao, meRe samne terha muh mat banao 😂🤟👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Pakistan ke log kase hai") >= 0 )) {
     return api.sendMessage(`${name} Alhamdulillah Pakistani log bhot axhe hai ❤️✨`, threadID, messageID);
   };

    if ((event.body.indexOf("😩") >= 0 )) {
     return api.sendMessage(`${name} Baby kia hua, ro q rahe ho, 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😲") >= 0 )) {
     return api.sendMessage(`${name} Aisa kia dekh liya tumne, muh ke sath sath tmhri ankhein bhi khul gai 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf(" Tumhe Hyderabad passand hai") >= 0 )) {
     return api.sendMessage(`${name} Han G behad passand hai I love Hyderabad ❤️✨🙌`, threadID, messageID);
   };

    if ((event.body.indexOf("teri maa ki chut") >= 0 )) {
     return api.sendMessage(`${name} ️tumhri maa bina () 👈 iski hai kia 🤔😂`, threadID, messageID);
   };

    if ((event.body.indexOf("teri bhen ki () ") >= 0 )) {
     return api.sendMessage(`${name} Teri bhen ki nahi hai tw me gold ki laga do phir 24 ghante dimand me rahegi, 😸😸😸👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Soch") >= 0 )) {
     return api.sendMessage(`${name} Han soch soch, or meRe liye bhi kuch soch. 🤨👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤫") >= 0 )) {
     return api.sendMessage(`${name} Dekha maine tumhri nak me ungli dalwa di 😒😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Hello") >= 0 )) {
     return api.sendMessage(`${name} Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 𝑴𝑻𝑿 💚✨ kìrâñ RajPööt ☠️🏴‍☠️`, threadID, messageID);
   };

    if ((event.body.indexOf("meRa bot") >= 0 )) {
     return api.sendMessage(`${name} Me 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ ka BOT ho.`, threadID, messageID);
   };

    if ((event.body.indexOf("nino") >= 0 )) {
     return api.sendMessage(`${name} Ao bashe meRe pass so Jao 🙊😜👈`, threadID, messageID);
   };

    if ((event.body.indexOf("bot cmnt ao") >= 0 )) {
     return api.sendMessage(`${name} pehle naha ke ao ganne bache 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("🚬") >= 0 )) {
     return api.sendMessage(`${name} Mehboob c axhi tw cigrat hoti hai, kam c kam honto tak tw ati hai, 🚬🚬`, threadID, messageID);
   };

    if ((event.body.indexOf("😱") >= 0 )) {
     return api.sendMessage(`${name} Kia hua😱 Itna handsome banda nahi dekha kia 😳👈`, threadID, messageID);
   };

    if ((event.body.indexOf("soch") >= 0 )) {
     return api.sendMessage(`${name} ️️Itna mat socho kamine, me tumhri girlfriend ko le kar bagh jaoga 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("Hi") >= 0 )) {
     return api.sendMessage(`${name} Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 𝑴𝑻𝑿 💚✨ kìrâñ RajPööt ☠️🏴‍☠️`, threadID, messageID);
   };

    if ((event.body.indexOf("tum kaha se ho") >= 0 )) {
     return api.sendMessage(`${name} ️️ Me Pakistan Se ho.. ❤️✨`, threadID, messageID);
   };

    if ((event.body.indexOf("💝") >= 0 )) {
     return api.sendMessage(`${name} ️ Tum dekh rahe ho, meRi mohabbat 🙂🤟🙄`, threadID, messageID);
   };

    if ((event.body.indexOf("😮‍💨") >= 0 )) {
     return api.sendMessage(`${name} 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨`, threadID, messageID);
   };

    if ((event.body.indexOf("😤") >= 0 )) {
     return api.sendMessage(`${name} ️🥺 ME TW SIRF MAZAK KAR RAHA THA 🥺. NARAZ NAHI HO AK KISS LO OR RELAX HO JAO 😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Hum bhi tanha the tum bhi tanha the milke rone lage") >= 0 )) {
     return api.sendMessage(`${name} Ak jaise the dono ke dard dawa hone lage, tujhe muskurate hai tujhe gungunate hai khud tere pass hi chor ate hai jitne bhi Zindagani hai tujhse hi sajate hai khud ko tere p@ss hi chor ate hai😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Welcome") >= 0 )) {
     return api.sendMessage(`${name}  IT WAS MY DUTY 😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤬") >= 0 )) {
     return api.sendMessage(`${name} BABU, GUSSA NAHI KARO BLOOD PRESSURE BARH JAYEGA meRi JAN KA,😘😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Sad") >= 0 )) {
     return api.sendMessage(`${name} ARY KIA HUA MERE BABU KO,🥺 YE LO CHOCOLATE 🍫 OR CHAHIYE TW TYPE KARO 👉CHOCOLATE👈 ME TUMHE OR DEGUNGA 🍫`, threadID, messageID);
   };

    if ((event.body.indexOf("😟") >= 0 )) {
     return api.sendMessage(`${name} 😟😟😟😟😟😟`, threadID, messageID);
   };

    if ((event.body.indexOf("😥") >= 0 )) {
     return api.sendMessage(`${name} ️ KIA HUA Q UPSET HO BABU, 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😢") >= 0 )) {
     return api.sendMessage(`${name} MELE BACHE KO TIYA HUA 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☹️") >= 0 )) {
     return api.sendMessage(`${name} Awww ITNI UDAS Q HO KHUBSURAT LAG RAHI HO..❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("🙁") >= 0 )) {
     return api.sendMessage(`${name} Aww MELA BACHA ☹️`, threadID, messageID);
   };

    if ((event.body.indexOf("🫤") >= 0 )) {
     return api.sendMessage(`${name} 🫤🫤🫤🫤🫤🫤`, threadID, messageID);
   };

    if ((event.body.indexOf("😕") >= 0 )) {
     return api.sendMessage(`${name} 😕😕😕😕😕😕`, threadID, messageID);
   };

    if ((event.body.indexOf("🤐") >= 0 )) {
     return api.sendMessage(`${name} Ab tumhri awaz na aye warna Gabbar ajyga 😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😰") >= 0 )) {
     return api.sendMessage(`${name} 😰😰😰😰😰😰`, threadID, messageID);
   };

    if ((event.body.indexOf("😨") >= 0 )) {
     return api.sendMessage(`${name} 😨😨😨😨😨😨`, threadID, messageID);
   };

    if ((event.body.indexOf("😧") >= 0 )) {
     return api.sendMessage(`${name} 😧😧😧😧😧😧`, threadID, messageID);
   };

    if ((event.body.indexOf("😦") >= 0 )) {
     return api.sendMessage(`${name} 😦😦😦😦😦😦`, threadID, messageID);
   };

    if ((event.body.indexOf("😮") >= 0 )) {
     return api.sendMessage(`${name} Muh band karo machar chala jayega 😂😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😯") >= 0 )) {
     return api.sendMessage(`${name} 😯😯😯😯😯😯`, threadID, messageID);
   };

    if ((event.body.indexOf("😲") >= 0 )) {
     return api.sendMessage(`${name} 😲😲😲😲😲😲`, threadID, messageID);
   };

    if ((event.body.indexOf("😳") >= 0 )) {
     return api.sendMessage(`${name} Itni bari bari ankho c kia dekh rahe ho 🤔👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤯") >= 0 )) {
     return api.sendMessage(`${name} lagta hai tumhare sar pe kisi ne boombari ki hai 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😬") >= 0 )) {
     return api.sendMessage(`${name} 😬😬😬😬😬😬`, threadID, messageID);
   };

    if ((event.body.indexOf("😓") >= 0 )) {
     return api.sendMessage(`${name} 😓😓😓😓😓😓`, threadID, messageID);
   };

    if ((event.body.indexOf("😞") >= 0 )) {
     return api.sendMessage(`${name} 😞😞😞😞😞😞`, threadID, messageID);
   };

    if ((event.body.indexOf("😖") >= 0 )) {
     return api.sendMessage(`${name} 😖😖😖😖😖😖`, threadID, messageID);
   };

    if ((event.body.indexOf("😣") >= 0 )) {
     return api.sendMessage(`${name} 😣😣😣😣😣😣`, threadID, messageID);
   };

    if ((event.body.indexOf("😩") >= 0 )) {
     return api.sendMessage(`${name} 😩😩😩😩😩😩`, threadID, messageID);
   };

    if ((event.body.indexOf("😫") >= 0 )) {
     return api.sendMessage(`${name} 😫😫😫😫😫😫`, threadID, messageID);
   };

    if ((event.body.indexOf("😵") >= 0 )) {
     return api.sendMessage(`${name} 😵😵😵😵😵😵`, threadID, messageID);
   };

    if ((event.body.indexOf("😵‍💫") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫥") >= 0 )) {
     return api.sendMessage(`${name} 🫥🫥🫥🫥🫥🫥`, threadID, messageID);
   };

    if ((event.body.indexOf("😴") >= 0 )) {
     return api.sendMessage(`${name} So Jao Byy Gn Tc 😴🌃`, threadID, messageID);
   };

    if ((event.body.indexOf("😪") >= 0 )) {
     return api.sendMessage(`${name} Ganne tumhri naak nikal rahi hai 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf(".und") >= 0 )) {
     return api.sendMessage(`${name} Kisi or ka msg me delete nahi kar sakta...🙅🙅🙅`, threadID, messageID);
   };

    if ((event.body.indexOf("🌛") >= 0 )) {
     return api.sendMessage(`${name} 🌛🌛🌛🌛🌛🌛`, threadID, messageID);
   };

    if ((event.body.indexOf("🌜") >= 0 )) {
     return api.sendMessage(`${name} 🌜🌜🌜🌜🌜🌜`, threadID, messageID);
   };

    if ((event.body.indexOf("🌚") >= 0 )) {
     return api.sendMessage(`${name} 🌚🌚🌚🌚🌚🌚`, threadID, messageID);
   };

    if ((event.body.indexOf("🌝") >= 0 )) {
     return api.sendMessage(`${name} 🌝🌝🌝🌝🌝🌝`, threadID, messageID);
   };

    if ((event.body.indexOf("🌞") >= 0 )) {
     return api.sendMessage(`${name} 🌞🌞🌞🌞🌞🌞`, threadID, messageID);
   };

    if ((event.body.indexOf("🫠") >= 0 )) {
     return api.sendMessage(`${name} 🫠🫠🫠🫠🫠🫠`, threadID, messageID);
   };

    if ((event.body.indexOf("😶‍🌫️") >= 0 )) {
     return api.sendMessage(`${name} 😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️`, threadID, messageID);
   };

    if ((event.body.indexOf("🥴") >= 0 )) {
     return api.sendMessage(`${name} lagta hai tumne sasti tablets li hai 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥵") >= 0 )) {
     return api.sendMessage(`${name}  🥵🔥 Garmi bhot hai 🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥶") >= 0 )) {
     return api.sendMessage(`${name} Ary Baba bhot e sardi hai 🥶🥶👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤢") >= 0 )) {
     return api.sendMessage(`${name} 🤢🤢🤢🤢🤢🤢`, threadID, messageID);
   };

    if ((event.body.indexOf("🤮") >= 0 )) {
     return api.sendMessage(`${name} konsa month hai 😂👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🤧") >= 0 )) {
     return api.sendMessage(`${name} kia hua baby, sardi lag gai kia tumhe. 🤧👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤒") >= 0 )) {
     return api.sendMessage(`${name} Tumhe  fever hua hai baby, Me tumhe Dawai la ke 💊💉💉 Deta hu. 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤕") >= 0 )) {
     return api.sendMessage(`${name} 🤕🤕🤕🤕🤕🤕`, threadID, messageID);
   };

    if ((event.body.indexOf("😷") >= 0 )) {
     return api.sendMessage(`${name} Ary kia tum mujhe bhi bemar Karna chahte ho..🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤠") >= 0 )) {
     return api.sendMessage(`${name} 🤠🤠🤠🤠🤠🤠`, threadID, messageID);
   };

    if ((event.body.indexOf("🤑") >= 0 )) {
     return api.sendMessage(`${name} 🤑🤑🤑🤑🤑🤑`, threadID, messageID);
   };

    if ((event.body.indexOf("😎") >= 0 )) {
     return api.sendMessage(`${name} menu kala chasma jajta hai jajta hai gore mukhre pe.. 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤓") >= 0 )) {
     return api.sendMessage(`${name} 🤓🤓🤓🤓🤓🤓`, threadID, messageID);
   };

    if ((event.body.indexOf("🥸") >= 0 )) {
     return api.sendMessage(`${name} 🥸🥸🥸🥸🥸🥸`, threadID, messageID);
   };

    if ((event.body.indexOf("🤥") >= 0 )) {
     return api.sendMessage(`${name} Tumri naak itni bari hai ke tumhe uski zarorat nahi paregi. 😂🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤡") >= 0 )) {
     return api.sendMessage(`${name} 🤡🤡🤡🤡🤡🤡`, threadID, messageID);
   };

    if ((event.body.indexOf("👻") >= 0 )) {
     return api.sendMessage(`${name} 👻👻👻👻👻👻`, threadID, messageID);
   };

    if ((event.body.indexOf("💩") >= 0 )) {
     return api.sendMessage(`${name} 💩💩💩💩💩💩`, threadID, messageID);
   };

    if ((event.body.indexOf("👽") >= 0 )) {
     return api.sendMessage(`${name} 👽👽👽👽👽👽`, threadID, messageID);
   };

    if ((event.body.indexOf("🤖") >= 0 )) {
     return api.sendMessage(`${name} Tumhe sharam nahi tum mujhe cherh rahr ho.. 🙁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🎃") >= 0 )) {
     return api.sendMessage(`${name} 🎃🎃🎃🎃🎃🎃`, threadID, messageID);
   };

    if ((event.body.indexOf("😈") >= 0 )) {
     return api.sendMessage(`${name} 😈😈😈😈😈😈`, threadID, messageID);
   };

    if ((event.body.indexOf("👿") >= 0 )) {
     return api.sendMessage(`${name} 👿👿👿👿👿👿`, threadID, messageID);
   };

    if ((event.body.indexOf("👹") >= 0 )) {
     return api.sendMessage(`${name} 👹👹👹👹👹👹`, threadID, messageID);
   };

    if ((event.body.indexOf("👺") >= 0 )) {
     return api.sendMessage(`${name} 👺👺👺👺👺👺`, threadID, messageID);
   };

    if ((event.body.indexOf("🔥") >= 0 )) {
     return api.sendMessage(`${name} 🔥🔥🔥🔥🔥🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💫") >= 0 )) {
     return api.sendMessage(`${name} 💫💫💫💫💫💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🙉") >= 0 )) {
     return api.sendMessage(`${name} Ye gandhi g wala bandar hai kia, bura mat suno wala.`, threadID, messageID);
   };

    if ((event.body.indexOf("🌟") >= 0 )) {
     return api.sendMessage(`${name} 🌟🌟🌟🌟🌟🌟`, threadID, messageID);
   };

    if ((event.body.indexOf("✨") >= 0 )) {
     return api.sendMessage(`${name} ✨✨✨`, threadID, messageID);
   };

    if ((event.body.indexOf("💥") >= 0 )) {
     return api.sendMessage(`${name} 💥💥💥💥💥💥`, threadID, messageID);
   };

    if ((event.body.indexOf("💯") >= 0 )) {
     return api.sendMessage(`${name} 💯💯💯`, threadID, messageID);
   };

    if ((event.body.indexOf("💢") >= 0 )) {
     return api.sendMessage(`${name} 💢💢💢`, threadID, messageID);
   };

    if ((event.body.indexOf("💨") >= 0 )) {
     return api.sendMessage(`${name} 💨💨💨💨💨💨`, threadID, messageID);
   };

    if ((event.body.indexOf("💦") >= 0 )) {
     return api.sendMessage(`${name} 💦💦💦💦💦💦`, threadID, messageID);
   };

    if ((event.body.indexOf("🫧") >= 0 )) {
     return api.sendMessage(`${name} 🫧🫧🫧🫧🫧🫧`, threadID, messageID);
   };

    if ((event.body.indexOf("💤") >= 0 )) {
     return api.sendMessage(`${name} 💤💤💤`, threadID, messageID);
   };

    if ((event.body.indexOf("🕳️") >= 0 )) {
     return api.sendMessage(`${name} 🕳️🕳️🕳️🕳️🕳️🕳️`, threadID, messageID);
   };

    if ((event.body.indexOf("🎉") >= 0 )) {
     return api.sendMessage(`${name} 🎉🎉🎉🎉🎉🎉`, threadID, messageID);
   };

    if ((event.body.indexOf("🎊") >= 0 )) {
     return api.sendMessage(`${name} 🎊🎊🎊🎊🎊🎊`, threadID, messageID);
   };

    if ((event.body.indexOf("🇵🇰") >= 0 )) {
     return api.sendMessage(`${name} Mera mulk meRa desh meRa ye watan 🇵🇰🇵🇰`, threadID, messageID);
   };

    if ((event.body.indexOf("🙉") >= 0 )) {
     return api.sendMessage(`${name} 🙉🙉🙉🙉🙉🙉`, threadID, messageID);
   };

    if ((event.body.indexOf("🙊") >= 0 )) {
     return api.sendMessage(`${name} 🙊🙊🙊🙊🙊🙊`, threadID, messageID);
   };

    if ((event.body.indexOf("😺") >= 0 )) {
     return api.sendMessage(`${name} 😺😺😺😺😺😺`, threadID, messageID);
   };

    if ((event.body.indexOf("😸") >= 0 )) {
     return api.sendMessage(`${name} 😸😸😸😸😸😸`, threadID, messageID);
   };

    if ((event.body.indexOf("😹") >= 0 )) {
     return api.sendMessage(`${name} kitni piyari hassi bilkul.... khair kase ho.. kia ho raha hai..😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😻") >= 0 )) {
     return api.sendMessage(`${name} 😻😻😻😻😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("😼") >= 0 )) {
     return api.sendMessage(`${name} 😼😼😼😼😼😼`, threadID, messageID);
   };

    if ((event.body.indexOf("😽") >= 0 )) {
     return api.sendMessage(`${name} 😽😽😽😽😽😽`, threadID, messageID);
   };

    if ((event.body.indexOf("🙀") >= 0 )) {
     return api.sendMessage(`${name} 🙀🙀🙀🙀🙀🙀`, threadID, messageID);
   };

    if ((event.body.indexOf("😿") >= 0 )) {
     return api.sendMessage(`${name} 😿😿😿😿😿😿`, threadID, messageID);
   };

    if ((event.body.indexOf("😾") >= 0 )) {
     return api.sendMessage(`${name} Ruk Tera Gussa me niklta hu.. 😾🔪`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️") >= 0 )) {
     return api.sendMessage(`${name} ❤️❤️❤️❤️❤️❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("🧡") >= 0 )) {
     return api.sendMessage(`${name} 🧡🧡🧡🧡🧡🧡`, threadID, messageID);
   };

    if ((event.body.indexOf("💛") >= 0 )) {
     return api.sendMessage(`${name} 💛💛💛💛💛💛`, threadID, messageID);
   };

    if ((event.body.indexOf("💚") >= 0 )) {
     return api.sendMessage(`${name} 💚💚💚💚💚💚`, threadID, messageID);
   };

    if ((event.body.indexOf("💙") >= 0 )) {
     return api.sendMessage(`${name} 💙💙💙💙💙💙`, threadID, messageID);
   };

    if ((event.body.indexOf("💜") >= 0 )) {
     return api.sendMessage(`${name} 💜💜💜💜💜💜`, threadID, messageID);
   };

    if ((event.body.indexOf("🤎") >= 0 )) {
     return api.sendMessage(`${name} 🤎🤎🤎🤎🤎🤎`, threadID, messageID);
   };

    if ((event.body.indexOf("🖤") >= 0 )) {
     return api.sendMessage(`${name} Hamne pehne hai kale rang ke kapre, usne meRe till ki tarha, or maine uske dil ki tarha..🖤👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤍") >= 0 )) {
     return api.sendMessage(`${name} 🤍🤍🤍🤍🤍🤍`, threadID, messageID);
   };

    if ((event.body.indexOf("♥️") >= 0 )) {
     return api.sendMessage(`${name} ♥️♥️♥️`, threadID, messageID);
   };

    if ((event.body.indexOf("💘") >= 0 )) {
     return api.sendMessage(`${name} 💘💘💘💘💘💘`, threadID, messageID);
   };

    if ((event.body.indexOf("💝") >= 0 )) {
     return api.sendMessage(`${name} 💝💝💝💝💝💝`, threadID, messageID);
   };

    if ((event.body.indexOf("💖") >= 0 )) {
     return api.sendMessage(`${name} 💖💖💖💖💖💖`, threadID, messageID);
   };

    if ((event.body.indexOf("💗") >= 0 )) {
     return api.sendMessage(`${name} 💗💗💗💗💗💗`, threadID, messageID);
   };

    if ((event.body.indexOf("💓") >= 0 )) {
     return api.sendMessage(`${name} 💓💓💓💓💓💓`, threadID, messageID);
   };

    if ((event.body.indexOf("💞") >= 0 )) {
     return api.sendMessage(`${name} 💞💞💞💞💞💞`, threadID, messageID);
   };

    if ((event.body.indexOf("💕") >= 0 )) {
     return api.sendMessage(`${name} 💕💕💕💕💕💕`, threadID, messageID);
   };

    if ((event.body.indexOf("💌") >= 0 )) {
     return api.sendMessage(`${name} 💌💌💌💌💌💌`, threadID, messageID);
   };

    if ((event.body.indexOf("💟") >= 0 )) {
     return api.sendMessage(`${name} 💟💟💟💟💟💟`, threadID, messageID);
   };

    if ((event.body.indexOf("❣️") >= 0 )) {
     return api.sendMessage(`${name} ❣️❣️❣️❣️`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🩹") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹`, threadID, messageID);
   };

    if ((event.body.indexOf("💔") >= 0 )) {
     return api.sendMessage(`${name} Ak bar nahi ye dil, so bar hai tuta 💔🤕 par shoq mohabbat ka ab tak chuta, muskuratei hue  chehre chupaye hain raz.. gehre yaha tw har chehra hai jutha, 😞🤵💔`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🔥") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💋") >= 0 )) {
     return api.sendMessage(`${name} 😘😘😘`, threadID, messageID);
   };

    if ((event.body.indexOf("🫂") >= 0 )) {
     return api.sendMessage(`${name} 🫂🫂🫂🫂🫂🫂`, threadID, messageID);
   };

    if ((event.body.indexOf("😸") >= 0 )) {
     return api.sendMessage(`${name} Tumhari hassi bhot Beautiful hai..😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("😀") >= 0 )) {
     return api.sendMessage(`${name} Jab tum hasne wale emoji send karti hona, tab aisa lagta hai ke jaise tumhri smil c zyada Beautiful kuch nahi hai..❤️👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😟") >= 0 )) {
     return api.sendMessage(`${name} Tumhe pata hai tum sad hote hue bilkul bhi axhe nahi lagte, jab tum haste ho tw tab bhot cute lagte ho, ☺️☺️`, threadID, messageID);
   };

    if ((event.body.indexOf("😍") >= 0 )) {
     return api.sendMessage(`${name} meRi ankh to bachi kadi vi kio haseena par tere emoji ki ankho ne mujhe fasal liya..😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("😒") >= 0 )) {
     return api.sendMessage(`${name} Aise na mujhe tum dekho sine Se laga lunga..😁🤗👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😼") >= 0 )) {
     return api.sendMessage(`${name} Agar tum aise muh bana ke dekhoge na tw, kasam c chumma phak ke marunga, tumhara muh sahi ho jyga, 😂🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("♥️") >= 0 )) {
     return api.sendMessage(`${name} Tumne apna dil mujhe de diya chalo kio nahi, me iska khayal apne wale c bhi zada khyal rakhunga, ❤️❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("😆") >= 0 )) {
     return api.sendMessage(`${name} Itti si hassi itti si Khushi itna sa tukra chand ka, 😁👍`, threadID, messageID);
   };
  
    if ((event.body.indexOf("🙃") >= 0 )) {
     return api.sendMessage(`${name} Tum face ulta kar ke dekho, ya sidha kar ke, dekho me tumhe husband material hi lagunga..! 🙂👍`, threadID, messageID);
   };

    if ((event.body.indexOf("🤗") >= 0 )) {
     return api.sendMessage(`${name} Yar maine na aj perfume nahi lagaya hai tw hug kabhi or din kRna, 😁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😁") >= 0 )) {
     return api.sendMessage(`${name} Is Piyari si muskaan ke piche me ho ya. Mtx ki flirting lines. 😁❤️👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙏") >= 0 )) {
     return api.sendMessage(`${name} Tere hath me meRa hath ho 😁 sari jannatei meRe sath ho,❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("😑") >= 0 )) {
     return api.sendMessage(`${name} Mujhe ye wala emoji passand nhi kiss wala send karo, 😁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👋") >= 0 )) {
     return api.sendMessage(`${name} Smart larka dekha nahi ke, Hi Hello kRne lag gai. 😁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😠") >= 0 )) {
     return api.sendMessage(`${name} U know tum gusse me or bhi zyada piyari lagti ho kisi ko btana mat. 😁❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("😡") >= 0 )) {
     return api.sendMessage(`${name} Shayad tumhe pata nhi hai ke jab kio larki gussa ho jati hai hai. tw wo or bhi beautiful 🥰 lagti hai. 🥰🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤓") >= 0 )) {
     return api.sendMessage(`${name} Nahi yar tum pe ye chashma suit nhi karta.. 🙄🙄`, threadID, messageID);
   };

    if ((event.body.indexOf("😻") >= 0 )) {
     return api.sendMessage(`${name} Ohho.. aj phir mujh pe piyar aya hai.. 😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("👃") >= 0 )) {
     return api.sendMessage(`${name} Tumhari itni lambi naak Q hai 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👂") >= 0 )) {
     return api.sendMessage(`${name} Tum apna kan khol ke meRi bat suna karo warna kisi din ak duga kan ke niche tumhre 4ro tabaq roshan ho jyge..😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🦻") >= 0 )) {
     return api.sendMessage(`${name} Ap Earring add c sunne ke liye behrre hue ho 😂😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☺️") >= 0 )) {
     return api.sendMessage(`${name} WOW 😲  tumne itni axhi smile karna kaha c sikha.. 😍😍`, threadID, messageID);
   };

    if ((event.body.indexOf("😝") >= 0 )) {
     return api.sendMessage(`${name} Thora aaram c haslo warna ghar wale tumhe pagal samjhege. 😜😜`, threadID, messageID);
   };

    if ((event.body.indexOf("🙊") >= 0 )) {
     return api.sendMessage(`${name} Ye gandhi g wala bandar hai kia, bura mat bolo wala. 🤣🤣👈`, threadID, messageID);
   };

    if ((event.body.indexOf("💦") >= 0 )) {
     return api.sendMessage(`${name} Tip tip barsa pani, pani ne aag lagani. 😉`, threadID, messageID);
   };

    if ((event.body.indexOf("💪") >= 0 )) {
     return api.sendMessage(`${name} Ye 22 kg ka hath jab kisi bande pe parhta hai tw banda uthta nahi uth jata hai. 💪💪`, threadID, messageID);
   };

    if ((event.body.indexOf("👍") >= 0 )) {
     return api.sendMessage(`${name} Mujhe pata hai u like me 🤣❤️👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤦") >= 0 )) {
     return api.sendMessage(`${name} Hath sar pe mat rakho, meRe samne rakho tabi me tumhare hath parh ke bta paunga future me apke kitne bache honge. 😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👏") >= 0 )) {
     return api.sendMessage(`${name} Tum taliya q baja rahe ho. 🤔👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🥴") >= 0 )) {
     return api.sendMessage(`${name} Is emoji ka face bilkul apke face se match hota ha..😂🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("🥵") >= 0 )) {
     return api.sendMessage(`${name} Tumhe dekhte hai hm apni nazre kar ke tirchi, bola tha na spicy mat khao ab lag gai na emoji ko mirchi. 🤣🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("😭") >= 0 )) {
     return api.sendMessage(`${name} Tum rote time cute nhi lagti, smile kia karo zyada piyari ho. 😍😍`, threadID, messageID);
   };

    if ((event.body.indexOf("🥰") >= 0 )) {
     return api.sendMessage(`${name} Tum emoji pe 3 dil laga ke send karogi tw, itna piyar me kase handle karunga. ❣️`, threadID, messageID);
   };

    if ((event.body.indexOf("🤫") >= 0 )) {
     return api.sendMessage(`${name} Tumhare emoji ne mujhe meRa bachpan yad dila diya, 😂 muh pe ungli kase, aise 🤫, 😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("🥲") >= 0 )) {
     return api.sendMessage(`${name} Tumhe kia lagta hai tum ak ankh ro ke dikhaogi. tw me pighal jaoga kia..😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("👅") >= 0 )) {
     return api.sendMessage(`${name} tumne center fruit dekh liya kia kase tumhari jeep laplpa rahi..😸😸`, threadID, messageID);
   };

    if ((event.body.indexOf("🤤") >= 0 )) {
     return api.sendMessage(`${name} Abhi hi Nikal raha hai tumhre muh se raal. thori bad kahogi diwana tera, mujhe hogya hai tumse piyar.. ❤️🙆🙆`, threadID, messageID);
   };

    if ((event.body.indexOf("😅") >= 0 )) {
     return api.sendMessage(`${name} Itna Sochti ho ke tumhare sar pe aa jata hai pani, Chalo mujh pe hi luta do apni jawani.. 🫣🫣😅`, threadID, messageID);
   };

    if ((event.body.indexOf("🤮") >= 0 )) {
     return api.sendMessage(`${name} Itna bhi ganda nhi hu, cute ho piyara hu, bana lo apna banda.. 😏🤭😛`, threadID, messageID);
   };

    if ((event.body.indexOf("🫴") >= 0 )) {
     return api.sendMessage(`${name} Ham tw apni jan apni hatali pe lekar ghum rahe hai, par kia kare kio kambakhat leti hi nahi.. 😇✨🙌`, threadID, messageID);
   };

    if ((event.body.indexOf("😶") >= 0 )) {
     return api.sendMessage(`${name} Aise Chup mat raho apna muh khol do. are kuch nahi tw i love you hi bol do.. 😇✨`, threadID, messageID);
   };

    if ((event.body.indexOf("🫣") >= 0 )) {
     return api.sendMessage(`${name} Ye jo hatho ko apni ankho pe laga rahi ho, meRi jan meRe dil ke soye hue armaan jaga rahi ho. 🫣🫣`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️") >= 0 )) {
     return api.sendMessage(`${name} Lagti tw tm ho hi zahar, tumhare dil me hi hai meRa shaher, ❤️😹👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🧐") >= 0 )) {
     return api.sendMessage(`${name} Tumhari ankheein jise dhondh rahi na, main hi hon. wo kinara Chalo thk hai, lo tuta hua, 🧐 Chashma maine bhi pahen liya. ab lag raha hona piyara..😂🤣😹`, threadID, messageID);
   };

    if ((event.body.indexOf("😐") >= 0 )) {
     return api.sendMessage(`${name} Tumko nahi lagta tumhri ankheein 👀, bhot zada hi choti hai, 😶😂`, threadID, messageID);
   };

    if ((event.body.indexOf("🙂") >= 0 )) {
     return api.sendMessage(`${name} Ary Maine aisa knsa guhan kardiya, Feelings.ko nahi, me tumko apna samjhta hu, 🙂🙂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤨") >= 0 )) {
     return api.sendMessage(`${name} Suno Eyebrows uthane c axha hai. 😂 apne mobile me meRi open kar ke mujhe msg kar deti, bat age barh jati, 😛😹 `, threadID, messageID);
   };

    if ((event.body.indexOf("🤯") >= 0 )) {
     return api.sendMessage(`${name} Tumhara dimagh tumhri tango me hai kia, 😂 mujhe dikhte hi blast hone lagta hai,🤯😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😂🤣") >= 0 )) {
     return api.sendMessage(`${name} 😂🤣 Ye ansu nikal rahi hu ya apne ap nikal rahe hain.🤭🤭`, threadID, messageID);
   };

    if ((event.body.indexOf("🤣") >= 0 )) {
     return api.sendMessage(`${name} 😂🤣 Itna mat hasa karo na bar bar meRe hath tumhare, Gaalo ko touch karne ke liye larte hai, 😹😹👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😏") >= 0 )) {
     return api.sendMessage(`${name} 😏 Muh terha karne se kam nai banta ungli 😂 sidhi karni parhti hai.. 😛😛 `, threadID, messageID);
   };

    if ((event.body.indexOf("😴") >= 0 )) {
     return api.sendMessage(`${name} Sona itna sona hai, ak bat jan lo tumko meRi hona hai..👩‍❤️‍👨👩‍❤️‍👨`, threadID, messageID);
   };

    if ((event.body.indexOf("🥺") >= 0 )) {
     return api.sendMessage(`${name} Ankho.me bhar ke ansu kase kahu ke kitni lagti ho tum akdam dhaasu. 😍😍 `, threadID, messageID);
   };

    if ((event.body.indexOf("😉") >= 0 )) {
     return api.sendMessage(`${name} Kash ankh marna itna asan hota, tw lakho ankho wali meRe qadmoo me hoti.. 😇✨`, threadID, messageID);
   };

    if ((event.body.indexOf("🤏") >= 0 )) {
     return api.sendMessage(`${name} Itu 🤏🤏 si bhi yad nahi ati tumhe meRi. 😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😫") >= 0 )) {
     return api.sendMessage(`${name}  👉 Chikhne se tw bass awaaz aati hai, 😏 likin jab apna hath maroga tw teri aah uhh or rone ki awaaz aygi,.. ☠️🏴‍☠️`, threadID, messageID);
   };

    if ((event.body.indexOf("🖕") >= 0 )) {
     return api.sendMessage(`${name} Fuck uff 🥵😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙄") >= 0 )) {
     return api.sendMessage(`${name} 🙄 Ankhen bad me uthana phele dupata utha lo, 😂🤣 kabse tumhare hathon ka w8 kar raha hai. 😹😹`, threadID, messageID);
   };

    if ((event.body.indexOf("😛") >= 0 )) {
     return api.sendMessage(`${name} 😛 zuban andar kar lo nai tw bhot andar tak kRne lagunga. 😂🤣👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😂")
         >= 0 )) {
     return api.sendMessage(`${name} 😂 Apni hawas ko u na dikhao, pehle ankho se anso nikal rahe hain. isko chupao..😹😹`, threadID, messageID);
   };

    if ((event.body.indexOf("😁") >= 0 )) {
     return api.sendMessage(`${name} Jab nikalti ho tum apne 32 daat, tw meRa dil karta hai tham lu me tumhara hath..👫`, threadID, messageID);
   };
    if ((event.body.indexOf("👇") >= 0 )) {
     return api.sendMessage(`${name} Ungli mat kar, meRa shear jag gaya na tw cheer parh dega.. 🥵👅`, threadID, messageID);
   };

    if ((event.body.indexOf("🫵") >= 0 )) {
     return api.sendMessage(`${name} Ungli mat kar, ungli kRna buri bat hai 🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😹") >= 0 )) {
     return api.sendMessage(`${name} Tumhri Mummy Lagti Hai meRi Sasu, Tum Q Nikalti Ho Haste Hue Aanso.. 😂🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("🤳") >= 0 )) {
     return api.sendMessage(`${name} Akele akele selfie late hue sharam nahi ati tumhe,😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙈") >= 0 )) {
     return api.sendMessage(`${name} Jab bhi tum apna face chupati hona, tw tumhe nahi pata tum kitna piyar jatati ho.. 🥰🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😔") >= 0 )) {
     return api.sendMessage(`${name} Bacha Q ho ap udas, me hona apke pass.. 🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤔") >= 0 )) {
     return api.sendMessage(`${name} Sochna ak Qala hai, or meRi samne wali larki ak khubsurat bahla hai.🙈🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("😘") >= 0 )) {
     return api.sendMessage(`${name} Jeena ho jata hai mushkil jab tum nikal deti ho muh c ye 👉❤️ dil..`, threadID, messageID);
   };

    if ((event.body.indexOf("😚") >= 0 )) {
     return api.sendMessage(`${name} ak kis ke bad kia hota hai. 🤣👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤩") >= 0 )) {
     return api.sendMessage(`${name} wah me tw sabki ankho ka sitara hon,🙂`, threadID, messageID);
   };

    if ((event.body.indexOf("🤪") >= 0 )) {
     return api.sendMessage(`${name} Ye ajeeb-o-gareeb chehre mat bana😂 Cartoon 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("diwani") >= 0 )) {
     return api.sendMessage(`${name} jan hai meRi 🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("thank") >= 0 )) {
     return api.sendMessage(`${name} Me itna axha ho ke har kio meRi yareef kRta hai, 🥰🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("kia hall hai") >= 0 )) {
     return api.sendMessage(`${name} Me theak ho 𝑴𝑻𝑿 💚✨ ap kase ho owner, 🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("kase ho") >= 0 )) {
     return api.sendMessage(`${name} alhamdulillah u say 🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Koi hai") >= 0 )) {
     return api.sendMessage(`${name} G Me Ho Bolo. 🥰👈`, threadID, messageID);
   };

   mess = "{name}"

  if (event.body.indexOf("rajput") >= 0 || (event.body.indexOf("Rajput") >= 0)) {
    var msg = {
      body: `🔮${name}🔮\n\n𝗠𝗮𝘀𝘀𝗮𝗴𝗲💌 :- ${rand} \n\n                      ╔════•| ✿ |•════╗
                      🌹      𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿         🌹
                      ╚════•| ✿ |•════╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }