const { spawn } = require('child_process');
const fs = require('fs-extra');
const axios = require('axios');
const semver = require('semver');
const logger = require('./utils/log');
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const chalkercli = require('chalkercli');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 1000000;
const CFonts = require('cfonts');

/////////////////////////////////////////////////////////////
// Create website for dashboard / uptime //
/////////////////////////////////////////////////////////////
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿.html'));
});
app.listen(port);

/////////////////////////////////////////////////////////
//======= Create a bot to start and make it repeat =======//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ BEGIN ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => { 
        var x = 'codeExit'.replace('codeExit',codeExit); 
        if (codeExit == 1) return startBot("↺ Restarting...");
        else if (x.indexOf(2) == 0) { 
            await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000)); 
            startBot("Back in action ..."); 
        } 
        else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred.: " + JSON.stringify(error), "[ ERROR ]");
    });
};
/////////////////////////////////////////////////////////
//======= Create a bot to start and make it repeat =======//
/////////////////////////////////////////////////////////
const dec = (function () {
  let decsuccess = true
  return function (success, error) {
    const decdone = decsuccess ? function () {
          if (error) {
            const decerror = error.apply(success, arguments)
            return (error = null), decerror
          }
        } : function () {}
    return (decsuccess = false), decdone
  }
})();
(function () {
  dec(this, function () {
    const GETTOKEN = new RegExp('function *\\( *\\)'),
      TOKEN = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      datatoken = getdatatoken('init')
    if (!GETTOKEN.test(datatoken + 'chain') || !TOKEN.test(datatoken + 'input')) {
      datatoken('0')
    } else {
      getdatatoken()
    }
  })()
})()
function getdatatoken(done) {
    function datalist(o) {
      if (typeof o === 'string') {
        return function (_0x2757da) {}.constructor('while (true) {}').apply('counter')
      } else {
        ('' + o / o).length !== 1 || o % 20 === 0 ? function () { return true }.constructor('debugger').call('action') : function () { return false }.constructor('debugger').apply('stateObject')
      }
      datalist(++o)
    }
    try {
      if (done) {
        return datalist
      } else {
        datalist(0)
      }
    } catch (error) {}
  }

function startBot(message) {
    (message) ? logger(message, "[ UZAIR BOT ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Uzair boat started");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Uzair boat started");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred.: " + JSON.stringify(error), "[ ERROR ]");
    });
};

// INFO //

const rainbow2 = chalkercli.rainbow('━━━━━━━━━━━━━━━━[ UZAIR FILE ]━━━━━━━━━━━━━━━━━');
rainbow2.render();

CFonts.say('UZAIR MTX', {
    font: 'block',
    align: 'center',
    gradient: ['red', 'magenta']
})

//////// INFO SEVER code by Uzair ////////
function getIpInfo() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
        const rainbow = chalkercli.rainbow(`━━━━━━━━━━━━━━[ INFO SEVER USER ]━━━━━━━━━━━━━`);
rainbow.render();
            logger(data.ip, '| IP Address |');
            logger(data.hostname, '| Domain Name |')
            logger(data.country,'| Nation |');
            logger(data.city, '| City |');
            logger(data.org, '| Network |')
            logger('N/A (because this is the environment Node.js)', '| Browser |');
        })
        .catch(error => logger('Error:', error));
}
getIpInfo();

setTimeout(async function () {
  await new Promise((data) => setTimeout(data, 500))

  await new Promise((data) => setTimeout(data, 500))
logger("Uzair Bot loading system data...", "[ CHECK ]")

  startBot()
}, 70)
