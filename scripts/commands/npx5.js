module.exports.config = {
  name: "😊",
  version: "1.0.0",
  permission: 0,
  credits: "MR-IMRAN",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🥳",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("🥳") == 0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = ["https://drive.google.com/uc?id=1jlQE4IaFPe_lqgoCnYXzbhYVoc9_jSZG"];
    var callback = () => api.sendMessage({
      body: `__🙂🥀𝘽𝙚𝙨𝙩 𝙢𝙤𝙩𝙞𝙫𝙖𝙩𝙚𝙙 𝙡𝙞𝙣𝙚 𝙞𝙣 𝙩𝙝𝙚 𝙬𝙝𝙤𝙡𝙚 𝙒𝙤𝙧𝙡𝙙>!😅✨🥺  \n 𝙏𝙝𝙞𝙣𝙠𝙞𝙣𝙜 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚__😇😞✨ \n ✨🍒উফফ লাইফে একটা রিয়েল মানুষ পাইলাম না ★-😅😞💔 \n\n  ✍️⎯͢⎯⃝🩵 রাৃঁনা্ৃঁ ⎯͢⎯⃝🩷`,
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
  if (typeof data["🫠"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
  else data["🤗"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😘"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
