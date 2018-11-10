const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Entwickler: TheRealJan",
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
    },
    title: "Bot Invite",
    url: "https://discordapp.com/oauth2/authorize?client_id=502923245519896577&scope=bot",
    description: "Ein Link um den Bot auf deinen Discord Server zulassen.",
    fields: [{
        name: "Twitter",
        value: "Klicke [hier](http://twitter.com/TheRealJanPC) um auf den Twitter Account zu gelangen!"
      },
      {
        name: "YouTube",
        value: "Klicke [hier](https://www.youtube.com/channel/UCxqHGV2Hs11i0jvZnbAiHFw?view_as=subscriber) um auf den YouTube Account zu gelangen!"
      },
      {
        name: "Website",
        value: "Klicke [hier](http://bit.ly/TheRealJan) um auf die Website zu kommen."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048",
      text: "© TheRealJan"
    }
  }
});
}

module.exports.help = {
    name: "credits"
  }