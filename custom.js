module.exports = async ({ api }) => {
  const logger = require('./utils/log')
  const configCustom = {
    autoRestart: {
      status: true,
      time: 1, //40 minutes
      note: 'To avoid problems, enable periodic bot restarts'
    },
    accpetPending: {
      status: true,    
      time: 30, //30 minutes
      note: 'Approve pending messages after a certain time'
    }
  }
  function autoRestart(config) {
    if(config.status) {
      setInterval(async () => {
        logger(`Start system reboot!`, "[ Auto Restart ]")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if(config.status) {
      setInterval(async () => {
          const list = [
              ...(await api.getThreadList(1, null, ['PENDING'])),
              ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list[0]) {    
              api.sendMessage('[ 𝗖𝗛𝗘𝗖𝗞 ] You have been approved for the queue. (This is an automated message.)', list[0].threadID);
          }
      }, config.time * 60 * 1000)
    }
  }
  autoRestart(configCustom.autoRestart)
  accpetPending(configCustom.accpetPending)
};
