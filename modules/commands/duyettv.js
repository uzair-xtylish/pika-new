module.exports.config = {
  name: "duyettv",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "uzairrajput",
  description: "Browse Members In Approval List",
  commandCategory: "Group",
  usages: "duyettv",
  cooldowns: 0
}, module.exports.run = async function({
  args: e,
  event: a,
  api: s,
  Users: n,
  Threads: r
}) {
  var {
    userInfo: t,
    adminIDs: o
  } = await s.getThreadInfo(a.threadID);
  if (o = o.map((e => e.id)).some((e => e == s.getCurrentUserID()))) {
    const e = await s.getThreadInfo(a.threadID);
    let r = e.approvalQueue.length;
    var u = "";
    for (let a = 0; a < r; a++) {
      u += `[${a+1}].${await n.getNameUser(e.approvalQueue[a].requesterID)} - ${e.approvalQueue[a].requesterID}\n\n`
    }
    u += "→ Reply to this message to approve the user", s.sendMessage(`→ Approval waiting list\n\n${u}`, a.threadID, ((e, s) => global.client.handleReply.push({
      name: this.config.name,
      author: a.senderID,
      messageID: s.messageID,
      type: "reply"
    })))
  } else s.sendMessage("→ Administrator rights required! Please try again.", a.threadID)
}, module.exports.handleReply = async function({
  api: e,
  args: a,
  Users: s,
  handleReply: n,
  event: r,
  Threads: t
}) {
  const {
    threadID: o,
    messageID: u
  } = r;
  if ("reply" === n.type) {
    let a = (await e.getThreadInfo(r.threadID)).approvalQueue[parseInt(r.body)].requesterID;
    e.addUserToGroup(a, o), e.sendMessage(`→ Approved member to group !`, o, (() => e.unsendMessage(n.messageID)))
  }
};
