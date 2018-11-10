const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Commands:",
        icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
      },
      title: "!adminhelp",
      description: "Mit dem Command siehst du alle Admin Features!",
      fields: [{
          name: "!userhelp",
          value: "Mit dem Command siehst ud alle User Features!"
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
  name: "commands"
}