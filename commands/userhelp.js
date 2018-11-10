const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "All User Features:",
        icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
      },
      title: "Spieler",
      description: "Schreib **!spieler** in den Chat um alle Spieler vom Server zu sehen.",
      fields: [{
          name: "Serverinfo",
          value: "Schreib **!serverinfo ** in den Chat und du siehst alle Infos über den Server auf dem du dich grade befindest"
        },
        {
          name: "Sounds",
          value: "Schreib **!sounds ** in den Chat und der Bot sendet Sound-Dateien in den Chat!"
        },
        {
          name: "Was ist mein Avatar",
          value: "Schreib das in den Chat und du siehst dein Avatar"
        },
        {
          name: "User-Info",
          value: "Schreib **!userinfo (player) ** in den Chat um eine Info über dich oder andere zu sehen."
        },
        {
          name: "Ticket-System",
          value: "Gib **!ticket (Problem z.b. Bug) (Beschreibung des Problems)** um ein Ticket zu erstellen."
        },
        {
          name: "2 Seite",
          value: "Um auf die 2. Seite zu kommen gib, **!userhelp2** ein."
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
    name: "userhelp"
  }
