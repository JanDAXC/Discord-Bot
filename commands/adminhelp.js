const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast dafür leider keine Rechte!");
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Alle Admin Features:",
      icon_url: "https://cdn.discordapp.com/avatars/285418000734093312/da1bfd666a8154694e1d66bb39c0c373.png?size=2048"
    },
    title: "Kick & Bann System",
    description: "Schreib **!kick /!ban (Spieler)** Und der Spieler wir gekickt/gebannt. Der Bot schickt zusätzlich noch eine Nachricht in #log (Falls existiert)",
    fields: [{
        name: "~~Log-System~~",
        value: "**__ERROR__**"
      },
      {
        name: "Bad-Word System",
        value: "Wenn jemand böse Nachrichten schreibt wird die Nachricht gelöscht und er wird gewarnt!"
      },
      {
        name: "Auto-Role",
        value: "Erstell die Rolle @Member/Spieler und der Bot gibt den neuen Spielern die Rolle!"
      },
      {
        name: "Seite 2:",
        value: "*Um die 2. Seite zu sehen gib !adminhelp2 ein.**"
          
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
    name: "adminhelp"
  }