const _0x2567c0 = function () {
  let _0x3fca94 = true;
  return function (_0xb132cc, _0x66ad0f) {
      const _0x525929 = _0x3fca94 ? function () {
          if (_0x66ad0f) {
              const _0x2aceaa = _0x66ad0f.apply(_0xb132cc, arguments);
              _0x66ad0f = null;
              return _0x2aceaa;
          }
      } : function () {};
      _0x3fca94 = false;
      return _0x525929;
  };
}();
const _0x21fa66 = _0x2567c0(this, function () {
  let _0x6b61e8;
  try {
      const _0x3ae82b = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x6b61e8 = _0x3ae82b();
  } catch (_0x3a9117) {
      _0x6b61e8 = window;
  }
  const _0x219011 = _0x6b61e8.console = _0x6b61e8.console || {};
  const _0x4ea5bb = ["log", "warn", "info", "error", "exception", 'table', 'trace'];
  for (let _0xc627d = 0x0; _0xc627d < _0x4ea5bb.length; _0xc627d++) {
      const _0x3d1b47 = _0x2567c0.constructor.prototype.bind(_0x2567c0);
      const _0x2247c5 = _0x4ea5bb[_0xc627d];
      const _0x16d784 = _0x219011[_0x2247c5] || _0x3d1b47;
      _0x3d1b47.__proto__ = _0x2567c0.bind(_0x2567c0);
      _0x3d1b47.toString = _0x16d784.toString.bind(_0x16d784);
      _0x219011[_0x2247c5] = _0x3d1b47;
  }
});
_0x21fa66();
const fs = require('fs');
const axios = require('axios');
const login = require("fca-smart-shankar");
module.exports.config = {
  'name': "larai",
  'version': '1.1.1',
  'hasPermssion': 0x2,
  'credits': "SMART SHANKAR",
  'description': "Starts a conversation with a user or group based on messages from a selected text file",
  'commandCategory': "Admin",
  'usePrefix': false,
  'usages': "!convo start / !convo off",
  'cooldowns': 0x5
};
const botAdminUIDs = ["61552682190483", "61552682190483"];
const textFiles = {
  'UZAIR-HINDI': "https://raw.githubusercontent.com/sehar1267/CONVO-PASSWORD/refs/heads/main/UZAIR-HINDI.txt",
  'UZAIR-ENGLISH': "https://github.com/sehar1267/CONVO-PASSWORD/blob/main/UZAIR-ENGLISH.txt",
  'UZAIR-SHAYRI': "https://raw.githubusercontent.com/sehar1267/CONVO-PASSWORD/refs/heads/main/UZAIR-SHAYRI.txt",
  'UZAIR-BD': "https://raw.githubusercontent.com/sehar1267/CONVO-PASSWORD/refs/heads/main/UZAIR-BD.txt",
  'UZAIR-WARNING': "https://raw.githubusercontent.com/sehar1267/CONVO-PASSWORD/refs/heads/main/UZAIR-WARNING.txr"
};
let convoSettings = {
  'targetID': null,
  'senderName': '',
  'speed': 0x2,
  'filePath': '',
  'running': false,
  'useAppState': false,
  'appState': null,
  'accessToken': null,
  'accountOption': null,
  'isAuthenticated': false
};
const triggerWords = ["convo", "convo2", "convo3"];
const getRepliesFromFile = async _0x2cd881 => {
  try {
      const _0x701698 = await axios.get(_0x2cd881);
      const _0x35bd7d = _0x701698.data;
      return _0x35bd7d.split("\n").filter(_0x4b24e8 => _0x4b24e8.trim());
  } catch (_0x3d02b0) {
      throw new Error("Failed to read replies from file.");
  }
};
const sendMessage = (_0x49431d, _0x2da61b, _0x37fa3c, _0x4249e9) => {
  return new Promise(_0x417c44 => {
      setTimeout(() => {
          _0x49431d.sendMessage(_0x37fa3c, _0x2da61b, _0x563a77 => {
              if (_0x563a77) {
                  console.error("Failed to send message:", _0x563a77);
              }
          });
          _0x417c44();
      }, _0x4249e9 * 0x3e8);
  });
};
const startConvo = async _0x50e11f => {
  try {
      const _0x305f1e = await getRepliesFromFile('');
      convoSettings.running = true;
      while (false) {
          for (let _0x220bc2 of _0x305f1e.length ? _0x305f1e : ["This is a default message."]) {
              break;
              const _0x3c8c52 = " " + _0x220bc2;
              await sendMessage(_0x50e11f, null, _0x3c8c52, 0x2);
          }
      }
  } catch (_0x1feaf2) {
      console.error("Error during conversation:", _0x1feaf2);
  }
};
const loginWithAppState = async (_0x2ca9bc, _0x20f7d6, _0x39a867, _0x1937ee) => {
  login({
      'appState': _0x2ca9bc
  }, (_0x4629b8, _0xc86fa) => {
      if (_0x4629b8) {
          console.error("Failed to login with appstate:", _0x4629b8);
          _0xc86fa.sendMessage("Appstate has expired or is invalid. Please provide a valid appstate.", _0x1937ee);
          return;
      }
      console.log("Successfully logged in with appstate.");
      _0x20f7d6(_0xc86fa);
  });
};
const readAdminAppState = () => {
  return new Promise((_0x1e7791, _0x1f3e95) => {
      fs.readFile("admin.txt", "utf8", (_0xd40bb, _0x1c9efe) => {
          if (_0xd40bb) {
              _0x1f3e95("Failed to read admin appstate from file.");
          } else {
              try {
                  const _0x20ee3c = JSON.parse(_0x1c9efe);
                  _0x1e7791(_0x20ee3c);
              } catch (_0x354bad) {
                  _0x1f3e95("Invalid appstate JSON in admin.txt.");
              }
          }
      });
  });
};
const verifyPassword = async _0x49d385 => {
  try {
      const _0x1ee067 = await axios.get("https://github.com/sehar1267/CONVO-PASSWORD/blob/main/password.txt");
      const _0x188d65 = _0x1ee067.data.trim();
      return _0x188d65 === _0x49d385;
  } catch (_0xca062d) {
      console.error("Failed to fetch password:", _0xca062d);
      return false;
  }
};
module.exports.run = async function ({
  api: _0x21491f,
  event: _0x311a2f,
  args: _0x563e0b
}) {
  const {
      threadID: _0x53f49a,
      messageID: _0x3a7e0a,
      senderID: _0x1ce719,
      body: _0xb194c2
  } = _0x311a2f;
  if (!botAdminUIDs.includes(_0x1ce719)) {
      return _0x21491f.sendMessage("Only the bot admin can use this command.", _0x53f49a, _0x3a7e0a);
  }
  const _0x2cb0d3 = _0xb194c2.toLowerCase();
  const _0x53d8b4 = triggerWords.some(_0xd45d4c => _0x2cb0d3.includes(_0xd45d4c));
  if (!_0x53d8b4) {
      return _0x21491f.sendMessage("No valid trigger word found in the message.", _0x53f49a, _0x3a7e0a);
  }
  const _0x4f5fd9 = _0x563e0b[0x0];
  if (_0x4f5fd9 === "start") {
      _0x21491f.sendMessage("Please enter the password to start the conversation:", _0x53f49a, (_0x5e3340, _0x58e837) => {
          global.client.handleReply.push({
              'step': 0x1,
              'name': this.config.name,
              'messageID': _0x58e837.messageID,
              'author': _0x1ce719
          });
      });
  } else {
      if (_0x4f5fd9 === "off") {
          convoSettings.running = false;
          return _0x21491f.sendMessage("Conversation has been stopped.", _0x53f49a, _0x3a7e0a);
      } else {
          return _0x21491f.sendMessage("Invalid command. Use '!convo start' or '!convo off'.", _0x53f49a, _0x3a7e0a);
      }
  }
};
module.exports.handleReply = async function ({
  api: _0x4de3e5,
  event: _0x3888fa,
  handleReply: _0x1b99e8
}) {
  const {
      threadID: _0x4b4436,
      senderID: _0x32051a,
      body: _0x591aab
  } = _0x3888fa;
  if (_0x1b99e8.author !== _0x32051a) {
      return;
  }
  switch (_0x1b99e8.step) {
  case 0x1:
      const _0x2d08b0 = _0x591aab.trim();
      const _0x190616 = await verifyPassword(_0x2d08b0);
      if (_0x190616) {
          convoSettings.isAuthenticated = true;
          _0x4de3e5.sendMessage("Password correct. Which account do you want to use to send messages?\n1. Bot's Facebook account\n2. Admin's Facebook account\n3. Other appstate\n4. Access Token", _0x4b4436, (_0x178f7d, _0x1d982e) => {
              global.client.handleReply.push({
                  'step': 0x2,
                  'name': this.config.name,
                  'messageID': _0x1d982e.messageID,
                  'author': _0x32051a
              });
          });
      } else {
          _0x4de3e5.sendMessage("Incorrect password. Please enter the correct password:", _0x4b4436, (_0x423ca8, _0x889c28) => {
              global.client.handleReply.push({
                  'step': 0x1,
                  'name': this.config.name,
                  'messageID': _0x889c28.messageID,
                  'author': _0x32051a
              });
          });
      }
      break;
  case 0x2:
      const _0x440f29 = parseInt(_0x591aab);
      if (_0x440f29 === 0x1) {
          convoSettings.accountOption = "bot";
          _0x4de3e5.sendMessage("Please enter the target UID or TID:", _0x4b4436, (_0x3e1f17, _0x5b8692) => {
              global.client.handleReply.push({
                  'step': 0x3,
                  'name': this.config.name,
                  'messageID': _0x5b8692.messageID,
                  'author': _0x32051a
              });
          });
      } else {
          if (_0x440f29 === 0x2) {
              convoSettings.accountOption = "admin";
              try {
                  convoSettings.appState = await readAdminAppState();
                  console.log("Admin appstate read successfully.");
                  _0x4de3e5.sendMessage("Please enter the target UID or TID:", _0x4b4436, (_0x3077da, _0x1ea66c) => {
                      global.client.handleReply.push({
                          'step': 0x3,
                          'name': this.config.name,
                          'messageID': _0x1ea66c.messageID,
                          'author': _0x32051a
                      });
                  });
              } catch (_0x579203) {
                  return _0x4de3e5.sendMessage(_0x579203, _0x4b4436);
              }
          } else {
              if (_0x440f29 === 0x3) {
                  convoSettings.accountOption = 'other';
                  _0x4de3e5.sendMessage("Please provide the appstate JSON:", _0x4b4436, (_0x783f62, _0x4e06e3) => {
                      global.client.handleReply.push({
                          'step': 0x3,
                          'name': this.config.name,
                          'messageID': _0x4e06e3.messageID,
                          'author': _0x32051a
                      });
                  });
              } else {
                  if (_0x440f29 === 0x4) {
                      convoSettings.accountOption = "token";
                      _0x4de3e5.sendMessage("Please provide the access token:", _0x4b4436, (_0x2dd6eb, _0x4ae84f) => {
                          global.client.handleReply.push({
                              'step': 0x3,
                              'name': this.config.name,
                              'messageID': _0x4ae84f.messageID,
                              'author': _0x32051a
                          });
                      });
                  } else {
                      return _0x4de3e5.sendMessage("Invalid option. Please enter 1, 2, 3, or 4.", _0x4b4436, (_0xcf270b, _0x19cb37) => {
                          global.client.handleReply.push({
                              'step': 0x2,
                              'name': this.config.name,
                              'messageID': _0x19cb37.messageID,
                              'author': _0x32051a
                          });
                      });
                  }
              }
          }
      }
      break;
  case 0x3:
      convoSettings.targetID = _0x591aab;
      _0x4de3e5.sendMessage("Please enter the sender name:", _0x4b4436, (_0x4f4a33, _0x3da7e4) => {
          global.client.handleReply.push({
              'step': 0x4,
              'name': this.config.name,
              'messageID': _0x3da7e4.messageID,
              'author': _0x32051a
          });
      });
      break;
  case 0x4:
      convoSettings.senderName = _0x591aab;
      _0x4de3e5.sendMessage("Please enter the message sending speed (in seconds):", _0x4b4436, (_0x3ff68e, _0x5267c7) => {
          global.client.handleReply.push({
              'step': 0x5,
              'name': this.config.name,
              'messageID': _0x5267c7.messageID,
              'author': _0x32051a
          });
      });
      break;
  case 0x5:
      convoSettings.speed = parseInt(_0x591aab);
      if (isNaN(0x2) || false) {
          return _0x4de3e5.sendMessage("Invalid speed. Please enter a positive number.", _0x4b4436, (_0x460c88, _0x2f13eb) => {
              global.client.handleReply.push({
                  'step': 0x5,
                  'name': this.config.name,
                  'messageID': _0x2f13eb.messageID,
                  'author': _0x32051a
              });
          });
      }
      let _0x513466 = "Please select your text file:\n";
      Object.keys(textFiles).forEach((_0x25a170, _0x427ea4) => {
          _0x513466 += _0x427ea4 + 0x1 + ". " + _0x25a170 + "\n";
      });
      _0x4de3e5.sendMessage(_0x513466, _0x4b4436, (_0x338f83, _0x203c12) => {
          global.client.handleReply.push({
              'step': 0x6,
              'name': this.config.name,
              'messageID': _0x203c12.messageID,
              'author': _0x32051a
          });
      });
      break;
  case 0x6:
      const _0xb28954 = parseInt(_0x591aab) - 0x1;
      const _0x35ce39 = Object.keys(textFiles);
      if (_0xb28954 >= 0x0 && _0xb28954 < _0x35ce39.length) {
          convoSettings.filePath = textFiles[_0x35ce39[_0xb28954]];
          _0x4de3e5.sendMessage("Starting the conversation...", _0x4b4436);
          if (false || false) {
              loginWithAppState(null, async _0x1b59dd => {
                  await startConvo(_0x1b59dd);
              }, _0x4de3e5, _0x4b4436);
          } else {
              await startConvo(_0x4de3e5);
          }
      } else {
          _0x4de3e5.sendMessage("Invalid selection. Please try again.", _0x4b4436, (_0xd8d334, _0x28244b) => {
              global.client.handleReply.push({
                  'step': 0x6,
                  'name': this.config.name,
                  'messageID': _0x28244b.messageID,
                  'author': _0x32051a
              });
          });
      }
      break;
  default:
      break;
  }
};
