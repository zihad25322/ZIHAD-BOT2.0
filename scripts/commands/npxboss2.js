 fs = require("fs");
module.exports.config = {
  name: "RANA",
  version: "2.0.0",
  permission: 0,
  credits: "nayon",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
	if (event.body.indexOf("জিহাদ")==0 || (event.body.indexOf("Zihad")==0 || (event.body.indexOf("Jihad")==0 ||
(event.body.indexOf("zihad")==0)))) {
		var msg = {
				body: "╭┉┉┅┄┄•◦ೋ•◦❥•◦ೋ\n  𝐌𝐎𝐇𝐀𝐌𝐌𝐄𝐃 𝐙𝐈𝐇𝐀𝐃\n•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉╯⠀"
    }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}
