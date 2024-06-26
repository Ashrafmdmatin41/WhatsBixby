const config = require("../config");
const { Bixby, isPublic, getJson, sleep } = require("../lib/");
const { tiny } = require("../lib/functions");
const { Image } = require("node-webpmux");


Bixby(
   {
    pattern: "sticker",
    fromMe: isPublic,
    desc: "_Converts Photo or video to sticker_",
    type: "converter",
  },
  async (message, match, m) => {
    if (!(message.reply_message.video || message.reply_message.image))
      return await message.reply(" *Reply to photo or video*");
    let buff = await m.quoted.download();
    message.sendMessage(
      buff,
      { packname: message.pushName, quoted: message },
      "sticker"
    );
  }
);
    

Bixby(
  {
    pattern: "tgs",
    fromMe: isPublic,
    desc: "Download Sticker From Telegram",
    type: "tool",
  },
  async (message, match) => {
    if (!match)
      return message.reply(
        "_Enter a tg sticker url_\nEg: https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently"
      );
    let packid = match.split("/addstickers/")[1];
    let { result } = await getJson(
      `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
        packid
      )}`
    );
    if (result.is_animated)
      return message.reply(" *Animated Stickers Are Not Supported*  ");
    message.reply(
      `*ᴛᴏᴛᴀʟ sᴛɪᴄᴋᴇʀs :* ${result.stickers.length}\n*ᴇsɪᴛɪᴍᴀᴛᴇᴅ ᴄᴏᴍᴘʟᴇᴛᴇ ɪɴ:* ${
        result.stickers.length * 1.5
      } seconds`.trim()
    );
    for (let sticker of result.stickers) {
      let file_path = await getJson(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${sticker.file_id}`
      );
      await message.sendMessage(
        `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`,
        { packname: config.PACKNAME, author: config.AUTHOR },
        "sticker"
      );
      sleep(1500);
    }
  }
);



Bixby(
  {
    pattern: "take",
    fromMe: isPublic,
    desc: " *Changes exif Data of sticker* ",
    type: "tool",
  },
  async (message, match, m) => {
    if (!message.reply_message && !message.reply_message.sticker)
      return await message.reply(" *Reply to Sticker* ");
    let buff = await m.quoted.download();
    let [packname, author] = match.split(",");
    await message.sendMessage(
      buff,
      {
        packname: packname || config.PACKNAME,
        author: author || config.AUTHOR,
      },
      "sticker"
    );
  }
);



Bixby(
  {
    pattern: "getexif",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match, m) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.reply(" *Reply to sticker* ");
    let img = new Image();
    await img.load(await m.quoted.download());
    const exif = JSON.parse(img.exif.slice(22).toString());
    await message.reply(exif);
  }
);
    
