module.exports.config = {
  name: "rana",
  version: "1.0.0",
  permission: 0,
  credits: "rana-Admin",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🤗",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("রানা")==0 || event.body.indexOf("Rana")==0 || event.body.indexOf("rana")==0 || event.body.indexOf("RANA")==0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = ["https://scontent.xx.fbcdn.net/v/t42.3356-2/458198349_8340762506001220_2949171914849267079_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=Kowf0uy41YoQ7kNvgHLigM9&_nc_ht=scontent.xx&_nc_gid=A01T0m4xuhSxIXcdAR5IfPx&oh=03_Q7cD1QGJf7Fk0nJYgwtKVVMvUGRvNrU3p8e4rzvmVeV81pC_sQ&oe=66DA86BD&dl=1"];
    var callback = () => api.sendMessage({
      body: `__আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ রে্ঁ কে্ঁউ্ঁ বু্ঁঝ্ঁতে্ঁই্ঁ পা্ঁর্ঁলো্ঁ না্ঁ 😅💔`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    const timeStart = Date.now();
    const PREFIX = config.PREFIX;
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🤗"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
  else data["🤗"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🤗"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
