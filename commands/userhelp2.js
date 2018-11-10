const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Alle user features page 2:",
        icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
      },
      title: "Join & Leave Nachricht",
      description: "Make the channel welcome and send in a join / leave message!",
      fields: [{
          name: "Minecraft Server Status",
          value: "Schreib **!status (IP)** in den Chat um den Status von einem Server herauszufinden!"
        },
        {
          name: "Hunde & Katzenbilder",
          value: "Schreib **!cat/!dog** und du siehst Bilder von Katzen/Hunden :)"
        },
        {
          name: "Report-System",
          value: "Schreib **!report (player)** in den Chat um ein Spieler zu reporten!"
        },
        {
          name: "Level-System",
          value: "Du kriegst pro Nachricht XP, ab 500 XP steigst du ein Level auf, um XP und Level zu sehen gib !level in den Chat ein."
        },
        {
          name: "Fortnite Stats",
          value: "Schreib **!fortnite (Name) (Plattform: pc, xbl, psn)** in den Chat um Fortnite Stats von demjenigen Spieler zu erhalten. (Name) muss korrekt mit Groß- und Kleinschreibung geschrieben werden! Bei Plattform muss es pc, psn oder xblx sein!"
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
    name: "userhelp2"
  }
