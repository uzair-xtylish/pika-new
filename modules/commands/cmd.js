module.exports.config = {
  name: "cmd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Manage/Control all bot modules",
  commandCategory: "System",
  usages: "[load/unload/loadAll/unloadAll/info] [module name]",
  cooldowns: 2,
  dependencies: {
      "fs-extra": "",
      "child_process": "",
      "path": ""
  }
};

const loadCommand = function ({ moduleList, threadID, messageID }) {

  const { execSync } = global.nodemodule['child_process'];
  const { writeFileSync, unlinkSync, readFileSync } = global.nodemodule['fs-extra'];
  const { join } = global.nodemodule['path'];
  const { configPath, mainPath, api } = global.client;
  const logger = require(mainPath + '/utils/log');

  var errorList = [];
  delete require['resolve'][require['resolve'](configPath)];
  var configValue = require(configPath);
  writeFileSync(configPath + '.temp', JSON.stringify(configValue, null, 2), 'utf8');
  for (const nameModule of moduleList) {
      try {
          const dirModule = __dirname + '/' + nameModule + '.js';
          delete require['cache'][require['resolve'](dirModule)];
          const command = require(dirModule);
          global.client.commands.delete(nameModule);
          if (!command.config || !command.run || !command.config.commandCategory) 
              throw new Error('[ 𝗖𝗠𝗗 ] - Module is not in correct format.!');
          global.client['eventRegistered'] = global.client['eventRegistered']['filter'](info => info != command.config.name);
          if (command.config.dependencies && typeof command.config.dependencies == 'object') {
              const listPackage = JSON.parse(readFileSync('./package.json')).dependencies,
                  listbuiltinModules = require('module')['builtinModules'];
              for (const packageName in command.config.dependencies) {
                  var tryLoadCount = 0,
                      loadSuccess = ![],
                      error;
                  const moduleDir = join(global.client.mainPath, 'nodemodules', 'node_modules', packageName);
                  try {
                      if (listPackage.hasOwnProperty(packageName) || listbuiltinModules.includes(packageName)) global.nodemodule[packageName] = require(packageName);
                      else global.nodemodule[packageName] = require(moduleDir);
                  } catch {
                      logger.loader('[ 𝗖𝗠𝗗 ] - Package not found ' + packageName + ' support for command ' + command.config.name+ 'proceed with installation...', 'warn');
                      const insPack = {};
                      insPack.stdio = 'inherit';
                      insPack.env = process.env ;
                      insPack.shell = !![];
                      insPack.cwd = join(global.client.mainPath,'nodemodules')
                      execSync('npm --package-lock false --save install ' + packageName + (command.config.dependencies[packageName] == '*' || command.config.dependencies[packageName] == '' ? '' : '@' + command.config.dependencies[packageName]), insPack);
                      for (tryLoadCount = 1; tryLoadCount <= 3; tryLoadCount++) {
                          require['cache'] = {};
                          try {
                              if (listPackage.hasOwnProperty(packageName) || listbuiltinModules.includes(packageName)) global.nodemodule[packageName] = require(packageName);
                              else global.nodemodule[packageName] = require(moduleDir);
                              loadSuccess = !![];
                              break;
                          } catch (erorr) {
                              error = erorr;
                          }
                          if (loadSuccess || !error) break;
                      }
                      if (!loadSuccess || error) throw 'Unable to download package ' + packageName + (' give command ') + command.config.name +', error: ' + error + ' ' + error['stack'];
                  }
              }
              logger.loader('[ 𝗖𝗠𝗗 ] -  Successfully downloaded all packages for the command' + command.config.name);
          }
          if (command.config.envConfig && typeof command.config.envConfig == 'Object') try {
              for (const [key, value] of Object['entries'](command.config.envConfig)) {
                  if (typeof global.configModule[command.config.name] == undefined) 
                      global.configModule[command.config.name] = {};
                  if (typeof configValue[command.config.name] == undefined) 
                      configValue[command.config.name] = {};
                  if (typeof configValue[command.config.name][key] !== undefined) 
                      global.configModule[command.config.name][key] = configValue[command.config.name][key];
                  else global.configModule[command.config.name][key] = value || '';
                  if (typeof configValue[command.config.name][key] == undefined) 
                      configValue[command.config.name][key] = value || '';
              }
              logger.loader('Loaded config' + ' ' + command.config.name);
          } catch (error) {
              throw new Error('[ 𝗖𝗠𝗗 ] » Unable to load config module, Error: ' + JSON.stringify(error));
          }
          if (command['onLoad']) try {
              const onLoads = {};
              onLoads['configValue'] = configValue;
              command['onLoad'](onLoads);
          } catch (error) {
              throw new Error('[ 𝗖𝗠𝗗 ] » Unable to onLoad module, Error: ' + JSON.stringify(error), 'error');
          }
          if (command.handleEvent) global.client.eventRegistered.push(command.config.name);
          (global.config.commandDisabled.includes(nameModule + '.js') || configValue.commandDisabled.includes(nameModule + '.js')) 
          && (configValue.commandDisabled.splice(configValue.commandDisabled.indexOf(nameModule + '.js'), 1),
          global.config.commandDisabled.splice(global.config.commandDisabled.indexOf(nameModule + '.js'), 1))
          global.client.commands.set(command.config.name, command)
          logger.loader('Loaded command ' + command.config.name + '!');
      } catch (error) {
          errorList.push('- ' + nameModule + ' reason:' + error + ' at ' + error['stack']);
      };
  }
  if (errorList.length != 0) api.sendMessage('[ 𝗖𝗠𝗗 ] » The commands that just crashed while the system was loading: ' + errorList.join(' '), threadID, messageID);
  api.sendMessage('[ 𝗖𝗠𝗗 ] » 𝐀𝐛𝐡𝐢 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐇𝐨𝐠𝐲𝐚 𝐇𝐚𝐢 ' + (moduleList.length - errorList.length) +' 𝐇𝐮𝐤𝐮𝐦\n━━━━━━━━━━━━━━━━\n[ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 ] » 𝗺𝗼𝗱𝘂𝗹𝗲𝘀 ('+moduleList.join(', ') + '.js) 💓', threadID, messageID) 
  writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8')
  unlinkSync(configPath + '.temp');
  return;
}

