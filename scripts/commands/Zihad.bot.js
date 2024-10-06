const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/nDyjx3G.jpeg','https://i.imgur.com/3LcmBR6.jpeg','https://i.imgur.com/Bfjzsd4.jpeg','https://i.imgur.com/KHmd1hl.jpeg','https://i.imgur.com/3CrvHRj.jpeg','https://i.imgur.com/HtjmaVD.jpeg','https://i.imgur.com/7J1mwa2.jpeg']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("😚")==0 || body.indexOf("bos")==0 || body.indexOf("jihad")==0 || body.indexOf("oi")==0 || body.indexOf("👍")==0 || body.indexOf("sona")==0 || body.indexOf("jan")==0 || body.indexOf("baby")==0 || body.indexOf("🥵")==0 || body.indexOf("admin")==0) {
		var msg = {
				body: "👅👄_কিরে খাবি আমার বসস জিহাদ কে .!🙈🥵",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🩷", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
			   }
