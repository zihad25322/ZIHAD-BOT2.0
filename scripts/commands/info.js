module.exports.config = {
    name: "zihad",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: false,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`∂σ ɳσƭ ƭɾµรƭ ƭɦε ɓσƭ σρεɾαƭσɾ
--------------------------------------------

ƒαcεɓσσҡ :🔪 Mohammad Jihad 🐰♨️


ɠεɳ∂εɾ :  জি্ঁহা্ঁদ্ঁ👀

αɠε :  17+🤨


ɾεℓαƭเσɳรɦเρ : SINGLE-!🐰💚


ωσɾҡ : รƭµ∂εɳƭ


🐰https://www.facebook.com/profile.php?id=100067540204855



🪬🪅ƭεℓεɠɾαɱ : 😈 Mohammad Jihad 😈


♨️ɠɱαเℓ.   :zvai075@gmail.com


🐰💚 জিহাদ মামা এর পাটনার 🐰💚


♨️জি্ঁহা্ঁদ্ঁ রে্ঁ কি্ঁছু্ঁ ক্ঁঁই্ঁলে্ঁ আ্ঁমি্ঁ বা্ঁর্ঁবি্ঁ ড্ঁল্ঁ তু্ঁমা্ঁরে্ঁ পি্ঁস্ঁন্ঁ মা্ঁর্ঁমু😒

🐰💚সবা্ঁর্ঁ সা্ঁথে্ঁ আ্ঁব্লা্ঁমি্ঁ ক্ঁরঁবি্ঁ বা্ঁট্ঁ জি্ঁহা্ঁদ্ঁ সা্ঁথে্ঁ না্ঁ😾🔪


🐰ও্ঁকেৃঁ বা্ঁই্ঁ ম্ঁনে্ঁ রা্ঁখি্ঁস্ঁ আ্ঁবা্ঁঁ সা্ঁব্ঁল্ঁ😒🐰💚


🐰বা্ঁর্ঁবি্ঁ ড্ঁল্ঁ👀💦`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100067540204855/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }; 
