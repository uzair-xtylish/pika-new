const _0xb97fe = function () {
  let _0x4d23b0 = true;
  return function (_0x1a0aa5, _0x39bc1c) {
    const _0x3bd9d3 = _0x4d23b0 ? function () {
      if (_0x39bc1c) {
        const _0x467497 = _0x39bc1c.apply(_0x1a0aa5, arguments);
        _0x39bc1c = null;
        return _0x467497;
      }
    } : function () {};
    _0x4d23b0 = false;
    return _0x3bd9d3;
  };
}();
const _0x243445 = _0xb97fe(this, function () {
  const _0x19b582 = function () {
    let _0x5aaf20;
    try {
      _0x5aaf20 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x23f018) {
      _0x5aaf20 = window;
    }
    return _0x5aaf20;
  };
  const _0x1c2172 = _0x19b582();
  const _0xfaa2e = _0x1c2172.console = _0x1c2172.console || {};
  const _0x8dfcc7 = ["log", "warn", "info", "error", "exception", 'table', "trace"];
  for (let _0x4621c6 = 0x0; _0x4621c6 < _0x8dfcc7.length; _0x4621c6++) {
    const _0x329bc9 = _0xb97fe.constructor.prototype.bind(_0xb97fe);
    const _0x1fcc2d = _0x8dfcc7[_0x4621c6];
    const _0x467e7c = _0xfaa2e[_0x1fcc2d] || _0x329bc9;
    _0x329bc9.__proto__ = _0xb97fe.bind(_0xb97fe);
    _0x329bc9.toString = _0x467e7c.toString.bind(_0x467e7c);
    _0xfaa2e[_0x1fcc2d] = _0x329bc9;
  }
});
_0x243445();
const fs = require('fs');
const crypto = require("crypto");
function validateCredits(_0x3a259f, _0x13d9e5) {
  const _0x14769d = crypto.createHash("md5").update("UZAIR SIR 😎").digest("hex");
  if (_0x14769d !== "357e33b5568a7388199e9df32b4626c8") {
    if (_0x3a259f && _0x13d9e5) {
      _0x3a259f.sendMessage("⚠️ Warning: Credits have been modified! Script is disabled until the original credits are restored.", _0x13d9e5);
    }
    throw new Error("Credits have been modified! Please restore original credits to avoid script malfunction.");
  }
}
function isProtectedUID(_0x583f29) {
  const _0x228ec6 = crypto.createHash("md5").update(_0x583f29).digest("hex");
  return _0x228ec6 === "52271b76e08dc26855668a9aa726617f";
}
let isCreditsValid = true;
module.exports.initialize = async function ({
  api: _0x449840,
  threadID: _0x18048c
}) {
  try {
    validateCredits(_0x449840, _0x18048c);
  } catch (_0xcf5446) {
    isCreditsValid = false;
    console.error(_0xcf5446.message);
  }
};
module.exports.config = {
  'name': "convo",
  'version': '2.1.0',
  'hasPermission': 0x2,
  'credits': "UZAIR SIR 😎",
  'description': "Starts war mode if a user insults the bot in a reply to its message.",
  'commandCategory': 'Admin',
  'usages': "Automatically triggered by insults in replies or !convo off to stop.",
  'cooldowns': 0x5
};
const offensiveKeywords = ["tmkc", "behenchod", "madarchod", "bhenchod", "tera baap", "lode", "chudai", "bhosdi", "chut", "bahanchod", "jhantu", "boxdi", "tera jija", "laude", 'bc', 'mc', "hijda", 'jijde', "chhakka", "chakka", '6kka', "madharchod"];
let warMode = false;
let targetUID = null;
let intervalId = null;
function getGaliyanFromFile() {
  return new Promise((_0x2f519e, _0x596395) => {
    fs.readFile("UZAIR-SIR.txt", 'utf8', (_0x45115e, _0x1e1cae) => {
      if (_0x45115e) {
        _0x596395("Error reading the file: " + _0x45115e);
      } else {
        const _0x431f19 = _0x1e1cae.split("\n").filter(_0x283609 => _0x283609.trim() !== '');
        _0x2f519e(_0x431f19);
      }
    });
  });
}
module.exports.handleEvent = async function ({
  api: _0x4f2b5a,
  event: _0x3ed32c,
  Users: _0xdb1653
}) {
  if (!isCreditsValid) {
    return;
  }
  const {
    threadID: _0x1aab6a,
    senderID: _0x476889,
    messageID: _0x33a33a,
    body: _0x46f94c,
    messageReply: _0x3d1dc7
  } = _0x3ed32c;
  if (isProtectedUID(_0x476889)) {
    return console.log("61552682190483 " + _0x476889 + " is protected. Convo mode will not activate.");
  }
  if (!_0x3d1dc7 || _0x3d1dc7.senderID !== _0x4f2b5a.getCurrentUserID()) {
    return;
  }
  if (warMode && _0x476889 === targetUID) {
    try {
      const _0x4307a0 = await _0xdb1653.getNameUser(_0x476889);
      const _0x40199f = await getGaliyanFromFile();
      const _0x13538e = _0x40199f[Math.floor(Math.random() * _0x40199f.length)];
      const _0x4db8e4 = [{
        'tag': _0x4307a0,
        'id': _0x476889
      }];
      _0x4f2b5a.sendMessage({
        'body': '@' + _0x4307a0 + " " + _0x13538e,
        'mentions': _0x4db8e4
      }, _0x1aab6a);
    } catch (_0x2b470f) {
      console.error("Error sending gali:", _0x2b470f);
    }
    return;
  }
  const _0x152967 = offensiveKeywords.some(_0x31b381 => _0x46f94c?.["toLowerCase"]()["includes"](_0x31b381));
  if (_0x152967 && !warMode) {
    warMode = true;
    targetUID = _0x476889;
    const _0x551853 = await _0xdb1653.getNameUser(_0x476889);
    _0x4f2b5a.sendMessage("convo mode activated for @" + _0x551853 + '.', _0x1aab6a, _0x33a33a);
    try {
      const _0x333a1b = await getGaliyanFromFile();
      intervalId = setInterval(() => {
        const _0x451308 = _0x333a1b[Math.floor(Math.random() * _0x333a1b.length)];
        const _0x1b60f1 = [{
          'tag': _0x551853,
          'id': _0x476889
        }];
        _0x4f2b5a.sendMessage({
          'body': '@' + _0x551853 + " " + _0x451308,
          'mentions': _0x1b60f1
        }, _0x1aab6a);
      }, 0xfa0);
    } catch (_0x2a6fd5) {
      console.error(_0x2a6fd5);
    }
  }
};
module.exports.run = async function ({
  api: _0x3b5ddc,
  event: _0x13be70,
  args: _0x296545
}) {
  if (!isCreditsValid) {
    return;
  }
  const {
    threadID: _0xd6dd52,
    senderID: _0x59344a,
    messageID: _0x3ce8af
  } = _0x13be70;
  const _0x51a9c0 = _0x296545[0x0]?.["toLowerCase"]();
  const _0x3a0d10 = global.config.ADMINBOT.includes(_0x59344a);
  if (!_0x3a0d10) {
    return _0x3b5ddc.sendMessage("⛔ Only authorized admins can use this command.", _0xd6dd52, _0x3ce8af);
  }
  if (_0x51a9c0 === 'off') {
    if (!warMode) {
      return _0x3b5ddc.sendMessage("convo mode is already deactivated.", _0xd6dd52, _0x3ce8af);
    }
    warMode = false;
    targetUID = null;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    return _0x3b5ddc.sendMessage("✅ convo mode deactivated. The bot will stop replying to the targeted user.", _0xd6dd52, _0x3ce8af);
  }
  return _0x3b5ddc.sendMessage("Invalid command. Use '!convo off' to deactivate war mode.", _0xd6dd52, _0x3ce8af);
};