const unloadModule = function ({ moduleList, threadID, messageID }) {
  const { writeFileSync, unlinkSync } = global.nodemodule["fs-extra"];
  const { configPath, mainPath, api } = global.client;
  const logger = require(mainPath + "/utils/log").loader;

  delete require.cache[require.resolve(configPath)];
  var configValue = require(configPath);
  writeFileSync(configPath + ".temp", JSON.stringify(configValue, null, 4), 'utf8');

  for (const nameModule of moduleList) {
      global.client.commands.delete(nameModule);
      global.client.eventRegistered = global.client.eventRegistered.filter(item => item !== nameModule);
      configValue["commandDisabled"].push(`${nameModule}.js`);
      global.config["commandDisabled"].push(`${nameModule}.js`);
      logger(`Unloaded command ${nameModule}!`);
  }

  writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8');
  unlinkSync(configPath + ".temp");

  return api.sendMessage(`[ 𝗖𝗠𝗗 ] » Canceled successfully ${moduleList.length} command ✨`, threadID, messageID);
}

module.exports.run = function ({ event, args, api }) {
   const permission = ["61552682190483", "61552682190483"];
    if (!permission.includes(event.senderID)) return api.sendMessage("[ 𝐔𝐙𝐀𝐈𝐑 𝐑𝐀𝐉𝐏𝐔𝐓 ] 𝐘𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐒𝐢𝐫𝐟 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐔𝐳𝐚𝐢𝐫 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑𝐒 𝐔𝐬𝐞 𝐊𝐚𝐫 𝐒𝐚𝐤𝐭𝐞 𝐇𝐚𝐢𝐧 💻", event.threadID, event.messageID);
  const { readdirSync } = global.nodemodule["fs-extra"];
  const { threadID, messageID } = event;

  var moduleList = args.splice(1, args.length);

  switch (args[0]) {
    case "count":
    case "c": {
    let commands = client.commands.values();
    let infoCommand = "";
    api.sendMessage("[ 𝗖𝗠𝗗 ] - Currently includes " + client.commands.size + " available commands 💌"+ infoCommand, event.threadID, event.messageID);
    break;
  }
      case "load":
      case "l": {
          if (moduleList.length == 0) return api.sendMessage("[ 𝗖𝗠𝗗 ] » Module name cannot be left blank ⚠️", threadID, messageID);
          else return loadCommand({ moduleList, threadID, messageID });
      }
      case "unload":
      case "ul": {
          if (moduleList.length == 0) return api.sendMessage("[ 𝗖𝗠𝗗 ] » Module name cannot be left blank ⚠️", threadID, messageID);
          else return unloadModule({ moduleList, threadID, messageID });
      }
      case "loadAll":
      case "all":  {
          moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example'));
          moduleList = moduleList.map(item => "item.replace(/\.js/g, ""));
          return loadCommand({ moduleList, threadID, messageID });
      }
      case "unloadAll":
      case "uall":  {
          moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example') && !file.includes("command"));
          moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
          return unloadModule({ moduleList, threadID, messageID });
      }
      case "info":
      case "i":  {
          const command = global.client.commands.get(moduleList.join("") || "");

          if (!command) return api.sendMessage("[ 𝗖𝗠𝗗 ] » The module you entered does not exist. ⚠️", threadID, messageID);"

          const { name, version, hasPermssion, credits, cooldowns, dependencies } = command.config;

          return api.sendMessage(
              "=== " + name.toUpperCase() + " ===\n" +
              "- Coded by: " + credits + "\n" +
              "- Version: " + version + "\n" +
              "- Request permissions: " + ((hasPermssion == 0) ? "User" : (hasPermssion == 1) ? "Admin" : "Bot Operator" ) + "\n" +
              "- Waiting time: " + cooldowns + " second(s)\n" +
              `- Required packages: ${(Object.keys(dependencies || {})).join(", ") || "Do not have"}`,
              threadID, messageID
          );
      }
      default: {
          return global.utils.throwError(this.config.name, threadID, messageID);
      }
  }
    }
