module.exports = function ({ api, models, Users, Threads, Currencies }) {
    const logger = require("../../utils/log.js");
    return async function ({ event }) {
        const { threadID, logMessageType, logMessageData } = event;
        const { setData, getData, delData, createData } = Threads;
        try {
            let dataThread = (await getData(threadID)).threadInfo;
            switch (logMessageType) {
                case "log:thread-admins": {
                    if (logMessageData.ADMIN_EVENT == "add_admin") {
                        dataThread.adminIDs.push({
                            id: logMessageData.TARGET_ID
                        })
                    } else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                        dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    }
                    logger('Refresh admin list in group ' + threadID, 'UPDATE DATA')
                    await setData(threadID, { threadInfo: dataThread });
                    break;
                }
                case "log:thread-name": {
                    logger('Update name in group ' + threadID, 'UPDATE DATA')
                    dataThread.threadName = event.logMessageData.name
                    await setData(threadID, { threadInfo: dataThread });
                    break;
                }
                case "log:subscribe": {
                    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        try {
                            require('./handleCreateDatabase.js');
                        } catch(e) {
                            console.log(e)
                        }
                        return;
                    }
                    break;
                }
                
                case 'log:unsubscribe': {
                    if (logMessageData.leftParticipantFbId == api.getCurrentUserID()) {
                        logger('Perform group data deletion ' + threadID, 'DELETE DATA')
                        const index = global.data.allThreadID.findIndex(item => item == threadID);
                        global.data.allThreadID.splice(index, 1);
                        await delData(threadID);
                        return
                    } else {
                        const index = dataThread.participantIDs.findIndex(item => item == logMessageData.leftParticipantFbId);
                        dataThread.participantIDs.splice(index, 1);
                        if (dataThread.adminIDs.find(i => i.id == logMessageData.leftParticipantFbId)) {
                            dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.leftParticipantFbId);
                        }
                        logger('Perform user deletion ' + logMessageData.leftParticipantFbId, 'DELETE DATA')
                        await setData(threadID, { threadInfo: dataThread });
                    }
                    break;
                }
            }
        } catch (e) {
            console.log('An error occurred updating data.: ' + e)
        }
        return;
    };
}
