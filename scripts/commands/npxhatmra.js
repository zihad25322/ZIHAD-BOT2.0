const fs = require("fs");
module.exports.config = {
  name: "😘",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "Nayan", 
  description: "hihihihi",
  category: "no prefix",
  usages: "🥰",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const axios = require('axios')
  const vid = (
    await axios.get(
      'https://drive.google.com/file/d/1bfs8jry0oiW_X2HO3SSYinWSgmJHmKRh/view?usp=drivesdk',
      { responseType: 'stream' }
    )
  ).data;
  if (event.body.indexOf("jihad")==0 || event.body.indexOf("oi")==0 || event.body.indexOf("jan")==0 || event.body.indexOf("hi")==0) {
    var msg = {
        body: "~ আমার বস এর একটা গার্লফ্রেন্ড নাই..!!😭🥀",
        attachment: vid
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
