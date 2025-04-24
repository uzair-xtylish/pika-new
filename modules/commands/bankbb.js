const chalk = require('chalk');
module.exports.config = {
    name: "bankbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "hammer scissors how many players",
    commandCategory: "Game",
    usages: "[create/join/leave/start/end]",
    cooldowns: 0
};
module.exports.onLoad = () => {
console.log(chalk.bold.hex("#FF00FF").bold("--SUCCESFULLY LOADED THE KEOBUABAO COMMAND--"));
  }
module.exports.handleEvent = async function ({
    api,
    event,
    Currencies
}) {
    const fs = require("fs-extra")
    const axios = require("axios")
    const {
        threadID,
        messageID,
        body,
        senderID
    } = event;
    if (!body) return;
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
    async function replace(item) {
        var bua = 'https://imgur.com/IiAhDRT.png',
    keo = 'https://imgur.com/9JIRw7Z.png',
    bao = 'https://imgur.com/1M9MlaV.png';
        if (item == "hammer") {
            var icon = "👊",
                path = "mokka";
            let img_bua = (await axios.get(bua, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bua, "utf-8"));
        }
        if (item == "drag") {
            var icon = "✌️",
                path = "keo";
            let img_keo = (await axios.get(keo, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_keo, "utf-8"));
        }
        if (item == "lnti") {
            var icon = "🖐️",
                path = "lanat";
            let img_bao = (await axios.get(bao, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bao, "utf-8"));
        }

        var imgKbb = [];
        imgKbb.push(fs.createReadStream(__dirname + `/cache/${path}.png`));
        var msg = {
            body: `» Result: ${icon}`,
            attachment: imgKbb
        }
        api.sendMessage(msg, threadID, messageID)
    }
    const typ = ['drag', 'hammer', 'lnti', 'keo', 'bua', 'lanat'];

    const item = typ[Math.floor(Math.random() * typ.length)];

    var ketqua = [item]
    const choosee = body.split(" ")

    if (typ.includes(choosee[0].toLowerCase()) == true) {
        if (!global.kbb) return
        const gameThread = global.kbb.get(threadID) || {};
        if (!gameThread) return;
        if (gameThread.start != true) return;
        if (!choosee[1]) return api.sendMessage('Please enter bet amount!', threadID, messageID);
        if (await checkMoney(senderID, choosee[1]) == false) return api.sendMessage('You dont have enough money to bet!', threadID, messageID)
        else {
            var playerGame = gameThread.player.length
            if (!gameThread.player.find(i => i.userID == senderID)) return;

            else {
                var s, q;
                var s = gameThread.player.findIndex(i => i.userID == senderID);
                var q = gameThread.player[s];
                if (q.choose.status == true) return api.sendMessage('⚠ Once youve chosen, you cant choose again!', threadID, messageID);
                else {
                    if (typ.includes(choosee[0].toLowerCase()) == true) {
                        gameThread.player.splice(s, 1);
                        gameThread.player.push({
                            name: q.name,
                            userID: senderID,
                            choose: {
                                status: true,
                                msg: choosee[0].toLowerCase(),
                                money: parseInt(choosee[1])
                            }
                        });
                        api.sendMessage(`👤 Player ${q.name} selected ${choosee[0].toLowerCase()} with bet level ${choosee[1]}$`, threadID, messageID);
                    }
                    var vv = 0,
                        vvv = gameThread.player.length;
                    for (var c of gameThread.player) {
                        if (c.choose.status == true) vv++;
                    }
                    if (vv == vvv) {
                        let gifKbb = (await axios.get('https://imgur.com/yEFri7a.gif', {
                            responseType: "arraybuffer"
                        })).data;
                        fs.writeFileSync(__dirname + `/cache/gifkbb.gif`, Buffer.from(gifKbb, "utf-8"));
                        var gifkbb = [];
                        gifkbb.push(fs.createReadStream(__dirname + `/cache/gifkbb.gif`));
                        var msg1 = {
                            body: "» Playing....",
                            attachment: gifkbb
                        }
                        api.sendMessage(msg1, threadID, async (error, info) => {
                            await new Promise(resolve => setTimeout(resolve, 3000));

                            api.unsendMessage(info.messageID);
                        }, messageID);
                        await new Promise(resolve => setTimeout(resolve, 7000));
                        await replace(item)
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        await checkWin(ketqua, gameThread);
                    } else return;
                }
            }
        }
    }
    async function checkWin(ketqua, gameThread) {
        var checkwin = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == true)
        var checklose = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == false)
        var msg;
        if(checkwin.length != 0) {
          msg = '[====WINNERS====]\n'
          for (let i of checkwin) {
              var checkItem = ketqua.filter(a => a == i.choose.msg)
              console.log(checkItem)
              await Currencies.increaseMoney(i.userID, parseInt(i.choose.money) * checkItem.length);
              msg += `👤: ${i.name} đặt ${i.choose.msg} + ${parseInt(i.choose.money) * checkItem.length}$\n`
          }
        }
        if(checklose.length != 0) {
          msg += '\n[====LOSERS====]\n'
          for (let i of checklose) {
              await Currencies.decreaseMoney(i.userID, parseInt(i.choose.money));
              msg += `👤: ${i.name} đặt ${i.choose.msg} - ${i.choose.money}$\n`
          }
        }
        global.kbb.delete(threadID);
        return api.sendMessage(msg, threadID, messageID);
    }
}
module.exports.run = async function ({ api, event,args,Threads,Users,Currencies,getText}) {
    try {
        if (!global.kbb) global.kbb = new Map();
        const {
            threadID,
            messageID,
            senderID
        } = event;

    if (args.length == 0) return api.sendMessage(`===[ ONE TWO THREE ]===\n» create/new/-c: Create table\n» join/-j: Join\n» leave/-l: Leave the table\n» start/-s: Begin\n» end/-e: End`, threadID, messageID);
        var gameThread = global.kbb.get(threadID);
        switch (args[0]) {
        case "create":
        case "new":
        case "-c": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('Requires at least $50 to participate!', threadID, messageID)
            if (global.kbb.has(threadID)) return api.sendMessage('⚠ This group has opened the game table!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            global.kbb.set(threadID, {
                box: threadID,
                start: false,
                author: senderID,
                player: [{
                    name,
                    userID: senderID,
                    choose: {
                        status: false,
                        msg: null,
                        money: null
                    }
                }]
            });
            return api.sendMessage('Successfully created a table\nkbb join to play', threadID, messageID);
            break;
        }
        case "join":
        case "-j": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('Requires at least $50 to participate!', threadID, messageID)
            if (!global.kbb.has(threadID)) return api.sendMessage('There is no rock-paper-scissors to participate in!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('The game has already started!', threadID, messageID);
            if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Youve participated before!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            gameThread.player.push({
                name,
                userID: senderID,
                choose: {
                    stats: false,
                    msg: null,
                    money: null
                }
            });
            global.kbb.set(threadID, gameThread);
            return api.sendMessage('Participate successfully!', threadID, messageID);
            break;
        }
        case "leave":
        case "-l'": {
            if (!global.kbb.has(threadID)) return api.sendMessage('There is no rock-paper-scissors to leave!', threadID, messageID);
            if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('You havent joined yet so you cant leave!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('The game has already started, its a bit late!', threadID, messageID);
            if (gameThread.author == senderID) {
                global.kbb.delete(threadID);
                var name = await Users.getNameUser(senderID);
                return api.sendMessage('⚠ The game table has been started and cannot be left!', threadID, messageID);
            } else {
                gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
                global.kbb.set(threadID, gameThread);
                var name = await Users.getNameUser(senderID);
                api.sendMessage('Leave successfully!', threadID, messageID);
                return api.sendMessage(`${name} has left, the number of remaining players is ${gameThread.player.length}`, threadID);
            }
            break;
        }
        case "start":
        case "-s": {
            if (!gameThread) return api.sendMessage('Theres no rock-paper-scissors to start with!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('Only the creator can start!', threadID, messageID);
            if (gameThread.player.length <= 1) return api.sendMessage('Number of players must be 2 or more!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('The game had started before', threadID, messageID);
            gameThread.start = true;
            global.kbb.set(threadID, gameThread);
            return api.sendMessage(`Successful start, number of players is ${gameThread.player.length}\nPlease enter [scissors/hammer/paper] [bet amount]`, threadID);
            break;
        }
        case "end":
        case "-e": {
            if (!gameThread) return api.sendMessage('There is no rock-paper-scissors to end it!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('Only the creator can end!', threadID, messageID);
            global.kbb.delete(threadID);
            return api.sendMessage(`Ended successfully`, threadID, messageID);
            break;
        }break;


        }
    } catch (err) {
        return api.sendMessage(getText("error", err), event.threadID, event.messageID);
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
};