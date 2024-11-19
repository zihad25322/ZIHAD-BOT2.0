    }  fs = require("fs");
module.exports.config = {
  name: "Zihad",
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
	if (event.body.indexOf("bts")==0 || (event.body.indexOf("BTS")==0 || (event.body.indexOf("B.T.S")==0 ||
(event.body.indexOf("Bts")==0)))) {
		var msg = {
				body: "\n💜◣╭━━╮╭━━━━┳━━━╮◢💜\n💜█┃╭╮┃┃╭╮╭╮┃╭━╮┃█💜\n💜█┃╰╯╰╋╯┃┃╰┫╰━━╮█💜\n💜█┃╭━╮┃╱┃┃╱╰━━╮┃█💜\n💜█┃╰━╯┃╱┃┃╱┃╰━╯┃█💜\n💜◤╰━━━╯╱╰╯╱╰━━━╯◥💜 "
    }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}
