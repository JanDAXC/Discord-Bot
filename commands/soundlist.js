const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = async (bot, message, args) => {

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Sound-Liste",
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
    },
    title: "!johncena",
    description: "Play the johncena Sound ab!",
    fields: [{
        name: "!bruh",
        value: "Spielt den Bruh Sound ab!"
      },
      {
        name: "!badumptss",
        value: "Spielt den badumptss Sound ab!"
      },
      {
        name: "!airhorn",
        value: "Spielt den airhorn Sound ab!"
      },
      {
        name: "!sadviolin",
        value: "Spielt den sadviolin Sound ab!"
      },
      {
        name: "!neindochohh",
        value: "Spielt den neindochohh Sound ab!"
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
    name: "sounds"
  }