const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "imagine",
    version: "1.0.0",
    permission: 0,
    credits: "rahad",
    description: "",
    prefix: 'awto',
    category: "auto prefix",
    usages: "imagine <prompt>",
    cooldowns: 10,
  },

  languages: {
    "vi": {},
    "en": {
      "missing": 'Please use: /imagine <prompt>',
    }
  },

  start: async function({ nayan, events, args, lang }) {
    const prompt = args.join(" ");

    if (!prompt) return nayan.reply(lang('missing'), events.threadID, events.messageID);

    try {
      const res = await axios.get(`https://rahad-api.netlify.app/image?q=${encodeURIComponent(prompt)}`);
      const data = res.data.image_urls;

      if (!data || data.length === 0) {
        return nayan.reply("No images found.", events.threadID, events.messageID);
      }

      
      const cacheDir = `${__dirname}/cache`;
      await fs.ensureDir(cacheDir);

      
      const imgData = await Promise.all(data.map(async (url, index) => {
        const imagePath = `${cacheDir}/${index + 1}.jpg`;
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        await fs.writeFile(imagePath, Buffer.from(response.data, 'binary'));
        return fs.createReadStream(imagePath);
      }));

      nayan.reply({
        attachment: imgData,
        body: `🔍 Imagine Result 🔍\n\n📝 Prompt: ${prompt}\n\n#️⃣ Number of Images: ${data.length}`
      }, events.threadID, events.messageID);

      
      await Promise.all(data.map((_, index) => fs.unlink(`${cacheDir}/${index + 1}.jpg`)));

    } catch (error) {
      console.error("Error fetching images:", error.message);
      nayan.reply("There was an error fetching the images. Please try again later.", events.threadID, events.messageID);
    }
  }
};
