module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "owner",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/8MG28O0.jpeg"];
  
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗭𝗶𝗵𝗮𝗱\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 一 ɀỉꫝꪖᦔ ཐི༏ཋྀ\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗣𝗮𝗻𝗰𝗵𝗮𝗴𝗮𝗿𝗵 𝗗𝗵𝗮𝗸𝗮)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :(𝗕𝗵𝘂𝗮𝗽𝘂𝗿,𝗧𝗮𝗻𝗴𝗮𝗶𝗹)\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (𝟭𝟲+)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁\n𝗚𝗺𝗮𝗶𝗹        :  𝘇𝘃𝗮𝗶𝟬𝟳𝟱@gmail.𝗰𝗼𝗺\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+88𝟬𝟭𝟳𝟯𝟰𝟵𝟰𝟱𝟲𝟲𝟲𝟱\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : 𝗕𝗮𝗹 𝗖𝗮𝗹 𝘂𝘀𝗲 𝗸𝗼𝗿𝗶 𝗻𝗮\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/profile.php?id=100067540204855
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
