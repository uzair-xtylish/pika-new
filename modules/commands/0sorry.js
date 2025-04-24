module.exports.config = {
    name: "sorry",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "uzairrajput",
    description: "Continuously tag the person you tagged for 5 times\nYou can call that person's soul",
    commandCategory: "group",
    usages: "sorry @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Hi baby are you mad? ", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("please accept my apology baby..🥺");
setTimeout(() => {a({body: "please for give me admin ji kìrâñ RajPööt..🙏🙏" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "I apologize, forgive me, kìrâñ RajPööt," + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "I Sincerely apologise" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "I deeply regret, sorry" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "I didn't mean that," + " " +  name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "It's my fault," + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: " it was  my fault" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "I am truly sorry for my words & actions," + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Sorry baby " + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "regret" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "I am awfully sorry." + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "*/kiss ur tight " + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "*/kiss ur forehead" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "I'm terribly/awfully sorry" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "*/kiss ur lips" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Sorry owner g" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "ab gussa na hue na" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "man jao na😭😭" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "itna bhi kia gussa?🥺 " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "gusse me bhi khubsurat lag rahi ho" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("man Jao warna warna me tumhri diwani ko le kar bagh jaoga")} , 90000);
setTimeout(() => {a({body: "gussa choro na ak smile kardo" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "manta hu galti hui hai maff kardo" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "meRa bacha sab c asha.." + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("tum hi mujhse rooth gaye tw 😔 kisse bat karo me 🥺 jee utha ho me tumse mil ke ☺️ tm jo ho tw hun me 💕 mujhse iss pal ho muh pheri 😕 phir bhi ho tum meRi ❤️ dekho nahi axha hota hai 🤦 itna chirhnaa 😤 chalo jane do 🥹 ab choro bhi ❤️ chalo jane do 🥹 ab choro bhi ❤️")} , 110000);



      }