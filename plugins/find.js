const { Bixby, findMusic, isPrivate } = require("../lib/");

Bixby({
      pattern: "find ?(.*)",
      fromMe: isPrivate,
      desc: "Finds music name using AI",
      usage: ".find reply to a music",
      use: 'search'
  }, async (message, match) => {
      if (!message.reply_message?.audio) return await message.reply("Reply to a music");
      if (message.reply_message.duration > 60) return await message.send('Audio too large! Use .trim command and cut the audio to < 60 secs');
      var audio = await message.reply_message.download('buffer');
      var data = await findMusic(audio)
      if (!data) return await message.reply("No matching results found!");
var buttons = [];
function getDuration(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
const Message = {
    text:  `Title: ${data.title}\n
Artists: ${data.artists?.map(e => e.name + " ")}\n
Released on: ${data.release_date}\n
Duration: ${getDuration(data.duration_ms)}\n
Album: ${data.album?.name}\n
Genres: ${data.genres?.map(e => e.name + " ")}\n
Label: ${data.label}\n
Spotify: ${"spotify" in data.external_metadata?"Available":"Unavailable"}\n
YouTube: ${"youtube" in data.external_metadata?"https://youtu.be/"+data.external_metadata.youtube.vid:"Unavailable"}\n`,
//    footer: '🎼 Listen to full music on',
//    buttons,
//    headerType:1
}
await message.client.sendMessage(message.jid, Message)    
    });
